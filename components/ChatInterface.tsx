"use client";

import { useState, useRef, useEffect } from "react";
import {
  Mic,
  MicOff,
  Send,
  User,
  Sparkles,
  Volume2,
  ArrowRight,
  RotateCcw,
  Compass,
  Lightbulb
} from "lucide-react";
import { useVoiceRecognition } from "@/hooks/useVoiceRecognition";
import { useVoiceSynthesis } from "@/hooks/useVoiceSynthesis";
import { VoiceWave } from "./VoiceWave";
import { ChecklistCard } from "./ChecklistCard";
import { Scenario } from "@/lib/search/searchEngine";
import { Language, UI_TEXT } from "@/lib/i18n";
import { ComprehensiveGuideline } from "@/lib/knowledge/guidelineEngine";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  voiceText?: string;
  scenario?: Scenario | null;
  guideline?: ComprehensiveGuideline | null;
  confidence?: number;
  related?: Scenario[];
}

function renderInline(text: string, isUser: boolean) {
  const parts = text.split(/(\[.*?\]\(.*?\)|\*\*.*?\*\*|\*.*?\*|`.*?`)/g);
  return parts.map((part, i) => {
    if (part.startsWith("[") && part.includes("](") && part.endsWith(")")) {
      const match = part.match(/^\[(.*?)\]\((.*?)\)$/);
      if (match) {
        const [, label, url] = match;
        const isTel = url.startsWith("tel:");
        return (
          <a
            key={i}
            href={url}
            target={isTel ? undefined : "_blank"}
            rel={isTel ? undefined : "noopener noreferrer"}
            className={
              isUser
                ? "underline font-bold text-white hover:text-white/80"
                : "text-blue-600 dark:text-blue-400 font-bold underline hover:text-blue-500"
            }
          >
            {label}
          </a>
        );
      }
    }
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className={isUser ? "font-bold text-white" : "font-bold text-foreground"}>
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <em key={i} className={isUser ? "italic text-white/90" : "italic text-muted-foreground"}>
          {part.slice(1, -1)}
        </em>
      );
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code key={i} className="bg-secondary/80 px-1.5 py-0.5 rounded text-xs font-mono text-blue-500">
          {part.slice(1, -1)}
        </code>
      );
    }
    return part;
  });
}

function FormattedMessage({ content, isUser }: { content: string; isUser: boolean }) {
  if (isUser) {
    return <div className="whitespace-pre-line leading-relaxed text-sm sm:text-base font-medium">{content}</div>;
  }

  const lines = content.split("\n");
  return (
    <div className="space-y-2 text-sm sm:text-base leading-relaxed text-foreground">
      {lines.map((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed) {
          return <div key={idx} className="h-1" />;
        }

        if (trimmed === "---" || trimmed === "***") {
          return <hr key={idx} className="my-2.5 border-border/70" />;
        }

        if (trimmed.startsWith("### ")) {
          return (
            <h3 key={idx} className="text-base sm:text-lg font-bold text-foreground mt-3 mb-1.5 flex items-center gap-1.5">
              {renderInline(trimmed.replace(/^###\s+/, ""), isUser)}
            </h3>
          );
        }

        if (trimmed.startsWith("#### ")) {
          return (
            <h4 key={idx} className="text-sm sm:text-base font-bold text-foreground mt-2 mb-1">
              {renderInline(trimmed.replace(/^####\s+/, ""), isUser)}
            </h4>
          );
        }

        if (line.startsWith("  - ") || line.startsWith("    - ") || line.startsWith("\t- ")) {
          const contentAfter = line.replace(/^\s+-\s+/, "");
          return (
            <div key={idx} className="flex items-start gap-2 pl-6 my-0.5 text-xs sm:text-sm text-muted-foreground">
              <span className="text-blue-500 font-bold">•</span>
              <span className="text-foreground/90">{renderInline(contentAfter, isUser)}</span>
            </div>
          );
        }

        if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
          return (
            <div key={idx} className="flex items-start gap-2.5 pl-1 my-1">
              <span className="text-blue-500 font-bold text-lg leading-none mt-0.5">•</span>
              <span className="text-foreground/90">{renderInline(trimmed.replace(/^[-*]\s+/, ""), isUser)}</span>
            </div>
          );
        }

        const numMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
        if (numMatch) {
          return (
            <div key={idx} className="flex items-start gap-2.5 pl-1 my-1">
              <span className="text-blue-600 dark:text-blue-400 font-bold text-sm bg-blue-500/10 px-1.5 py-0.5 rounded-md flex-shrink-0 mt-0.5">
                {numMatch[1]}
              </span>
              <span className="text-foreground/90">{renderInline(numMatch[2], isUser)}</span>
            </div>
          );
        }

        if (trimmed.startsWith("> ")) {
          return (
            <blockquote key={idx} className="border-l-3 border-amber-500 bg-amber-500/10 px-3.5 py-2 rounded-r-xl text-xs sm:text-sm italic text-amber-700 dark:text-amber-300 my-2">
              {renderInline(trimmed.replace(/^>\s+/, ""), isUser)}
            </blockquote>
          );
        }

        return <p key={idx} className="my-1">{renderInline(trimmed, isUser)}</p>;
      })}
    </div>
  );
}

interface ChatInterfaceProps {
  autoSpeak: boolean;
  externalQuery?: string | null;
  onClearExternalQuery?: () => void;
  language?: Language;
}

export function ChatInterface({
  autoSpeak,
  externalQuery,
  onClearExternalQuery,
  language = "bn",
}: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const t = UI_TEXT[language];

  const featuredTopics = [
    {
      icon: "🚗",
      ...t.topics.car,
      color: "hover:border-blue-500/50 hover:bg-blue-500/5",
    },
    {
      icon: "📜",
      ...t.topics.land,
      color: "hover:border-emerald-500/50 hover:bg-emerald-500/5",
    },
    {
      icon: "🐟",
      ...t.topics.food,
      color: "hover:border-amber-500/50 hover:bg-amber-500/5",
    },
    {
      icon: "🍳",
      ...t.topics.cooking,
      color: "hover:border-orange-500/50 hover:bg-orange-500/5",
    },
    {
      icon: "📱",
      ...t.topics.phone,
      color: "hover:border-indigo-500/50 hover:bg-indigo-500/5",
    },
    {
      icon: "🎓",
      ...t.topics.college,
      color: "hover:border-purple-500/50 hover:bg-purple-500/5",
    },
    {
      icon: "👔",
      ...t.topics.stains,
      color: "hover:border-teal-500/50 hover:bg-teal-500/5",
    },
    {
      icon: "⚖️",
      ...t.topics.legal,
      color: "hover:border-rose-500/50 hover:bg-rose-500/5",
    },
  ];

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const latestMessageRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { speak, isSpeaking, stopSpeaking } = useVoiceSynthesis();

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query || isLoading) return;

    setInputValue("");

    // Add user message
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: query,
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: query, lang: language }),
      });

      const data = await res.json();

      const assistantMsg: Message = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: data.reply,
        voiceText: data.voiceText,
        scenario: data.scenario,
        guideline: data.guideline,
        confidence: data.confidence,
        related: data.related,
      };

      setMessages((prev) => [...prev, assistantMsg]);

      // Automatically speak if voice is enabled
      if (autoSpeak && data.voiceText) {
        speak(data.voiceText, language);
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: `error-${Date.now()}`,
          role: "assistant",
          content:
            language === "bn"
              ? "দুঃখিত, সংযোগে সমস্যা হয়েছে। ইন্টারনেট সংযোগ পরীক্ষা করে পুনরায় চেষ্টা করুন।"
              : "Sorry, I had trouble reaching the verified database. Please check your connection and try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Voice recognition setup configured with active language
  const {
    isListening,
    transcript,
    isSupported: isSpeechSupported,
    toggleListening,
  } = useVoiceRecognition((finalTranscript) => {
    if (finalTranscript) {
      handleSendMessage(finalTranscript);
    }
  }, language);

  // Handle external query from explorer
  useEffect(() => {
    if (externalQuery) {
      handleSendMessage(externalQuery);
      if (onClearExternalQuery) onClearExternalQuery();
    }
  }, [externalQuery]);

  // Scroll smoothly to start of assistant response
  useEffect(() => {
    if (messages.length > 0) {
      const lastMsg = messages[messages.length - 1];
      if (lastMsg.role === "assistant") {
        latestMessageRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [messages, isLoading]);

  const handleResetChat = () => {
    stopSpeaking();
    setMessages([]);
    setInputValue("");
  };

  const isHeroState = messages.length === 0;

  return (
    <div className="flex flex-col h-[calc(100vh-62px)] max-w-4xl mx-auto px-3 sm:px-4 py-2 sm:py-3">
      {/* Top Banner when in conversation */}
      {!isHeroState && (
        <div className="flex items-center justify-between pb-2 border-b border-border/40 mb-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{t.guideSession}</span>
          </div>
          <button
            onClick={handleResetChat}
            className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground bg-secondary/80 hover:bg-secondary px-2.5 py-1.5 rounded-xl transition-colors shadow-xs active:scale-95"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{t.newQuestion}</span>
          </button>
        </div>
      )}

      {/* Voice Activity Wave */}
      <div className="mb-1">
        <VoiceWave isListening={isListening} isSpeaking={isSpeaking} />
      </div>

      {/* Active Listening Floating Banner */}
      {isListening && (
        <div className="p-3 mb-2 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-between gap-3 animate-in fade-in">
          <div className="flex items-center gap-2.5">
            <div className="w-3 h-3 rounded-full bg-red-500 animate-ping" />
            <span className="text-xs sm:text-sm font-semibold text-foreground">
              {transcript ? `"${transcript}"` : t.listeningBanner}
            </span>
          </div>
          <button
            onClick={toggleListening}
            className="px-3 py-1.5 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-colors active:scale-95"
          >
            {t.stop}
          </button>
        </div>
      )}

      {/* Scrollable Area: Hero State OR Messages */}
      <div className="flex-1 overflow-y-auto pr-1 pb-4 space-y-4">
        {isHeroState ? (
          /* ================= WELCOME HERO STATE (NON-TECH FRIENDLY) ================= */
          <div className="py-4 sm:py-8 space-y-6 sm:space-y-8 max-w-3xl mx-auto text-center">
            {/* Friendly Greeting & Headline */}
            <div className="space-y-3">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-blue-500 text-white flex items-center justify-center mx-auto shadow-xl shadow-blue-500/25">
                <Compass className="w-8 h-8 sm:w-10 sm:h-10 animate-pulse" />
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                {t.heroTitle}
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
                {t.heroSubtitle}
              </p>
            </div>

            {/* Giant Inviting Microphone Button */}
            {isSpeechSupported && (
              <div className="p-4 sm:p-5 rounded-3xl border border-blue-500/20 bg-gradient-to-b from-blue-500/5 to-transparent flex flex-col items-center gap-3">
                <button
                  onClick={toggleListening}
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-white shadow-xl transition-all duration-300 active:scale-95 ${
                    isListening
                      ? "bg-red-500 shadow-red-500/40 animate-pulse"
                      : "bg-gradient-to-tr from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105"
                  }`}
                  title={t.tapToSpeak}
                >
                  {isListening ? (
                    <MicOff className="w-7 h-7 sm:w-9 sm:h-9" />
                  ) : (
                    <Mic className="w-7 h-7 sm:w-9 sm:h-9" />
                  )}
                </button>
                <div className="text-center">
                  <span className="text-sm sm:text-base font-bold text-foreground block">
                    {isListening ? t.listeningTapStop : t.tapToSpeak}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {t.speakFreely}
                  </span>
                </div>
              </div>
            )}

            {/* Featured Topic Cards (One-Tap Solutions) */}
            <div className="space-y-3 text-left">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs sm:text-sm font-bold text-muted-foreground uppercase tracking-wider">
                  {t.popularProblems}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {featuredTopics.map((topic, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(topic.prompt)}
                    className={`p-3.5 sm:p-4 rounded-2xl border border-border bg-card text-left transition-all shadow-sm flex items-start gap-3 group active:scale-98 ${topic.color}`}
                  >
                    <span className="text-2xl sm:text-3xl p-2 rounded-xl bg-secondary/80 flex-shrink-0 group-hover:scale-110 transition-transform">
                      {topic.icon}
                    </span>
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-1">
                        <h4 className="text-sm sm:text-base font-bold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {topic.title}
                        </h4>
                        <ArrowRight className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-snug line-clamp-2">
                        {topic.desc}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* ================= CONVERSATION MESSAGES FLOW ================= */
          messages.map((msg, idx) => (
            <div
              key={msg.id}
              ref={idx === messages.length - 1 ? latestMessageRef : undefined}
              className={`flex items-start gap-2.5 sm:gap-3.5 ${
                msg.role === "user" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              {/* Avatar */}
              <div
                className={`w-8 h-8 sm:w-9 sm:h-9 rounded-2xl flex items-center justify-center flex-shrink-0 text-xs font-bold shadow-sm ${
                  msg.role === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-blue-500/20"
                }`}
              >
                {msg.role === "user" ? (
                  <User className="w-4 h-4 sm:w-5 sm:h-5" />
                ) : (
                  <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300" />
                )}
              </div>

              {/* Message Bubble */}
              <div
                className={`max-w-[92%] sm:max-w-[85%] rounded-3xl p-4 sm:p-5 text-sm sm:text-base leading-relaxed ${
                  msg.role === "user"
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-tr-md shadow-md shadow-blue-600/10"
                    : "bg-card border border-border/80 text-foreground rounded-tl-md shadow-sm"
                }`}
              >
                {/* Formatted Content */}
                <FormattedMessage content={msg.content} isUser={msg.role === "user"} />

                {/* Scenario Interactive Checklist Card */}
                {msg.scenario && (
                  <div className="mt-3">
                    <ChecklistCard
                      scenario={msg.scenario}
                      guideline={msg.guideline || undefined}
                      language={language}
                    />
                  </div>
                )}

                {/* Related Scenario Quick Links */}
                {msg.related && msg.related.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-border/60 text-xs sm:text-sm space-y-2">
                    <span className="font-bold text-muted-foreground flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                      <span>{t.relatedGuides}</span>
                    </span>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                      {msg.related.map((rel) => (
                        <button
                          key={rel.id}
                          onClick={() => handleSendMessage(rel.title)}
                          className="px-3 py-1.5 rounded-xl bg-secondary/80 hover:bg-secondary text-foreground text-xs sm:text-sm font-semibold border border-border transition-all flex items-center gap-1.5 active:scale-95 hover:border-blue-500/40"
                        >
                          <span>{rel.title}</span>
                          <ArrowRight className="w-3 h-3 text-blue-500" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Speech replay button */}
                {msg.voiceText && (
                  <div className="mt-3 pt-2 flex items-center justify-between border-t border-border/40">
                    <span className="text-[11px] text-muted-foreground">{t.voiceAssistant}</span>
                    <button
                      onClick={() => speak(msg.voiceText || msg.content, language)}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-500/10 hover:bg-blue-500/20 transition-colors active:scale-95"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>{t.listenToAnswer}</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))
        )}

        {/* Loading Spinner */}
        {isLoading && (
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-card border border-border/80 max-w-md shadow-sm ml-11 animate-pulse">
            <div className="w-3 h-3 rounded-full bg-blue-500 animate-ping" />
            <span className="text-xs sm:text-sm font-semibold text-foreground">
              {t.searching}
            </span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Quick Prompts Pills (visible when chatting) */}
      {!isHeroState && (
        <div className="py-1.5 overflow-x-auto no-scrollbar flex items-center gap-1.5 mb-1.5">
          {t.quickPills.map((pill, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(pill)}
              className="px-3 py-1 rounded-full text-xs font-semibold border border-border bg-card hover:bg-accent text-foreground whitespace-nowrap transition-all shadow-xs active:scale-95"
            >
              {pill}
            </button>
          ))}
        </div>
      )}

      {/* Ergonomic Floating Bottom Input Box */}
      <div className="relative rounded-2xl sm:rounded-3xl border border-border/80 bg-card p-2 sm:p-2.5 shadow-lg focus-within:ring-2 focus-within:ring-blue-500/50 transition-all">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center gap-1.5 sm:gap-2"
        >
          {/* Main Input Text Field */}
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={t.askPlaceholder}
            className="flex-1 bg-transparent px-3 py-2 text-sm sm:text-base text-foreground placeholder:text-muted-foreground focus:outline-none"
            disabled={isLoading}
          />

          {/* Prominent Voice Microphone Button */}
          {isSpeechSupported && (
            <button
              type="button"
              onClick={toggleListening}
              className={`p-2.5 sm:p-3 rounded-xl sm:rounded-2xl transition-all flex items-center justify-center active:scale-90 ${
                isListening
                  ? "bg-red-500 text-white animate-pulse shadow-md shadow-red-500/30"
                  : "bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/20"
              }`}
              title={isListening ? t.listeningTapStop : t.tapToSpeak}
            >
              <Mic className="w-5 h-5 sm:w-5 sm:h-5" />
            </button>
          )}

          {/* Send Button */}
          <button
            type="submit"
            disabled={!inputValue.trim() || isLoading}
            className={`p-2.5 sm:p-3 rounded-xl sm:rounded-2xl transition-all flex items-center justify-center active:scale-90 ${
              inputValue.trim() && !isLoading
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25 hover:opacity-95"
                : "bg-muted text-muted-foreground/50 cursor-not-allowed"
            }`}
            title="Send question"
          >
            <Send className="w-5 h-5 sm:w-5 sm:h-5" />
          </button>
        </form>
      </div>
    </div>
  );
}
