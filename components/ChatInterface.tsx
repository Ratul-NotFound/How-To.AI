"use client";

import { useState, useRef, useEffect } from "react";
import { Mic, MicOff, Send, Bot, User, Sparkles, Volume2, ArrowRight } from "lucide-react";
import { useVoiceRecognition } from "@/hooks/useVoiceRecognition";
import { useVoiceSynthesis } from "@/hooks/useVoiceSynthesis";
import { VoiceWave } from "./VoiceWave";
import { ChecklistCard } from "./ChecklistCard";
import { Scenario } from "@/lib/search/searchEngine";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  voiceText?: string;
  scenario?: Scenario | null;
  confidence?: number;
  related?: Scenario[];
}

const QUICK_PROMPTS = [
  "How to test formalin in fish?",
  "Used car inspection checklist",
  "How to apply for e-mutation namjari?",
  "How to remove turmeric stain from shirt?",
  "XI class college admission choice strategy",
  "Tenderize tough beef with raw papaya",
];

function renderInline(text: string, isUser: boolean) {
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*|`.*?`)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className={isUser ? "font-bold text-white" : "font-semibold text-foreground"}>
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
        <code key={i} className="bg-secondary/80 px-1.5 py-0.5 rounded text-xs font-mono text-blue-400">
          {part.slice(1, -1)}
        </code>
      );
    }
    return part;
  });
}

function FormattedMessage({ content, isUser }: { content: string; isUser: boolean }) {
  if (isUser) {
    return <div className="whitespace-pre-line leading-relaxed">{content}</div>;
  }

  const lines = content.split("\n");
  return (
    <div className="space-y-2 text-sm leading-relaxed">
      {lines.map((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed) {
          return <div key={idx} className="h-1" />;
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
            <h4 key={idx} className="text-sm font-semibold text-foreground mt-2 mb-1">
              {renderInline(trimmed.replace(/^####\s+/, ""), isUser)}
            </h4>
          );
        }

        if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
          return (
            <div key={idx} className="flex items-start gap-2 pl-2">
              <span className="text-blue-500 font-bold">•</span>
              <span className="text-foreground/90">{renderInline(trimmed.replace(/^[-*]\s+/, ""), isUser)}</span>
            </div>
          );
        }

        const numMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
        if (numMatch) {
          return (
            <div key={idx} className="flex items-start gap-2 pl-2">
              <span className="text-blue-500 font-bold text-xs mt-0.5">{numMatch[1]}.</span>
              <span className="text-foreground/90">{renderInline(numMatch[2], isUser)}</span>
            </div>
          );
        }

        if (trimmed.startsWith("> ")) {
          return (
            <blockquote key={idx} className="border-l-2 border-amber-500 bg-amber-500/10 px-3 py-1.5 rounded-r-lg text-xs italic text-amber-600 dark:text-amber-400 my-1">
              {renderInline(trimmed.replace(/^>\s+/, ""), isUser)}
            </blockquote>
          );
        }

        return <p key={idx}>{renderInline(trimmed, isUser)}</p>;
      })}
    </div>
  );
}


interface ChatInterfaceProps {
  autoSpeak: boolean;
  externalQuery?: string | null;
  onClearExternalQuery?: () => void;
}

export function ChatInterface({
  autoSpeak,
  externalQuery,
  onClearExternalQuery,
}: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: `👋 Hello! I am **How-To.AI**, your voice-enabled life navigation assistant.\n\nI am backed by a verified database of **2,000 real-world life scenarios**—from land deeds, BRTA car checks, and college admissions, to kitchen chemistry, stain removal, and emergency SOPs.\n\n**Tap the microphone to speak, or type your question below!**`,
      voiceText: "Hello! I am How-To dot A I. I can guide you through 2,000 real-world life problems. Tap the microphone to speak or type your question.",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

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
        body: JSON.stringify({ message: query }),
      });

      const data = await res.json();

      const assistantMsg: Message = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: data.reply,
        voiceText: data.voiceText,
        scenario: data.scenario,
        confidence: data.confidence,
        related: data.related,
      };

      setMessages((prev) => [...prev, assistantMsg]);

      // Automatically speak if voice is enabled
      if (autoSpeak && data.voiceText) {
        speak(data.voiceText);
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: `error-${Date.now()}`,
          role: "assistant",
          content: "Sorry, I encountered an issue connecting to the knowledge base. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Voice recognition setup
  const {
    isListening,
    transcript,
    isSupported: isSpeechSupported,
    toggleListening,
  } = useVoiceRecognition((finalTranscript) => {
    if (finalTranscript) {
      handleSendMessage(finalTranscript);
    }
  });

  // Handle external query from explorer
  useEffect(() => {
    if (externalQuery) {
      handleSendMessage(externalQuery);
      if (onClearExternalQuery) onClearExternalQuery();
    }
  }, [externalQuery]);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  return (
    <div className="flex flex-col h-[calc(100vh-65px)] max-w-4xl mx-auto px-3 sm:px-4 py-3">
      {/* Voice Activity Wave */}
      <div className="mb-2">
        <VoiceWave isListening={isListening} isSpeaking={isSpeaking} />
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto space-y-4 pr-1 pb-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-3 ${
              msg.role === "user" ? "flex-row-reverse" : "flex-row"
            }`}
          >
            {/* Avatar */}
            <div
              className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 text-xs font-bold ${
                msg.role === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gradient-to-tr from-indigo-500 to-blue-600 text-white shadow-md shadow-blue-500/20"
              }`}
            >
              {msg.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
            </div>

            {/* Bubble */}
            <div
              className={`max-w-[88%] sm:max-w-[80%] rounded-2xl p-4 text-sm leading-relaxed ${
                msg.role === "user"
                  ? "bg-blue-600 text-white rounded-tr-sm"
                  : "bg-card border border-border text-foreground rounded-tl-sm shadow-sm"
              }`}
            >
              {/* Message text */}
              <FormattedMessage content={msg.content} isUser={msg.role === "user"} />

              {/* Scenario Interactive Checklist Card */}
              {msg.scenario && (
                <div className="mt-3">
                  <ChecklistCard scenario={msg.scenario} />
                </div>
              )}

              {/* Related Scenario Quick Links */}
              {msg.related && msg.related.length > 0 && (
                <div className="mt-3 pt-2 border-t border-border/50 text-xs space-y-1.5">
                  <span className="font-semibold text-muted-foreground block">
                    Explore Related Guides:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {msg.related.map((rel) => (
                      <button
                        key={rel.id}
                        onClick={() => handleSendMessage(rel.title)}
                        className="px-2.5 py-1 rounded-lg bg-secondary/80 hover:bg-secondary text-foreground text-[11px] font-medium border border-border transition-colors flex items-center gap-1"
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
                <div className="mt-2.5 flex justify-end">
                  <button
                    onClick={() => speak(msg.voiceText || msg.content)}
                    className="flex items-center gap-1 text-[11px] text-muted-foreground hover:text-blue-500 font-medium transition-colors"
                  >
                    <Volume2 className="w-3 h-3" />
                    <span>Replay Audio</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex items-center gap-2 text-xs text-muted-foreground italic pl-11">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
            <span>Scanning 2,000 verified scenarios...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Quick Prompts */}
      {messages.length <= 2 && (
        <div className="py-2 overflow-x-auto no-scrollbar flex items-center gap-1.5 mb-2">
          {QUICK_PROMPTS.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(prompt)}
              className="px-3 py-1.5 rounded-full text-xs font-medium border border-border bg-card hover:bg-accent hover:border-blue-500/40 text-foreground whitespace-nowrap transition-all shadow-sm"
            >
              {prompt}
            </button>
          ))}
        </div>
      )}

      {/* Input Box and Voice Mic */}
      <div className="relative rounded-2xl border border-border bg-card p-2 shadow-lg focus-within:ring-2 focus-within:ring-blue-500 transition-all">
        {/* Live speech transcript banner */}
        {isListening && transcript && (
          <div className="px-3 py-1.5 mb-1.5 rounded-lg bg-blue-500/10 text-blue-500 text-xs font-medium flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="truncate">"{transcript}"</span>
          </div>
        )}

        <div className="flex items-center gap-2">
          {/* Voice Microphone Button */}
          {isSpeechSupported ? (
            <button
              onClick={toggleListening}
              title={isListening ? "Stop Listening" : "Tap to Speak"}
              className={`p-2.5 rounded-xl transition-all ${
                isListening
                  ? "bg-red-500 text-white animate-pulse shadow-md shadow-red-500/30 scale-105"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-accent"
              }`}
            >
              {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
            </button>
          ) : null}

          {/* Text Input */}
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
            placeholder={
              isListening ? "Listening... Speak now!" : "Ask any life problem (e.g. land, car, food, stain, admission)..."
            }
            className="flex-1 bg-transparent px-2 py-1.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none"
          />

          {/* Send Button */}
          <button
            onClick={() => handleSendMessage()}
            disabled={!inputValue.trim() || isLoading}
            className="p-2.5 rounded-xl bg-blue-600 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
