"use client";

import { useTypingEffect } from "@/hooks/useTypingEffect";

interface TypingEffectProps {
  text: string;
  speed?: number;
  startDelay?: number;
  enabled?: boolean;
  highlightLast?: string;
  className?: string;
}

export function TypingEffect({
  text,
  speed = 28,
  startDelay = 0,
  enabled = true,
  highlightLast,
  className = "",
}: TypingEffectProps) {
  const { displayedText } = useTypingEffect(text, speed, startDelay, enabled);

  const renderText = () => {
    if (highlightLast && displayedText.includes(highlightLast)) {
      const parts = displayedText.split(highlightLast);
      return (
        <>
          {parts[0]}
          <span className="text-[#3A4828] font-bold">{highlightLast}</span>
        </>
      );
    }
    return displayedText;
  };

  return (
    <span className={className}>
      <span className="text-[#6B7F4A] mr-2 opacity-40 text-[10px]">{">"}</span>
      {renderText()}
      <span className="text-[#C4963A] ml-0.5 cursor-blink">▌</span>
    </span>
  );
}
