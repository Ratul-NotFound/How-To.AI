"use client";

import { useState, useEffect, useCallback, useRef } from "react";

export function useVoiceSynthesis() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      setIsSupported(true);

      const updateVoices = () => {
        const available = window.speechSynthesis.getVoices();
        setVoices(available);
      };

      updateVoices();
      window.speechSynthesis.onvoiceschanged = updateVoices;
    }
  }, []);

  const speak = useCallback(
    (text: string, lang: "en" | "bn" = "bn") => {
      if (!isSupported || typeof window === "undefined") return;

      const isBengali = lang === "bn" || /[\u0980-\u09FF]/.test(text);

      // Clean markdown symbols for natural speech
      const cleanText = text
        .replace(/[#*`_~>[\]]/g, " ")
        .replace(/-\s*\[\s*\]/g, " ")
        .replace(/\s+/g, " ")
        .trim();

      // Cancel ongoing speech
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.rate = isBengali ? 0.95 : 1.0;
      utterance.pitch = 1.0;
      utterance.lang = isBengali ? "bn-BD" : "en-US";

      // Select best voice: check if Bengali voice is available
      let bestVoice: SpeechSynthesisVoice | undefined;
      if (isBengali) {
        bestVoice = voices.find(
          (v) =>
            v.lang.toLowerCase().startsWith("bn") ||
            v.name.toLowerCase().includes("bengali") ||
            v.name.toLowerCase().includes("bangla")
        );
      }

      if (!bestVoice) {
        bestVoice =
          voices.find((v) => v.name.includes("Natural") || v.name.includes("Google")) ||
          voices.find((v) => v.lang.startsWith("en")) ||
          voices[0];
      }

      if (bestVoice) {
        utterance.voice = bestVoice;
      }

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    },
    [isSupported, voices]
  );

  const stopSpeaking = useCallback(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, []);

  return {
    isSpeaking,
    isSupported,
    speak,
    stopSpeaking,
  };
}
