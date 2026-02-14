"use client";

import { useState } from "react";
import { SERVICES, WHATSAPP_URL } from "@/lib/constants";

export function Services() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section
      id="services"
      style={{
        padding: "80px 40px",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            fontSize: "9px",
            letterSpacing: "4px",
            fontFamily: "monospace",
            color: "#6B7F4A",
            marginBottom: "12px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <span style={{ color: "#C4963A", fontFamily: "var(--font-press-start)", fontSize: "8px" }}>//</span>
          <span style={{ fontFamily: "var(--font-press-start)", fontSize: "8px" }}>01</span> — SERVIÇOS
        </div>
        <h2
          style={{
            fontFamily: "monospace",
            fontSize: "clamp(24px, 3.5vw, 42px)",
            fontWeight: "bold",
            color: "#3A4828",
            marginBottom: "48px",
            lineHeight: 1.2,
          }}
        >
          O que <span style={{ color: "#C4963A" }}>construímos</span>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "2px",
            background: "#6B7F4A",
          }}
        >
          {SERVICES.map((service) => (
            <div
              key={service.id}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              style={{
                background: hoveredService === service.id ? "#3A4828" : "#FAF7F0",
                padding: "48px 40px",
                transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: "default",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{ position: "relative", zIndex: 1 }}>
                <span
                  style={{
                    fontSize: "28px",
                    display: "block",
                    marginBottom: "20px",
                    transition: "color 0.4s",
                    color: hoveredService === service.id ? "#C4963A" : "#4A5A33",
                  }}
                >
                  {service.icon}
                </span>

                <div
                  style={{
                    fontFamily: "monospace",
                    fontSize: "10px",
                    letterSpacing: "3px",
                    color: hoveredService === service.id ? "#8B9A6B" : "#A68B6B",
                    marginBottom: "4px",
                    transition: "color 0.4s",
                  }}
                >
                  {service.subtitle}
                </div>

                <div
                  style={{
                    fontFamily: "monospace",
                    fontSize: "16px",
                    fontWeight: "bold",
                    letterSpacing: "3px",
                    color: hoveredService === service.id ? "#F5F0E8" : "#3A4828",
                    marginBottom: "16px",
                    transition: "color 0.4s",
                  }}
                >
                  {service.title}
                </div>

                <p
                  style={{
                    fontSize: "12px",
                    lineHeight: 1.9,
                    fontFamily: "monospace",
                    color: hoveredService === service.id ? "#D4C4A8" : "#7A6248",
                    marginBottom: "24px",
                    transition: "color 0.4s",
                    maxWidth: "400px",
                  }}
                >
                  {service.desc}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {service.tools.map((tool) => (
                    <span
                      key={tool}
                      style={{
                        fontSize: "9px",
                        letterSpacing: "1px",
                        fontFamily: "monospace",
                        padding: "4px 10px",
                        border: `1px solid ${hoveredService === service.id ? "#4A5A33" : "#D4C4A8"}`,
                        color: hoveredService === service.id ? "#7FBF5F" : "#A68B6B",
                        transition: "all 0.4s",
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "10px",
              letterSpacing: "3px",
              fontFamily: "monospace",
              color: "#A68B6B",
              textDecoration: "none",
              padding: "12px 28px",
              border: "1px solid #D4C4A8",
              transition: "all 0.3s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#C4963A";
              e.currentTarget.style.color = "#3D3024";
              e.currentTarget.style.borderColor = "#C4963A";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#A68B6B";
              e.currentTarget.style.borderColor = "#D4C4A8";
            }}
          >
            RENDERIZE SEU MUNDO →
          </a>
        </div>
      </div>
    </section>
  );
}
