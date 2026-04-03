"use client";

import { useState } from "react";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useIntersection } from "@/hooks/useIntersection";
import { NAV_ITEMS } from "@/lib/constants";

export function Navbar() {
  const scrollY = useScrollPosition();
  const activeSection = useIntersection(0.3);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "16px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: scrollY > 50 || menuOpen ? "rgba(245,240,232,0.95)" : "transparent",
          backdropFilter: scrollY > 50 || menuOpen ? "blur(20px)" : "none",
          borderBottom: scrollY > 50 ? "1px solid rgba(74,90,51,0.2)" : "1px solid transparent",
          transition: "all 0.4s",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span
            style={{
              fontSize: "11px",
              letterSpacing: "2px",
              textShadow: "2px 2px 0 #D4C4A8",
            }}
          >
            <span style={{ fontFamily: "var(--font-press-start)", color: "#8B2D2D" }}>[</span>
            <span style={{ fontFamily: "var(--font-press-start)", color: "#C4963A" }}>E</span>
            <span style={{ fontFamily: "var(--font-press-start)", color: "#3A4828" }}>T</span>
            <span style={{ fontFamily: "var(--font-press-start)", color: "#3A4828" }}>R</span>
            <span style={{ fontFamily: "var(--font-press-start)", color: "#8B2D2D" }}>]</span>
          </span>
          <span
            style={{
              fontSize: "9px",
              letterSpacing: "3px",
              color: "#A68B6B",
              fontFamily: "var(--font-orbitron)",
              fontWeight: 700,
            }}
          >
            ENTER THE RENDER
          </span>
        </div>

        {/* Desktop nav */}
        <div className="nav-desktop" style={{ display: "flex", gap: "32px", alignItems: "center" }}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              style={{
                fontSize: "10px",
                letterSpacing: "2px",
                textDecoration: "none",
                color: activeSection === item.id ? "#4A5A33" : "#A68B6B",
                fontFamily: "monospace",
                fontWeight: activeSection === item.id ? "bold" : "normal",
                borderBottom: activeSection === item.id ? "2px solid #C4963A" : "2px solid transparent",
                paddingBottom: "4px",
                transition: "all 0.3s",
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Online indicator - desktop */}
        <div
          className="nav-online"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "10px",
            fontFamily: "monospace",
            color: "#A63D3D",
          }}
        >
          <div
            style={{
              width: "6px",
              height: "6px",
              background: "#A63D3D",
              borderRadius: "50%",
              animation: "pulse 2s infinite",
            }}
          />
          ONLINE
        </div>

        {/* Hamburger - mobile */}
        <button
          className="nav-mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            flexDirection: "column",
            gap: "5px",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px",
          }}
        >
          <span style={{ width: "20px", height: "2px", background: menuOpen ? "#C4963A" : "#3A4828", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
          <span style={{ width: "20px", height: "2px", background: "#3A4828", transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
          <span style={{ width: "20px", height: "2px", background: menuOpen ? "#C4963A" : "#3A4828", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "56px",
            left: 0,
            right: 0,
            zIndex: 99,
            background: "rgba(245,240,232,0.98)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(74,90,51,0.2)",
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            gap: "16px",
          }}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              style={{
                fontSize: "11px",
                letterSpacing: "3px",
                textDecoration: "none",
                color: activeSection === item.id ? "#4A5A33" : "#A68B6B",
                fontFamily: "monospace",
                fontWeight: activeSection === item.id ? "bold" : "normal",
                padding: "8px 0",
                borderBottom: "1px solid #E8DCC8",
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
