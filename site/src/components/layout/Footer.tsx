export function Footer() {
  return (
    <footer
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
      <div
        style={{
          fontFamily: "var(--font-press-start)",
          fontSize: "8px",
          color: "#D4C4A8",
          letterSpacing: "2px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span style={{ color: "#8B2D2D" }}>[</span>
        <span>ETR</span>
        <span style={{ color: "#8B2D2D" }}>]</span>
        <span style={{ color: "#7A6248", fontFamily: "monospace", fontSize: "10px" }}>// ENTER THE RENDER</span>
      </div>
      <div
        style={{
          fontFamily: "monospace",
          fontSize: "9px",
          color: "#7A6248",
          textAlign: "right",
          letterSpacing: "1px",
          lineHeight: 1.8,
        }}
      >
        BUILDING WORLDS. RENDERING FUTURES.
        <br />© 2026 — ALL RIGHTS RESERVED
      </div>
    </footer>
  );
}
