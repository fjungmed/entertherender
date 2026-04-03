"use client";

import { useState } from "react";
import { WHATSAPP_URL } from "@/lib/constants";

// Google Drive direct image URL helper
const driveImg = (id: string) => `https://lh3.googleusercontent.com/d/${id}=w1200`;

const PROJECTS = [
  {
    id: 1,
    title: "BROOKLYN",
    location: "SÃO PAULO, BR",
    color: "#6B7F4A",
    images: [
      "10j0rey9v-oAXsQunBVVDGQ94PWE4ZCvI",
      "1bj_eOcXxlL4DAtFxJ93gLyXlMoveAhrv",
      "15FHgNf3Ll4s7NXDW0bm00kwZuRABNAez",
      "1t-sTf1-Vbg-iGGU41OLD_A74NS-Mq_J_",
      "1yFlve0lQRrNDm5oLFrAntwxud7nEcGcQ",
      "1zJTcFg6p-jkrDQrO_NjzkNM8CzsOL1qu",
      "1zIoEEy6zfWdRg0RB4hUy1KjSCza1t5i0",
      "1XLqIp-w8WOdomqbEjB3X1HIlylai5KSb",
      "1QMi3LzzOoWCZ4qBlBsIodjRwThk31XPe",
      "1KfLIRAOUVvpjU5l7ULGfoqi8IqJlffs3",
      "15a4oeaD6kiALgXtUEKhWR5l4V8LGnk_m",
      "10TZyCwGqp27vUVEJOmpKoKH0Z2iHO9ec",
      "1ydqzu8urzvvJwrRrNxdixYHIIkiTBVNs",
      "1YMbccKp-JRHbAPw4LuS5UFdqpqF4Ok_F",
      "1CQxLZa51Il9lmbweZ7GoJuVDKDj5zymT",
      "1Hn1E-PEyy82dIbHtEh8QehPelge35pOI",
      "1dKzUhvrp-THH5BG3-XBVaIXeXwnWtyDp",
      "1Rf_iMomWSbdXDGj8hxtRUZJWgCtTLo2i",
      "1ClVD4RgaGRo8qc8bUsOAZpW93Kphkhjo",
    ],
  },
  {
    id: 2,
    title: "RIO MARAVILHA",
    location: "RIO DE JANEIRO, BR",
    color: "#C4963A",
    images: [
      "1klYwfPOqg7S0RDQPjtiAOZmsej5xPrO5",
      "1fQz2n7kHXQi5HizK3jJN-3O-a6wWRBPM",
      "1S-cp8DpTxOFL7FBnpqXETFQ4tmoo4jDR",
      "1T9eSgnh4OQxBY9uxgc9DslGkxnUWMvFA",
      "1PNDW0X8jKBNU4Pc4X1ou4xea64lLDZN3",
      "1hzIPGu8BmW_v0b6G3Nyqj0wS-oUf1wZ1",
      "10iK5UvdCSkEdbc1NHjQcfyJ_dIX9YlSQ",
      "1Qp2erk7FVzx2XsDraCVux2eVGOaUE_Y3",
      "1t3lQ6hyytTFeRmqeqJJuMPcbfNQNKqXp",
      "1PzvuqIeTfSFxbemQvHqLyJXmeL3P8ZqT",
      "1DHMsaTSKDg-fWnaV0ZKHReQjkozxZ0vi",
      "11dRTJ5A0UanRQMvIcRhnoyB3LRdKFk8-",
      "10E5wZMZP0x-T8dbUjMLOterl5DHqyCxq",
      "1scNBEPGXiANbjPpqBBUUtGJB9l2MI-yd",
      "1tZYjld7ratYRJnxS_Z1lKxi10sujfORh",
      "1vxB67Mye1btGIEe6c5SeoKwReEk94ceR",
    ],
  },
];

type Project = (typeof PROJECTS)[number];

function ProjectGallery({ project, onClose }: { project: Project; onClose: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = project.images.length;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "rgba(61,48,36,0.98)",
        backdropFilter: "blur(10px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
      onClick={onClose}
    >
      <div
        style={{
          maxWidth: "1400px",
          width: "100%",
          maxHeight: "95vh",
          background: "#F5F0E8",
          border: `2px solid ${project.color}`,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            padding: "16px 24px",
            borderBottom: "1px solid #D4C4A8",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexShrink: 0,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "monospace",
                fontSize: "18px",
                fontWeight: "bold",
                color: "#3A4828",
                letterSpacing: "2px",
              }}
            >
              {project.title}
            </div>
            <div
              style={{
                fontSize: "9px",
                letterSpacing: "2px",
                fontFamily: "monospace",
                color: project.color,
                marginTop: "4px",
              }}
            >
              {project.location}
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              width: "40px",
              height: "40px",
              background: "transparent",
              border: "1px solid #D4C4A8",
              cursor: "pointer",
              fontFamily: "monospace",
              fontSize: "20px",
              color: "#7A6248",
            }}
          >
            ×
          </button>
        </div>

        {/* Main image */}
        <div
          style={{
            height: "55vh",
            minHeight: "300px",
            position: "relative",
            background: "#1a1a1a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={driveImg(project.images[currentIndex])}
            alt={`${project.title} - ${currentIndex + 1}`}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
          />

          {/* Nav arrows */}
          {total > 1 && (
            <>
              <button
                onClick={() => setCurrentIndex((prev) => (prev - 1 + total) % total)}
                style={{
                  position: "absolute",
                  left: "16px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "48px",
                  height: "48px",
                  background: "rgba(245,240,232,0.95)",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "monospace",
                  fontSize: "20px",
                  color: "#3A4828",
                }}
              >
                ←
              </button>
              <button
                onClick={() => setCurrentIndex((prev) => (prev + 1) % total)}
                style={{
                  position: "absolute",
                  right: "16px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "48px",
                  height: "48px",
                  background: "rgba(245,240,232,0.95)",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "monospace",
                  fontSize: "20px",
                  color: "#3A4828",
                }}
              >
                →
              </button>
            </>
          )}

          {/* Counter */}
          <div
            style={{
              position: "absolute",
              bottom: "16px",
              right: "16px",
              background: "rgba(61,48,36,0.9)",
              padding: "8px 14px",
              fontFamily: "monospace",
              fontSize: "10px",
              color: "#F5F0E8",
              letterSpacing: "2px",
            }}
          >
            {String(currentIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </div>
        </div>

        {/* Thumbnails */}
        <div
          style={{
            padding: "12px 16px",
            borderTop: "1px solid #D4C4A8",
            display: "flex",
            gap: "8px",
            overflowX: "auto",
            flexShrink: 0,
            background: "#F5F0E8",
          }}
        >
          {project.images.map((id, idx) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={id}
              src={driveImg(id)}
              alt={`Thumb ${idx + 1}`}
              onClick={() => setCurrentIndex(idx)}
              style={{
                width: "70px",
                height: "50px",
                flexShrink: 0,
                objectFit: "cover",
                cursor: "pointer",
                border: currentIndex === idx ? `2px solid ${project.color}` : "2px solid transparent",
                opacity: currentIndex === idx ? 1 : 0.6,
                transition: "all 0.3s",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="section-pad"
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

        {/* Project cards — hero image from first photo */}
        <div
          className="grid-2-col"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "24px",
          }}
        >
          {PROJECTS.map((project) => (
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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={driveImg(project.images[0])}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.5s",
                  transform: hoveredProject === project.id ? "scale(1.05)" : "scale(1)",
                }}
              />

              {/* Photo count */}
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  left: "24px",
                  fontSize: "9px",
                  fontFamily: "monospace",
                  color: "#F5F0E8",
                  background: "rgba(61,48,36,0.7)",
                  padding: "4px 8px",
                  letterSpacing: "1px",
                }}
              >
                {project.images.length} FOTOS
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

        {/* CTA */}
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

      {/* Gallery Modal */}
      {selectedProject && (
        <ProjectGallery
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
