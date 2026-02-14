"use client";

import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsComplete(true), 400);
          setTimeout(() => onComplete(), 800);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (isComplete) return null;

  return (
    <div
      className={`fixed inset-0 bg-[#3A4828] flex flex-col items-center justify-center font-mono text-[#F5F0E8] z-[9999] transition-opacity duration-500 ${
        progress >= 100 ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Logo */}
      <div className="font-mono text-[clamp(20px,4vw,36px)] font-bold tracking-[6px] mb-12">
        <span className="text-[#8B2D2D]">[</span>
        <span className="text-[#D4A64A]">E</span>
        <span>T</span>
        <span>R</span>
        <span className="text-[#8B2D2D]">]</span>
      </div>

      {/* Progress bar */}
      <div className="w-[280px] h-[2px] bg-[#4A5A33] mb-4 relative">
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#6B7F4A] to-[#C4963A] transition-[width] duration-100 loading-glow"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>

      {/* Progress text */}
      <div className="text-[10px] tracking-[3px] text-[#8B9A6B]">
        LOADING WORLD... {Math.min(Math.round(progress), 100)}%
      </div>
    </div>
  );
}
