"use client";

interface VoiceWaveProps {
  isListening: boolean;
  isSpeaking: boolean;
}

export function VoiceWave({ isListening, isSpeaking }: VoiceWaveProps) {
  if (!isListening && !isSpeaking) return null;

  return (
    <div className="flex items-center justify-center gap-1 py-1.5 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 w-fit mx-auto text-blue-500 text-xs font-semibold">
      <div className="flex items-center gap-0.5 h-3">
        <span className="w-1 bg-blue-500 rounded-full animate-wave" style={{ animationDelay: "0ms", height: "80%" }} />
        <span className="w-1 bg-blue-500 rounded-full animate-wave" style={{ animationDelay: "150ms", height: "100%" }} />
        <span className="w-1 bg-blue-500 rounded-full animate-wave" style={{ animationDelay: "300ms", height: "60%" }} />
        <span className="w-1 bg-blue-500 rounded-full animate-wave" style={{ animationDelay: "450ms", height: "90%" }} />
        <span className="w-1 bg-blue-500 rounded-full animate-wave" style={{ animationDelay: "200ms", height: "70%" }} />
      </div>
      <span className="ml-1.5">
        {isListening ? "Listening to your voice..." : "Speaking response..."}
      </span>
    </div>
  );
}
