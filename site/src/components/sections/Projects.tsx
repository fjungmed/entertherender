"use client";

import { useState } from "react";
import Image from "next/image";
import { PROJECTS, WHATSAPP_URL } from "@/lib/constants";
import { ProjectModal } from "./ProjectModal";

type Project = typeof PROJECTS[number];

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  // Get unique categories
  const categories = [...new Set(PROJECTS.map((p) => p.category))];

  // Filter projects
  const filteredProjects = activeCategory
    ? PROJECTS.filter((p) => p.category === activeCategory)
    : PROJECTS;

  // Limit display if not showing all
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);
  const hasMore = filteredProjects.length > 4 && !showAll;

  return (
    <section
      id="projects"
      style={{
        padding: "80px 40px",
        background: "#F5F0E8",
        borderTop: "2px solid #6B7F4A",
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
            color: "#6B7F4A",
            marginBottom: "12px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <span style={{ color: "#C4963A", fontFamily: "var(--font-press-start)", fontSize: "8px" }}>//</span>
          <span style={{ fontFamily: "var(--font-press-start)", fontSize: "8px" }}>02</span> — PROJETOS
        </div>
        <h2
          style={{
            fontFamily: "monospace",
            fontSize: "clamp(24px, 3.5vw, 42px)",
            fontWeight: "bold",
            color: "#3A4828",
            marginBottom: "32px",
            lineHeight: 1.2,
          }}
        >
          Mundos <span style={{ color: "#C4963A" }}>renderizados</span>
        </h2>

        {/* Category filters */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginBottom: "32px",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => {
              setActiveCategory(null);
              setShowAll(false);
            }}
            style={{
              padding: "8px 16px",
              fontSize: "10px",
              letterSpacing: "2px",
              fontFamily: "monospace",
              background: activeCategory === null ? "#3A4828" : "transparent",
              color: activeCategory === null ? "#F5F0E8" : "#6B7F4A",
              border: "1px solid #6B7F4A",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
          >
            TODOS
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setShowAll(false);
              }}
              style={{
                padding: "8px 16px",
                fontSize: "10px",
                letterSpacing: "2px",
                fontFamily: "monospace",
                background: activeCategory === cat ? "#3A4828" : "transparent",
                color: activeCategory === cat ? "#F5F0E8" : "#6B7F4A",
                border: "1px solid #6B7F4A",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "24px",
          }}
        >
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                position: "relative",
                height: "320px",
                background: "#E8DCC8",
                border: "2px solid",
                borderColor: hoveredProject === project.id ? project.color : "#D4C4A8",
                overflow: "hidden",
                cursor: "pointer",
                transition: "all 0.4s",
              }}
            >
              <Image
                src={project.heroImage}
                alt={project.title}
                fill
                style={{
                  objectFit: "cover",
                  transition: "all 0.5s",
                  transform: hoveredProject === project.id ? "scale(1.05)" : "scale(1)",
                }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Project number */}
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  left: "24px",
                  fontFamily: "monospace",
                  fontSize: "10px",
                  color: project.color,
                  opacity: 0.6,
                  letterSpacing: "2px",
                }}
              >
                {String(project.id).padStart(2, "0")}
              </div>

              {/* Category badge */}
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "24px",
                  fontSize: "9px",
                  letterSpacing: "2px",
                  fontFamily: "monospace",
                  padding: "4px 10px",
                  border: `1px solid ${project.color}40`,
                  color: project.color,
                  background: "rgba(245,240,232,0.9)",
                }}
              >
                {project.category}
              </div>

              {/* Gallery indicator */}
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  left: "60px",
                  fontSize: "9px",
                  fontFamily: "monospace",
                  color: "#F5F0E8",
                  background: "rgba(61,48,36,0.7)",
                  padding: "4px 8px",
                  letterSpacing: "1px",
                }}
              >
                {project.gallery.length} FOTOS
              </div>

              {/* Bottom info */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "24px",
                  background:
                    hoveredProject === project.id
                      ? "linear-gradient(transparent, rgba(61,48,36,0.95))"
                      : "linear-gradient(transparent, rgba(61,48,36,0.7))",
                  transition: "all 0.4s",
                }}
              >
                <div
                  style={{
                    fontFamily: "monospace",
                    fontSize: "clamp(14px, 2vw, 20px)",
                    fontWeight: "bold",
                    color: "#F5F0E8",
                    letterSpacing: "3px",
                    marginBottom: "8px",
                  }}
                >
                  {project.title}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "10px",
                      fontFamily: "monospace",
                      color: "#D4C4A8",
                      letterSpacing: "1px",
                    }}
                  >
                    {project.location}
                  </span>
                  <span
                    style={{
                      fontSize: "9px",
                      fontFamily: "monospace",
                      color: "#C4963A",
                      letterSpacing: "2px",
                    }}
                  >
                    {project.type}
                  </span>
                </div>

                {/* Click indicator on hover */}
                {hoveredProject === project.id && (
                  <div
                    style={{
                      marginTop: "12px",
                      fontSize: "10px",
                      fontFamily: "monospace",
                      color: "#C4963A",
                      letterSpacing: "2px",
                    }}
                  >
                    CLIQUE PARA VER MAIS →
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View all CTA */}
        <div
          style={{
            textAlign: "center",
            marginTop: "48px",
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          {hasMore && (
            <button
              onClick={() => setShowAll(true)}
              style={{
                fontSize: "11px",
                letterSpacing: "3px",
                fontFamily: "monospace",
                color: "#6B7F4A",
                padding: "14px 32px",
                border: "1px solid #6B7F4A",
                background: "transparent",
                cursor: "pointer",
                transition: "all 0.3s",
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
            >
              CARREGAR MAIS MUNDOS →
            </button>
          )}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
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
          >
            CONSTRUA O MEU →
          </a>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
