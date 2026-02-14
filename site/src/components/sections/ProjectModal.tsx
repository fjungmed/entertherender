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
  videos: string[];
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

type MediaItem = { type: "image" | "video"; src: string };

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Combine images and videos into one media array
  const mediaItems: MediaItem[] = project
    ? [
        ...project.gallery.map((src) => ({ type: "image" as const, src })),
        ...project.videos.map((src) => ({ type: "video" as const, src })),
      ]
    : [];

  const currentMedia = mediaItems[currentIndex];

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      setCurrentIndex(0);
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
      if (e.key === "ArrowRight") setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
      if (e.key === "ArrowLeft") setCurrentIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose, mediaItems.length]);

  if (!project) return null;

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
                fontSize: "18px",
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
              fontSize: "20px",
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

        {/* Main media area - with contain to see full image */}
        <div
          style={{
            flex: 1,
            minHeight: 0,
            position: "relative",
            background: "#1a1a1a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {currentMedia?.type === "image" ? (
            <Image
              src={currentMedia.src}
              alt={`${project.title} - ${currentIndex + 1}`}
              fill
              style={{
                objectFit: "contain",
                padding: "20px",
              }}
              sizes="100vw"
            />
          ) : currentMedia?.type === "video" ? (
            <video
              key={currentMedia.src}
              controls
              autoPlay
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            >
              <source src={currentMedia.src} type="video/mp4" />
            </video>
          ) : null}

          {/* Navigation arrows */}
          {mediaItems.length > 1 && (
            <>
              <button
                onClick={() => setCurrentIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length)}
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
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = project.color;
                  e.currentTarget.style.color = "#F5F0E8";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(245,240,232,0.95)";
                  e.currentTarget.style.color = "#3A4828";
                }}
              >
                ←
              </button>
              <button
                onClick={() => setCurrentIndex((prev) => (prev + 1) % mediaItems.length)}
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
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = project.color;
                  e.currentTarget.style.color = "#F5F0E8";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(245,240,232,0.95)";
                  e.currentTarget.style.color = "#3A4828";
                }}
              >
                →
              </button>
            </>
          )}

          {/* Media counter and type indicator */}
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
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span style={{ color: currentMedia?.type === "video" ? "#C4963A" : "#6B7F4A" }}>
              {currentMedia?.type === "video" ? "▶ VIDEO" : "◼ FOTO"}
            </span>
            <span>
              {String(currentIndex + 1).padStart(2, "0")} / {String(mediaItems.length).padStart(2, "0")}
            </span>
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
          {mediaItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              style={{
                width: "70px",
                height: "50px",
                flexShrink: 0,
                position: "relative",
                cursor: "pointer",
                border: currentIndex === idx ? `2px solid ${project.color}` : "2px solid transparent",
                opacity: currentIndex === idx ? 1 : 0.6,
                transition: "all 0.3s",
                background: item.type === "video" ? "#1a1a1a" : "#E8DCC8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={`Thumb ${idx + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="70px"
                />
              ) : (
                <span style={{ color: "#C4963A", fontSize: "16px" }}>▶</span>
              )}
            </div>
          ))}
        </div>

        {/* Info */}
        <div
          style={{
            padding: "16px 24px",
            borderTop: "1px solid #D4C4A8",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "40px",
            flexShrink: 0,
          }}
        >
          <p
            style={{
              fontFamily: "monospace",
              fontSize: "12px",
              lineHeight: 1.7,
              color: "#5C4A36",
              flex: 1,
            }}
          >
            {project.description}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", flexShrink: 0 }}>
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
                fontSize: "9px",
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
