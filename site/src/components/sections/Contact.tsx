"use client";

import { CONTACT, WHATSAPP_URL } from "@/lib/constants";

export function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "80px 40px",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
        }}
      >
        <div>
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
            <span style={{ fontFamily: "var(--font-press-start)", fontSize: "8px" }}>04</span> — CONTATO
          </div>
          <h2
            style={{
              fontFamily: "monospace",
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontWeight: "bold",
              color: "#3A4828",
              marginBottom: "24px",
              lineHeight: 1.2,
            }}
          >
            Pronto pra
            <br />
            <span style={{ color: "#C4963A" }}>entrar?</span>
          </h2>
          <p
            style={{
              fontSize: "13px",
              lineHeight: 2,
              fontFamily: "monospace",
              color: "#7A6248",
              marginBottom: "40px",
            }}
          >
            Seu projeto já existe. Só precisa ser renderizado. Conte sobre o espaço — nós
            construímos a realidade paralela.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {[
              { label: "EMAIL", value: CONTACT.email },
              { label: "WHATSAPP", value: CONTACT.phone },
              { label: "INSTAGRAM", value: CONTACT.instagram },
              { label: "BEHANCE", value: CONTACT.behance },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <span
                  style={{
                    fontSize: "9px",
                    letterSpacing: "2px",
                    fontFamily: "monospace",
                    color: "#A68B6B",
                    minWidth: "80px",
                  }}
                >
                  {item.label}
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    fontFamily: "monospace",
                    color: "#3A4828",
                    fontWeight: "500",
                  }}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            background: "#F5F0E8",
            border: "2px solid #D4C4A8",
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              fontSize: "9px",
              letterSpacing: "3px",
              fontFamily: "monospace",
              color: "#6B7F4A",
              marginBottom: "8px",
            }}
          >
            <span style={{ color: "#8B2D2D" }}>&gt;</span> NOVO_PROJETO.INIT
          </div>

          {["NOME", "EMAIL", "TIPO DE PROJETO", "MENSAGEM"].map((field, i) => (
            <div key={field}>
              <label
                style={{
                  display: "block",
                  fontSize: "9px",
                  letterSpacing: "2px",
                  fontFamily: "monospace",
                  color: "#A68B6B",
                  marginBottom: "8px",
                }}
              >
                {field}
              </label>
              {i === 3 ? (
                <textarea
                  rows={4}
                  style={{
                    width: "100%",
                    padding: "12px",
                    background: "#FAF7F0",
                    border: "1px solid #D4C4A8",
                    fontFamily: "monospace",
                    fontSize: "12px",
                    color: "#3D3024",
                    outline: "none",
                    resize: "vertical",
                  }}
                />
              ) : (
                <input
                  type={i === 1 ? "email" : "text"}
                  style={{
                    width: "100%",
                    padding: "12px",
                    background: "#FAF7F0",
                    border: "1px solid #D4C4A8",
                    fontFamily: "monospace",
                    fontSize: "12px",
                    color: "#3D3024",
                    outline: "none",
                  }}
                />
              )}
            </div>
          ))}

          <button
            style={{
              padding: "16px",
              background: "#3A4828",
              color: "#F5F0E8",
              border: "2px solid #3A4828",
              fontFamily: "monospace",
              fontSize: "11px",
              letterSpacing: "3px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "all 0.3s",
              marginTop: "8px",
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
            EXECUTAR →
          </button>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              padding: "14px 16px",
              background: "transparent",
              border: "1px solid #D4C4A8",
              fontFamily: "monospace",
              fontSize: "10px",
              letterSpacing: "2px",
              color: "#A68B6B",
              textDecoration: "none",
              textAlign: "center",
              transition: "all 0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#C4963A";
              e.currentTarget.style.borderColor = "#C4963A";
              e.currentTarget.style.color = "#3D3024";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "#D4C4A8";
              e.currentTarget.style.color = "#A68B6B";
            }}
          >
            CONVERSAR NO WHATSAPP →
          </a>
        </div>
      </div>
    </section>
  );
}
