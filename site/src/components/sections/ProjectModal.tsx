"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  type: string;
  color: string;
  heroImage: string;
  description: string;
  gallery: string[];
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      setCurrentImage(0);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!project) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setCurrentImage((prev) => (prev + 1) % project.gallery.length);
      if (e.key === "ArrowLeft") setCurrentImage((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "rgba(61,48,36,0.95)",
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
          maxWidth: "1200px",
          width: "100%",
          maxHeight: "90vh",
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
            padding: "20px 24px",
            borderBottom: "1px solid #D4C4A8",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "9px",
                letterSpacing: "2px",
                fontFamily: "monospace",
                color: project.color,
                marginBottom: "4px",
              }}
            >
              {project.category} — {project.year}
            </div>
            <h3
              style={{
                fontFamily: "monospace",
                fontSize: "20px",
                fontWeight: "bold",
                color: "#3A4828",
                letterSpacing: "2px",
              }}
            >
              {project.title}
            </h3>
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
              fontSize: "18px",
              color: "#7A6248",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#3A4828";
              e.currentTarget.style.color = "#F5F0E8";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#7A6248";
            }}
          >
            ×
          </button>
        </div>

        {/* Main image */}
        <div
          style={{
            position: "relative",
            height: "400px",
            background: "#E8DCC8",
          }}
        >
          <Image
            src={project.gallery[currentImage]}
            alt={`${project.title} - ${currentImage + 1}`}
            fill
            style={{ objectFit: "cover" }}
            sizes="100vw"
          />

          {/* Navigation arrows */}
          {project.gallery.length > 1 && (
            <>
              <button
                onClick={() => setCurrentImage((prev) => (prev - 1 + project.gallery.length) % project.gallery.length)}
                style={{
                  position: "absolute",
                  left: "16px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "48px",
                  height: "48px",
                  background: "rgba(245,240,232,0.9)",
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
                onClick={() => setCurrentImage((prev) => (prev + 1) % project.gallery.length)}
                style={{
                  position: "absolute",
                  right: "16px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "48px",
                  height: "48px",
                  background: "rgba(245,240,232,0.9)",
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

          {/* Image counter */}
          <div
            style={{
              position: "absolute",
              bottom: "16px",
              right: "16px",
              background: "rgba(61,48,36,0.8)",
              padding: "8px 12px",
              fontFamily: "monospace",
              fontSize: "10px",
              color: "#F5F0E8",
              letterSpacing: "2px",
            }}
          >
            {String(currentImage + 1).padStart(2, "0")} / {String(project.gallery.length).padStart(2, "0")}
          </div>
        </div>

        {/* Thumbnails */}
        <div
          style={{
            padding: "16px",
            borderTop: "1px solid #D4C4A8",
            display: "flex",
            gap: "8px",
            overflowX: "auto",
          }}
        >
          {project.gallery.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentImage(idx)}
              style={{
                width: "80px",
                height: "60px",
                flexShrink: 0,
                position: "relative",
                cursor: "pointer",
                border: currentImage === idx ? `2px solid ${project.color}` : "2px solid transparent",
                opacity: currentImage === idx ? 1 : 0.6,
                transition: "all 0.3s",
              }}
            >
              <Image
                src={img}
                alt={`Thumb ${idx + 1}`}
                fill
                style={{ objectFit: "cover" }}
                sizes="80px"
              />
            </div>
          ))}
        </div>

        {/* Info */}
        <div
          style={{
            padding: "20px 24px",
            borderTop: "1px solid #D4C4A8",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "40px",
          }}
        >
          <p
            style={{
              fontFamily: "monospace",
              fontSize: "13px",
              lineHeight: 1.8,
              color: "#5C4A36",
              flex: 1,
            }}
          >
            {project.description}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div
              style={{
                fontSize: "9px",
                letterSpacing: "2px",
                fontFamily: "monospace",
                color: "#A68B6B",
              }}
            >
              {project.location}
            </div>
            <div
              style={{
                fontSize: "10px",
                letterSpacing: "2px",
                fontFamily: "monospace",
                padding: "6px 12px",
                background: `${project.color}15`,
                border: `1px solid ${project.color}40`,
                color: project.color,
              }}
            >
              {project.type}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
