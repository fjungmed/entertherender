import { PROCESS_STEPS, WHATSAPP_URL } from "@/lib/constants";

export function Process() {
  return (
    <section
      id="process"
      style={{
        padding: "80px 40px",
        background: "#3A4828",
        borderTop: "2px solid #4A5A33",
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
            color: "#7FBF5F",
            marginBottom: "12px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <span style={{ color: "#C4963A" }}>//</span> 03 — PROCESSO
        </div>
        <h2
          style={{
            fontFamily: "monospace",
            fontSize: "clamp(24px, 3.5vw, 42px)",
            fontWeight: "bold",
            color: "#F5F0E8",
            marginBottom: "48px",
            lineHeight: 1.2,
          }}
        >
          Do briefing ao <span style={{ color: "#C4963A" }}>render final</span>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2px",
          }}
        >
          {PROCESS_STEPS.map((item, i) => (
            <div
              key={i}
              style={{
                background: "#4A5A33",
                padding: "40px 28px",
                position: "relative",
                transition: "all 0.3s",
              }}
            >
              <div
                style={{
                  fontFamily: "monospace",
                  fontSize: "36px",
                  color: "#C4963A",
                  opacity: 0.2,
                  position: "absolute",
                  top: "16px",
                  right: "20px",
                  fontWeight: "bold",
                }}
              >
                {item.step}
              </div>

              <div
                style={{
                  fontSize: "20px",
                  marginBottom: "20px",
                  color: "#7FBF5F",
                  fontFamily: "monospace",
                }}
              >
                {item.icon}
              </div>

              <div
                style={{
                  fontFamily: "monospace",
                  fontSize: "13px",
                  fontWeight: "bold",
                  letterSpacing: "3px",
                  color: "#F5F0E8",
                  marginBottom: "12px",
                }}
              >
                {item.title}
              </div>

              <p
                style={{
                  fontSize: "11px",
                  lineHeight: 1.8,
                  fontFamily: "monospace",
                  color: "#8B9A6B",
                  marginBottom: "20px",
                }}
              >
                {item.desc}
              </p>

              <div
                style={{
                  fontSize: "9px",
                  letterSpacing: "2px",
                  fontFamily: "monospace",
                  color: "#C4963A",
                  opacity: 0.6,
                }}
              >
                {item.detail}
              </div>

              {i < 3 && (
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "-8px",
                    color: "#6B7F4A",
                    fontFamily: "monospace",
                    fontSize: "16px",
                    zIndex: 2,
                  }}
                >
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "11px",
              letterSpacing: "3px",
              fontFamily: "monospace",
              color: "#8B9A6B",
              textDecoration: "none",
              padding: "14px 32px",
              border: "1px solid #4A5A33",
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
              e.currentTarget.style.color = "#8B9A6B";
              e.currentTarget.style.borderColor = "#4A5A33";
            }}
          >
            COMEÇAR A CONSTRUIR →
          </a>
        </div>
      </div>
    </section>
  );
}
