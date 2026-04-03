export function Footer() {
  return (
    <footer
      className="footer-wrap footer-pad"
      style={{
        padding: "40px",
        background: "#3D3024",
        borderTop: "2px solid #4A5A33",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <span
          style={{
            fontSize: "8px",
            letterSpacing: "2px",
            textShadow: "2px 2px 0 rgba(0,0,0,0.3)",
          }}
        >
          <span style={{ fontFamily: "var(--font-press-start)", color: "#8B2D2D" }}>[</span>
          <span style={{ fontFamily: "var(--font-press-start)", color: "#C4963A" }}>E</span>
          <span style={{ fontFamily: "var(--font-press-start)", color: "#D4C4A8" }}>T</span>
          <span style={{ fontFamily: "var(--font-press-start)", color: "#D4C4A8" }}>R</span>
          <span style={{ fontFamily: "var(--font-press-start)", color: "#8B2D2D" }}>]</span>
        </span>
        <span
          style={{
            fontFamily: "var(--font-orbitron)",
            fontWeight: 700,
            fontSize: "9px",
            letterSpacing: "2px",
            color: "#7A6248",
          }}
        >
          ENTER THE RENDER
        </span>
      </div>
      <div className="footer-right" style={{ textAlign: "right" }}>
        <div
          style={{
            fontFamily: "var(--font-press-start)",
            fontSize: "7px",
            color: "#C4963A",
            letterSpacing: "1px",
            marginBottom: "8px",
          }}
        >
          BUILDING WORLDS. RENDERING FUTURES.
        </div>
        <div
          style={{
            fontFamily: "monospace",
            fontSize: "9px",
            color: "#7A6248",
            letterSpacing: "1px",
          }}
        >
          © 2026 — ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
}
