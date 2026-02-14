"use client";

import { useState, useEffect } from "react";
import { WHATSAPP_URL, MANIFESTO, TOOL_BADGES } from "@/lib/constants";

interface HeroProps {
  showContent: boolean;
}

export function Hero({ showContent }: HeroProps) {
  const [typedText, setTypedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  // Typing effect
  useEffect(() => {
    if (!showContent) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i <= MANIFESTO.length) {
        setTypedText(MANIFESTO.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 28);
    return () => clearInterval(interval);
  }, [showContent]);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(interval);
  }, []);

  const highlightText = "Nós construímos esse lugar.";

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "140px 40px 60px",
        position: "relative",
        zIndex: 1,
        textAlign: "center",
      }}
    >
      {/* Logo grande [ETR] com text-shadow */}
      <div
        style={{
          fontFamily: "var(--font-press-start)",
          fontSize: "clamp(32px, 8vw, 80px)",
          letterSpacing: "6px",
          marginBottom: "16px",
          lineHeight: 1,
          textShadow: "4px 4px 0 #D4C4A8",
        }}
      >
        <span style={{ color: "#8B2D2D" }}>[</span>
        <span style={{ color: "#C4963A" }}>E</span>
        <span style={{ color: "#3A4828" }}>T</span>
        <span style={{ color: "#3A4828" }}>R</span>
        <span style={{ color: "#8B2D2D" }}>]</span>
      </div>

      {/* ENTER THE RENDER - Orbitron 700 */}
      <div
        style={{
          fontSize: "clamp(10px, 1.5vw, 14px)",
          letterSpacing: "clamp(4px, 1.2vw, 10px)",
          fontFamily: "var(--font-orbitron)",
          fontWeight: 700,
          color: "#6B7F4A",
          marginBottom: "12px",
          textTransform: "uppercase",
        }}
      >
        ENTER THE RENDER
      </div>

      {/* BUILDING WORLDS. RENDERING FUTURES. - Press Start 2P amber */}
      <div
        style={{
          fontFamily: "var(--font-press-start)",
          fontSize: "clamp(6px, 1vw, 9px)",
          letterSpacing: "2px",
          color: "#C4963A",
          marginBottom: "40px",
        }}
      >
        BUILDING WORLDS. RENDERING FUTURES.
      </div>

      {/* Manifesto - Orbitron 400, line-height 2.2 */}
      <div
        style={{
          maxWidth: "640px",
          width: "100%",
          marginBottom: "36px",
          position: "relative",
          padding: "32px 28px",
          background: "rgba(58,72,40,0.04)",
          borderLeft: "2px solid #4A5A33",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "12px",
            right: "16px",
            fontSize: "8px",
            fontFamily: "monospace",
            letterSpacing: "2px",
            color: "#A68B6B",
            opacity: 0.5,
          }}
        >
          manifesto.txt
        </div>

        <p
          style={{
            fontFamily: "var(--font-orbitron)",
            fontWeight: 400,
            fontSize: "clamp(13px, 1.3vw, 15px)",
            lineHeight: 2.2,
            color: "#5C4A36",
            textAlign: "left",
          }}
        >
          <span
            style={{
              color: "#6B7F4A",
              marginRight: "8px",
              opacity: 0.4,
              fontSize: "10px",
            }}
          >
            {">"}
          </span>
          {typedText.split(highlightText)[0]}
          {typedText.includes(highlightText) && (
            <span style={{ color: "#3A4828", fontWeight: 700 }}>
              {highlightText}
            </span>
          )}
          <span
            style={{
              color: "#C4963A",
              opacity: cursorVisible ? 1 : 0,
              transition: "opacity 0.1s",
              marginLeft: "2px",
            }}
          >
            ▌
          </span>
        </p>
      </div>

      {/* CTA */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "12px",
          padding: "18px 40px",
          background: "#3A4828",
          color: "#F5F0E8",
          textDecoration: "none",
          fontFamily: "monospace",
          fontSize: "12px",
          letterSpacing: "4px",
          fontWeight: "bold",
          border: "2px solid #3A4828",
          transition: "all 0.3s",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#C4963A";
          e.currentTarget.style.borderColor = "#C4963A";
          e.currentTarget.style.color = "#3D3024";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "#3A4828";
          e.currentTarget.style.borderColor = "#3A4828";
          e.currentTarget.style.color = "#F5F0E8";
        }}
      >
        CTRL + BUILD + DREAM
      </a>

      {/* Badges */}
      <div
        style={{
          display: "flex",
          gap: "24px",
          marginTop: "40px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {TOOL_BADGES.map((tool) => (
          <span
            key={tool}
            style={{
              fontSize: "9px",
              letterSpacing: "2px",
              fontFamily: "monospace",
              color: "#A68B6B",
              padding: "6px 14px",
              border: "1px solid #D4C4A8",
            }}
          >
            {tool}
          </span>
        ))}
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            fontSize: "9px",
            letterSpacing: "3px",
            fontFamily: "monospace",
            color: "#A68B6B",
          }}
        >
          SCROLL
        </span>
        <div
          style={{
            width: "1px",
            height: "32px",
            background: "linear-gradient(to bottom, #A68B6B, transparent)",
          }}
        />
      </div>
    </section>
  );
}
