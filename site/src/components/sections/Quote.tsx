export function Quote() {
  return (
    <div
      style={{
        padding: "72px 40px",
        textAlign: "center",
        background: "#FAF7F0",
        borderTop: "2px solid #6B7F4A",
        borderBottom: "2px solid #6B7F4A",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        style={{
          fontFamily: "monospace",
          fontSize: "clamp(16px, 2.5vw, 28px)",
          fontWeight: "bold",
          color: "#3A4828",
          maxWidth: "700px",
          margin: "0 auto",
          lineHeight: 1.8,
          letterSpacing: "1px",
        }}
      >
        &ldquo;Não renderizamos imagens.
        <br />
        <span style={{ color: "#C4963A" }}>Construímos realidades paralelas.</span>&rdquo;
      </div>
    </div>
  );
}
