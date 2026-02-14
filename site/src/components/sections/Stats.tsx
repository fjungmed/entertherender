import { STATS } from "@/lib/constants";

export function Stats() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        background: "#3A4828",
        borderTop: "2px solid #4A5A33",
        borderBottom: "2px solid #4A5A33",
        position: "relative",
        zIndex: 1,
      }}
    >
      {STATS.map((stat, i) => (
        <div
          key={i}
          style={{
            padding: "32px 24px",
            textAlign: "center",
            borderRight: i < 2 ? "1px solid #4A5A33" : "none",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-press-start)",
              fontSize: "clamp(14px, 2.5vw, 24px)",
              color: "#C4963A",
              marginBottom: "8px",
            }}
          >
            {stat.value}
          </div>
          <div
            style={{
              fontSize: "9px",
              letterSpacing: "2px",
              fontFamily: "monospace",
              color: "#8B9A6B",
            }}
          >
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
