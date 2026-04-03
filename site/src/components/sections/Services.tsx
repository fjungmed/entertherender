import { SERVICES } from "@/lib/constants";

export function Services() {
  return (
    <section
      id="services"
      className="section-pad"
      style={{
        padding: "40px 40px",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              fontSize: "9px",
              letterSpacing: "4px",
              fontFamily: "monospace",
              color: "#6B7F4A",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <span style={{ color: "#C4963A", fontFamily: "var(--font-press-start)", fontSize: "8px" }}>//</span>
            <span style={{ fontFamily: "var(--font-press-start)", fontSize: "8px" }}>01</span> — SERVIÇOS
          </div>
        </div>

        <div
          className="services-strip"
          style={{
            display: "flex",
            gap: "2px",
            background: "#6B7F4A",
          }}
        >
          {SERVICES.map((service) => (
            <div
              key={service.id}
              style={{
                flex: 1,
                background: "#FAF7F0",
                padding: "20px 24px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span
                  style={{
                    fontSize: "18px",
                    color: "#4A5A33",
                  }}
                >
                  {service.icon}
                </span>
                <div>
                  <div
                    style={{
                      fontFamily: "monospace",
                      fontSize: "11px",
                      fontWeight: "bold",
                      letterSpacing: "2px",
                      color: "#3A4828",
                    }}
                  >
                    {service.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "monospace",
                      fontSize: "9px",
                      letterSpacing: "1px",
                      color: "#A68B6B",
                      marginTop: "2px",
                    }}
                  >
                    {service.subtitle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
