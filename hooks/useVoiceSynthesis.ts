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
    (text: string) => {
      if (!isSupported || typeof window === "undefined") return;

      // Clean markdown symbols for natural speech
      const cleanText = text
        .replace(/[#*`_~>[\]]/g, " ")
        .replace(/-\s*\[\s*\]/g, " ")
        .replace(/\s+/g, " ")
        .trim();

      // Cancel ongoing speech
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.rate = 1.05;
      utterance.pitch = 1.0;

      // Select best voice: Natural / Google / Microsoft / English
      const bestVoice =
        voices.find((v) => v.name.includes("Natural") || v.name.includes("Google")) ||
        voices.find((v) => v.lang.startsWith("en")) ||
        voices[0];

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
