import { useState, useEffect, useRef } from "react";

const ETRWebsite = () => {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [typedText, setTypedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);

  // Loading screen
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoadingComplete(true), 400);
          setTimeout(() => setShowContent(true), 800);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  // Typing effect
  const fullText = "Entre o pixel e o concreto, entre a linha de código e a linha de fuga, existe um lugar onde arquitetura vira experiência antes de virar parede. Nós construímos esse lugar.";

  useEffect(() => {
    if (!showContent) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 28);
    return () => clearInterval(interval);
  }, [showContent]);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(interval);
  }, []);

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Section observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );
    document.querySelectorAll("section[id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [showContent]);

  const services = [
    {
      id: "archviz",
      icon: "◈",
      title: "ARCHVIZ",
      subtitle: "Imagens Estáticas",
      desc: "Renders fotorrealistas que vendem projetos antes da primeira fundação. Qualidade editorial para incorporadoras, escritórios e portfólios.",
      tools: ["3DS MAX", "V-RAY", "CORONA", "AI UPSCALE"],
    },
    {
      id: "immersive",
      icon: "▣",
      title: "IMERSÃO 3D",
      subtitle: "Real-Time Tours",
      desc: "Experiências interativas em tempo real. O cliente caminha pelo projeto, abre portas, muda acabamentos. Antes da primeira parede.",
      tools: ["UNREAL 5", "LUMEN", "NANITE", "VR"],
    },
    {
      id: "films",
      icon: "▶",
      title: "FILMES",
      subtitle: "Animação Arquitetônica",
      desc: "Narrativas cinematográficas que contam a história do espaço. Para lançamentos imobiliários, institucionais e portfólios autorais.",
      tools: ["SEQUENCER", "DAVINCI", "MOTION", "SOUND"],
    },
    {
      id: "ai",
      icon: "◎",
      title: "AI-ENHANCED",
      subtitle: "Visualização Generativa",
      desc: "Iteração rápida de conceitos visuais com AI generativa. De mood boards a materiais finais em horas, não semanas.",
      tools: ["MIDJOURNEY", "SD", "COMFYUI", "PROMPT"],
    },
  ];

  const projects = [
    {
      id: 1,
      title: "CASA MONOLITO",
      category: "RESIDENCIAL",
      location: "SÃO PAULO, BR",
      year: "2026",
      type: "ARCHVIZ + FILME",
      color: "#6B7F4A",
    },
    {
      id: 2,
      title: "EDIFÍCIO HORIZON",
      category: "COMERCIAL",
      location: "RIO DE JANEIRO, BR",
      year: "2025",
      type: "IMERSÃO 3D",
      color: "#C4963A",
    },
    {
      id: 3,
      title: "LOFT MINERAL",
      category: "INTERIORES",
      location: "CURITIBA, BR",
      year: "2026",
      type: "ARCHVIZ",
      color: "#8B2D2D",
    },
    {
      id: 4,
      title: "VILLA TECTÔNICA",
      category: "RESIDENCIAL",
      location: "FLORIANÓPOLIS, BR",
      year: "2025",
      type: "FILME + AI",
      color: "#4A5A33",
    },
  ];

  const stats = [
    { value: "50+", label: "PROJETOS" },
    { value: "4", label: "FERRAMENTAS CORE" },
    { value: "∞", label: "MUNDOS POSSÍVEIS" },
  ];

  const navItems = [
    { id: "hero", label: "HOME" },
    { id: "services", label: "SERVIÇOS" },
    { id: "projects", label: "PROJETOS" },
    { id: "process", label: "PROCESSO" },
    { id: "contact", label: "CONTATO" },
  ];

  const whatsappUrl = "https://wa.me/5519989842020?text=Olá!%20Quero%20saber%20mais%20sobre%20os%20serviços%20da%20Enter%20the%20Render.";

  // Loading Screen
  if (!loadingComplete) {
    return (
      <div style={{
        position: "fixed", inset: 0,
        background: "#3A4828",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        fontFamily: "'Courier New', monospace",
        color: "#F5F0E8",
        zIndex: 9999,
      }}>
        <div style={{
          fontFamily: "monospace",
          fontSize: "clamp(20px, 4vw, 36px)",
          fontWeight: "bold",
          letterSpacing: "6px",
          marginBottom: "48px",
        }}>
          <span style={{ color: "#8B2D2D" }}>[</span>
          <span style={{ color: "#D4A64A" }}>E</span>
          <span>T</span>
          <span>R</span>
          <span style={{ color: "#8B2D2D" }}>]</span>
        </div>
        <div style={{
          width: "280px", height: "2px",
          background: "#4A5A33",
          marginBottom: "16px",
          position: "relative",
        }}>
          <div style={{
            position: "absolute", top: 0, left: 0,
            height: "100%",
            width: `${Math.min(loadingProgress, 100)}%`,
            background: "linear-gradient(90deg, #6B7F4A, #C4963A)",
            transition: "width 0.1s",
          }} />
        </div>
        <div style={{
          fontSize: "10px",
          letterSpacing: "3px",
          color: "#8B9A6B",
        }}>
          LOADING WORLD... {Math.min(Math.round(loadingProgress), 100)}%
        </div>
      </div>
    );
  }

  return (
    <div style={{
      background: "#FAF7F0",
      color: "#3D3024",
      minHeight: "100vh",
      overflow: "hidden",
      opacity: showContent ? 1 : 0,
      transition: "opacity 0.6s ease",
    }}>

      {/* SCANLINES */}
      <div style={{
        position: "fixed", inset: 0,
        background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.015) 2px, rgba(0,0,0,0.015) 4px)",
        pointerEvents: "none",
        zIndex: 9998,
      }} />

      {/* GRID */}
      <div style={{
        position: "fixed", inset: 0,
        backgroundImage: "linear-gradient(rgba(107,127,74,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(107,127,74,0.08) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        pointerEvents: "none",
        zIndex: 0,
      }} />

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0,
        zIndex: 100,
        padding: "16px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: scrollY > 50 ? "rgba(245,240,232,0.92)" : "transparent",
        backdropFilter: scrollY > 50 ? "blur(20px)" : "none",
        borderBottom: scrollY > 50 ? "1px solid rgba(74,90,51,0.2)" : "1px solid transparent",
        transition: "all 0.4s",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{
            fontFamily: "monospace",
            fontSize: "14px",
            fontWeight: "bold",
            letterSpacing: "3px",
          }}>
            <span style={{ color: "#8B2D2D" }}>[</span>
            <span style={{ color: "#3A4828" }}>ETR</span>
            <span style={{ color: "#8B2D2D" }}>]</span>
          </span>
          <span style={{
            fontSize: "8px",
            letterSpacing: "3px",
            color: "#A68B6B",
            fontFamily: "monospace",
          }}>ENTER THE RENDER</span>
        </div>

        {/* Desktop nav */}
        <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
              }}
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

        <div style={{
          display: "flex", alignItems: "center", gap: "8px",
          fontSize: "10px",
          fontFamily: "monospace",
          color: "#A63D3D",
        }}>
          <div style={{
            width: "6px", height: "6px",
            background: "#A63D3D",
            borderRadius: "50%",
            animation: "pulse 2s infinite",
          }} />
          ONLINE
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section id="hero" style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "140px 40px 60px",
        position: "relative",
        zIndex: 1,
        textAlign: "center",
      }}>

        {/* Logo grande */}
        <div style={{
          fontFamily: "monospace",
          fontSize: "clamp(48px, 10vw, 120px)",
          fontWeight: "bold",
          letterSpacing: "8px",
          marginBottom: "10px",
          lineHeight: 1,
        }}>
          <span style={{ color: "#8B2D2D", opacity: 0.7 }}>[</span>
          <span style={{ color: "#C4963A" }}>E</span>
          <span style={{ color: "#3A4828" }}>T</span>
          <span style={{ color: "#3A4828" }}>R</span>
          <span style={{ color: "#8B2D2D", opacity: 0.7 }}>]</span>
        </div>

        <div style={{
          fontSize: "clamp(10px, 1.5vw, 15px)",
          letterSpacing: "clamp(6px, 1.5vw, 14px)",
          fontFamily: "monospace",
          color: "#6B7F4A",
          fontWeight: "bold",
          marginBottom: "40px",
          textTransform: "uppercase",
        }}>
          ENTER THE RENDER
        </div>

        {/* Manifesto */}
        <div style={{
          maxWidth: "640px",
          width: "100%",
          marginBottom: "36px",
          position: "relative",
          padding: "32px 28px",
          background: "rgba(58,72,40,0.04)",
          borderLeft: "2px solid #4A5A33",
        }}>
          <div style={{
            position: "absolute",
            top: "12px",
            right: "16px",
            fontSize: "8px",
            fontFamily: "monospace",
            letterSpacing: "2px",
            color: "#A68B6B",
            opacity: 0.5,
          }}>manifesto.txt</div>

          <p style={{
            fontFamily: "monospace",
            fontSize: "clamp(13px, 1.3vw, 15px)",
            lineHeight: 2,
            color: "#5C4A36",
            textAlign: "left",
          }}>
            <span style={{ color: "#6B7F4A", marginRight: "8px", opacity: 0.4, fontSize: "10px" }}>{'>'}</span>
            {typedText.split("Nós construímos esse lugar.")[0]}
            {typedText.includes("Nós construímos esse lugar.") && (
              <span style={{ color: "#3A4828", fontWeight: "bold" }}>
                Nós construímos esse lugar.
              </span>
            )}
            <span style={{
              color: "#C4963A",
              opacity: cursorVisible ? 1 : 0,
              transition: "opacity 0.1s",
              marginLeft: "2px",
            }}>▌</span>
          </p>
        </div>

        {/* CTA */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            padding: "18px 40px",
            background: "#3A4828",
            color: "#F5F0E8",
            textDecoration: "none",
            fontFamily: "monospace",
            fontSize: "12px",
            letterSpacing: "4px",
            fontWeight: "bold",
            border: "2px solid #3A4828",
            transition: "all 0.3s",
            cursor: "pointer",
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
          CTRL + BUILD + DREAM
        </a>

        {/* Badges */}
        <div style={{
          display: "flex",
          gap: "24px",
          marginTop: "40px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}>
          {["UNREAL ENGINE 5", "3DS MAX", "AI GENERATIVA", "REAL-TIME"].map((tool) => (
            <span key={tool} style={{
              fontSize: "9px",
              letterSpacing: "2px",
              fontFamily: "monospace",
              color: "#A68B6B",
              padding: "6px 14px",
              border: "1px solid #D4C4A8",
            }}>
              {tool}
            </span>
          ))}
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute",
          bottom: "40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}>
          <span style={{
            fontSize: "9px",
            letterSpacing: "3px",
            fontFamily: "monospace",
            color: "#A68B6B",
          }}>SCROLL</span>
          <div style={{
            width: "1px",
            height: "32px",
            background: "linear-gradient(to bottom, #A68B6B, transparent)",
          }} />
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        background: "#3A4828",
        borderTop: "2px solid #4A5A33",
        borderBottom: "2px solid #4A5A33",
        position: "relative",
        zIndex: 1,
      }}>
        {stats.map((stat, i) => (
          <div key={i} style={{
            padding: "32px 24px",
            textAlign: "center",
            borderRight: i < 2 ? "1px solid #4A5A33" : "none",
          }}>
            <div style={{
              fontFamily: "monospace",
              fontSize: "clamp(20px, 3vw, 32px)",
              fontWeight: "bold",
              color: "#C4963A",
              marginBottom: "8px",
            }}>{stat.value}</div>
            <div style={{
              fontSize: "9px",
              letterSpacing: "2px",
              fontFamily: "monospace",
              color: "#8B9A6B",
            }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* ===== SERVICES ===== */}
      <section id="services" style={{
        padding: "80px 40px",
        position: "relative",
        zIndex: 1,
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{
            fontSize: "9px",
            letterSpacing: "4px",
            fontFamily: "monospace",
            color: "#6B7F4A",
            marginBottom: "12px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}>
            <span style={{ color: "#C4963A" }}>//</span> 01 — SERVIÇOS
          </div>
          <h2 style={{
            fontFamily: "monospace",
            fontSize: "clamp(24px, 3.5vw, 42px)",
            fontWeight: "bold",
            color: "#3A4828",
            marginBottom: "48px",
            lineHeight: 1.2,
          }}>
            O que <span style={{ color: "#C4963A" }}>construímos</span>
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "2px",
            background: "#6B7F4A",
          }}>
            {services.map((service) => (
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
                  <span style={{
                    fontSize: "28px",
                    display: "block",
                    marginBottom: "20px",
                    transition: "color 0.4s",
                    color: hoveredService === service.id ? "#C4963A" : "#4A5A33",
                  }}>{service.icon}</span>

                  <div style={{
                    fontFamily: "monospace",
                    fontSize: "10px",
                    letterSpacing: "3px",
                    color: hoveredService === service.id ? "#8B9A6B" : "#A68B6B",
                    marginBottom: "4px",
                    transition: "color 0.4s",
                  }}>{service.subtitle}</div>

                  <div style={{
                    fontFamily: "monospace",
                    fontSize: "16px",
                    fontWeight: "bold",
                    letterSpacing: "3px",
                    color: hoveredService === service.id ? "#F5F0E8" : "#3A4828",
                    marginBottom: "16px",
                    transition: "color 0.4s",
                  }}>{service.title}</div>

                  <p style={{
                    fontSize: "12px",
                    lineHeight: 1.9,
                    fontFamily: "monospace",
                    color: hoveredService === service.id ? "#D4C4A8" : "#7A6248",
                    marginBottom: "24px",
                    transition: "color 0.4s",
                    maxWidth: "400px",
                  }}>{service.desc}</p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {service.tools.map((tool) => (
                      <span key={tool} style={{
                        fontSize: "9px",
                        letterSpacing: "1px",
                        fontFamily: "monospace",
                        padding: "4px 10px",
                        border: `1px solid ${hoveredService === service.id ? "#4A5A33" : "#D4C4A8"}`,
                        color: hoveredService === service.id ? "#7FBF5F" : "#A68B6B",
                        transition: "all 0.4s",
                      }}>{tool}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{
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
            >RENDERIZE SEU MUNDO →</a>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section id="projects" style={{
        padding: "80px 40px",
        background: "#F5F0E8",
        borderTop: "2px solid #6B7F4A",
        position: "relative",
        zIndex: 1,
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{
            fontSize: "9px",
            letterSpacing: "4px",
            fontFamily: "monospace",
            color: "#6B7F4A",
            marginBottom: "12px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}>
            <span style={{ color: "#C4963A" }}>//</span> 02 — PROJETOS
          </div>
          <h2 style={{
            fontFamily: "monospace",
            fontSize: "clamp(24px, 3.5vw, 42px)",
            fontWeight: "bold",
            color: "#3A4828",
            marginBottom: "48px",
            lineHeight: 1.2,
          }}>
            Mundos <span style={{ color: "#C4963A" }}>renderizados</span>
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "24px",
          }}>
            {projects.map((project) => (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{
                  position: "relative",
                  height: "320px",
                  background: "#E8DCC8",
                  border: "2px solid #D4C4A8",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "all 0.4s",
                  borderColor: hoveredProject === project.id ? project.color : "#D4C4A8",
                }}
              >
                {/* Simulated render placeholder */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(135deg, ${project.color}15 0%, ${project.color}08 50%, transparent 100%)`,
                  transition: "all 0.5s",
                  opacity: hoveredProject === project.id ? 1 : 0.3,
                }}>
                  {/* Grid pattern as placeholder */}
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `linear-gradient(${project.color}15 1px, transparent 1px), linear-gradient(90deg, ${project.color}15 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                  }} />
                  <div style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "48px",
                    color: project.color,
                    opacity: 0.15,
                    fontFamily: "monospace",
                    fontWeight: "bold",
                  }}>◇</div>
                </div>

                {/* Project number */}
                <div style={{
                  position: "absolute",
                  top: "20px",
                  left: "24px",
                  fontFamily: "monospace",
                  fontSize: "10px",
                  color: project.color,
                  opacity: 0.6,
                  letterSpacing: "2px",
                }}>
                  {String(project.id).padStart(2, "0")}
                </div>

                {/* Category badge */}
                <div style={{
                  position: "absolute",
                  top: "20px",
                  right: "24px",
                  fontSize: "9px",
                  letterSpacing: "2px",
                  fontFamily: "monospace",
                  padding: "4px 10px",
                  border: `1px solid ${project.color}40`,
                  color: project.color,
                }}>
                  {project.category}
                </div>

                {/* Bottom info */}
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "24px",
                  background: hoveredProject === project.id
                    ? "linear-gradient(transparent, rgba(61,48,36,0.95))"
                    : "linear-gradient(transparent, rgba(61,48,36,0.7))",
                  transition: "all 0.4s",
                }}>
                  <div style={{
                    fontFamily: "monospace",
                    fontSize: "clamp(14px, 2vw, 20px)",
                    fontWeight: "bold",
                    color: "#F5F0E8",
                    letterSpacing: "3px",
                    marginBottom: "8px",
                  }}>{project.title}</div>
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}>
                    <span style={{
                      fontSize: "10px",
                      fontFamily: "monospace",
                      color: "#D4C4A8",
                      letterSpacing: "1px",
                    }}>{project.location}</span>
                    <span style={{
                      fontSize: "9px",
                      fontFamily: "monospace",
                      color: "#C4963A",
                      letterSpacing: "2px",
                    }}>{project.type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View all CTA */}
          <div style={{ textAlign: "center", marginTop: "48px", display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <a href="#" style={{
              fontSize: "11px",
              letterSpacing: "3px",
              fontFamily: "monospace",
              color: "#6B7F4A",
              textDecoration: "none",
              padding: "14px 32px",
              border: "1px solid #6B7F4A",
              transition: "all 0.3s",
              display: "inline-block",
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#3A4828";
                e.currentTarget.style.color = "#F5F0E8";
                e.currentTarget.style.borderColor = "#3A4828";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#6B7F4A";
                e.currentTarget.style.borderColor = "#6B7F4A";
              }}
            >CARREGAR MAIS MUNDOS →</a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{
              fontSize: "11px",
              letterSpacing: "3px",
              fontFamily: "monospace",
              color: "#A68B6B",
              textDecoration: "none",
              padding: "14px 32px",
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
            >CONSTRUA O MEU →</a>
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section id="process" style={{
        padding: "80px 40px",
        background: "#3A4828",
        borderTop: "2px solid #4A5A33",
        position: "relative",
        zIndex: 1,
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{
            fontSize: "9px",
            letterSpacing: "4px",
            fontFamily: "monospace",
            color: "#7FBF5F",
            marginBottom: "12px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}>
            <span style={{ color: "#C4963A" }}>//</span> 03 — PROCESSO
          </div>
          <h2 style={{
            fontFamily: "monospace",
            fontSize: "clamp(24px, 3.5vw, 42px)",
            fontWeight: "bold",
            color: "#F5F0E8",
            marginBottom: "48px",
            lineHeight: 1.2,
          }}>
            Do briefing ao <span style={{ color: "#C4963A" }}>render final</span>
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2px",
          }}>
            {[
              {
                step: "01",
                title: "BRIEFING",
                desc: "Entendemos o projeto, referências, público e objetivos. Definimos escopo e pipeline.",
                icon: ">_",
                detail: "CALL + MOODBOARD",
              },
              {
                step: "02",
                title: "CONCEITO",
                desc: "AI generativa para iteração rápida de conceitos. Validação de ângulos, luz e atmosfera.",
                icon: "◎",
                detail: "AI + CONCEPT ART",
              },
              {
                step: "03",
                title: "PRODUÇÃO",
                desc: "Modelagem, texturização, iluminação e renderização com pipeline otimizado.",
                icon: "▣",
                detail: "3D + RENDER + REAL-TIME",
              },
              {
                step: "04",
                title: "ENTREGA",
                desc: "Pós-produção, ajustes finais e entrega nos formatos necessários. Revisões inclusas.",
                icon: "✓",
                detail: "FINAL + REVISÕES",
              },
            ].map((item, i) => (
              <div key={i} style={{
                background: "#4A5A33",
                padding: "40px 28px",
                position: "relative",
                transition: "all 0.3s",
              }}>
                <div style={{
                  fontFamily: "monospace",
                  fontSize: "36px",
                  color: "#C4963A",
                  opacity: 0.2,
                  position: "absolute",
                  top: "16px",
                  right: "20px",
                  fontWeight: "bold",
                }}>{item.step}</div>

                <div style={{
                  fontSize: "20px",
                  marginBottom: "20px",
                  color: "#7FBF5F",
                  fontFamily: "monospace",
                }}>{item.icon}</div>

                <div style={{
                  fontFamily: "monospace",
                  fontSize: "13px",
                  fontWeight: "bold",
                  letterSpacing: "3px",
                  color: "#F5F0E8",
                  marginBottom: "12px",
                }}>{item.title}</div>

                <p style={{
                  fontSize: "11px",
                  lineHeight: 1.8,
                  fontFamily: "monospace",
                  color: "#8B9A6B",
                  marginBottom: "20px",
                }}>{item.desc}</p>

                <div style={{
                  fontSize: "9px",
                  letterSpacing: "2px",
                  fontFamily: "monospace",
                  color: "#C4963A",
                  opacity: 0.6,
                }}>{item.detail}</div>

                {i < 3 && (
                  <div style={{
                    position: "absolute",
                    top: "50%",
                    right: "-8px",
                    color: "#6B7F4A",
                    fontFamily: "monospace",
                    fontSize: "16px",
                    zIndex: 2,
                  }}>→</div>
                )}
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{
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
            >COMEÇAR A CONSTRUIR →</a>
          </div>
        </div>
      </section>

      {/* ===== QUOTE / BREAK ===== */}
      <div style={{
        padding: "72px 40px",
        textAlign: "center",
        background: "#FAF7F0",
        borderTop: "2px solid #6B7F4A",
        borderBottom: "2px solid #6B7F4A",
        position: "relative",
        zIndex: 1,
      }}>
        <div style={{
          fontFamily: "monospace",
          fontSize: "clamp(16px, 2.5vw, 28px)",
          fontWeight: "bold",
          color: "#3A4828",
          maxWidth: "700px",
          margin: "0 auto",
          lineHeight: 1.8,
          letterSpacing: "1px",
        }}>
          "Não renderizamos imagens.
          <br />
          <span style={{ color: "#C4963A" }}>Construímos realidades paralelas.</span>"
        </div>
      </div>

      {/* ===== CONTACT ===== */}
      <section id="contact" style={{
        padding: "80px 40px",
        position: "relative",
        zIndex: 1,
      }}>
        <div style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
        }}>
          <div>
            <div style={{
              fontSize: "9px",
              letterSpacing: "4px",
              fontFamily: "monospace",
              color: "#6B7F4A",
              marginBottom: "12px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}>
              <span style={{ color: "#C4963A" }}>//</span> 04 — CONTATO
            </div>
            <h2 style={{
              fontFamily: "monospace",
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontWeight: "bold",
              color: "#3A4828",
              marginBottom: "24px",
              lineHeight: 1.2,
            }}>
              Pronto pra<br /><span style={{ color: "#C4963A" }}>entrar?</span>
            </h2>
            <p style={{
              fontSize: "13px",
              lineHeight: 2,
              fontFamily: "monospace",
              color: "#7A6248",
              marginBottom: "40px",
            }}>
              Seu projeto já existe. Só precisa ser renderizado. Conte sobre o espaço — nós construímos a realidade paralela.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                { label: "EMAIL", value: "hello@entertherender.com" },
                { label: "WHATSAPP", value: "+55 19 98984-2020" },
                { label: "INSTAGRAM", value: "@enter.therender" },
                { label: "BEHANCE", value: "behance.net/entertherender" },
              ].map((item) => (
                <div key={item.label} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                }}>
                  <span style={{
                    fontSize: "9px",
                    letterSpacing: "2px",
                    fontFamily: "monospace",
                    color: "#A68B6B",
                    minWidth: "80px",
                  }}>{item.label}</span>
                  <span style={{
                    fontSize: "12px",
                    fontFamily: "monospace",
                    color: "#3A4828",
                    fontWeight: "500",
                  }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            background: "#F5F0E8",
            border: "2px solid #D4C4A8",
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}>
            <div style={{
              fontSize: "9px",
              letterSpacing: "3px",
              fontFamily: "monospace",
              color: "#6B7F4A",
              marginBottom: "8px",
            }}>
              <span style={{ color: "#8B2D2D" }}>&gt;</span> NOVO_PROJETO.INIT
            </div>

            {["NOME", "EMAIL", "TIPO DE PROJETO", "MENSAGEM"].map((field, i) => (
              <div key={field}>
                <label style={{
                  display: "block",
                  fontSize: "9px",
                  letterSpacing: "2px",
                  fontFamily: "monospace",
                  color: "#A68B6B",
                  marginBottom: "8px",
                }}>{field}</label>
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

            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{
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

      {/* ===== FOOTER ===== */}
      <footer style={{
        padding: "40px",
        background: "#3D3024",
        borderTop: "2px solid #4A5A33",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
        zIndex: 1,
      }}>
        <div style={{
          fontFamily: "monospace",
          fontSize: "10px",
          color: "#D4C4A8",
          letterSpacing: "2px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}>
          <span style={{ color: "#8B2D2D" }}>[</span>
          <span>ETR</span>
          <span style={{ color: "#8B2D2D" }}>]</span>
          <span style={{ color: "#7A6248" }}>// ENTER THE RENDER</span>
        </div>
        <div style={{
          fontFamily: "monospace",
          fontSize: "9px",
          color: "#7A6248",
          textAlign: "right",
          letterSpacing: "1px",
          lineHeight: 1.8,
        }}>
          BUILDING WORLDS. RENDERING FUTURES.<br />
          © 2026 — ALL RIGHTS RESERVED
        </div>
      </footer>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { cursor: crosshair; }
        input:focus, textarea:focus {
          border-color: #6B7F4A !important;
        }
        a { cursor: pointer; }
        ::selection {
          background: #6B7F4A;
          color: #F5F0E8;
        }
      `}</style>
    </div>
  );
};

export default ETRWebsite;
