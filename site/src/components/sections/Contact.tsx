"use client";

import { useState, FormEvent } from "react";
import { CONTACT, WHATSAPP_URL } from "@/lib/constants";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Using Web3Forms - free email service
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "16fb705f-3488-480c-ac08-72a4a36dd366",
          subject: `Novo projeto: ${formData.projectType} - ${formData.name}`,
          from_name: formData.name,
          email: formData.email,
          message: `
Nome: ${formData.name}
Email: ${formData.email}
Tipo de Projeto: ${formData.projectType}

Mensagem:
${formData.message}
          `,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", projectType: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

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
              { label: "EMAIL", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
              { label: "WHATSAPP", value: CONTACT.phone, href: WHATSAPP_URL },
              { label: "INSTAGRAM", value: CONTACT.instagram, href: `https://instagram.com/${CONTACT.instagram.replace("@", "")}` },
              { label: "BEHANCE", value: CONTACT.behance, href: `https://${CONTACT.behance}` },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  textDecoration: "none",
                  transition: "all 0.3s",
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
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
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

          <div>
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
              NOME
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
          </div>

          <div>
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
              EMAIL
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
          </div>

          <div>
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
              TIPO DE PROJETO
            </label>
            <select
              required
              value={formData.projectType}
              onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
              style={{
                width: "100%",
                padding: "12px",
                background: "#FAF7F0",
                border: "1px solid #D4C4A8",
                fontFamily: "monospace",
                fontSize: "12px",
                color: "#3D3024",
                outline: "none",
                cursor: "pointer",
              }}
            >
              <option value="">Selecione...</option>
              <option value="ARCHVIZ">ARCHVIZ - Imagens Estáticas</option>
              <option value="IMERSAO">IMERSÃO 3D - Real-Time Tours</option>
              <option value="FILME">FILME - Animação Arquitetônica</option>
              <option value="AI">AI-ENHANCED - Visualização Generativa</option>
              <option value="OUTRO">OUTRO</option>
            </select>
          </div>

          <div>
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
              MENSAGEM
            </label>
            <textarea
              rows={4}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            style={{
              padding: "16px",
              background: status === "success" ? "#4A5A33" : status === "error" ? "#8B2D2D" : "#3A4828",
              color: "#F5F0E8",
              border: "2px solid",
              borderColor: status === "success" ? "#4A5A33" : status === "error" ? "#8B2D2D" : "#3A4828",
              fontFamily: "monospace",
              fontSize: "11px",
              letterSpacing: "3px",
              fontWeight: "bold",
              cursor: status === "sending" ? "wait" : "pointer",
              transition: "all 0.3s",
              marginTop: "8px",
              opacity: status === "sending" ? 0.7 : 1,
            }}
            onMouseEnter={(e) => {
              if (status === "idle") {
                e.currentTarget.style.background = "#C4963A";
                e.currentTarget.style.borderColor = "#C4963A";
                e.currentTarget.style.color = "#3D3024";
              }
            }}
            onMouseLeave={(e) => {
              if (status === "idle") {
                e.currentTarget.style.background = "#3A4828";
                e.currentTarget.style.borderColor = "#3A4828";
                e.currentTarget.style.color = "#F5F0E8";
              }
            }}
          >
            {status === "sending" && "ENVIANDO..."}
            {status === "success" && "ENVIADO COM SUCESSO!"}
            {status === "error" && "ERRO - TENTE NOVAMENTE"}
            {status === "idle" && "EXECUTAR →"}
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
        </form>
      </div>
    </section>
  );
}
