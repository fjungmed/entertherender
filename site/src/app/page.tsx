"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { Scanlines } from "@/components/effects/Scanlines";
import { GridBackground } from "@/components/effects/GridBackground";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { Process } from "@/components/sections/Process";
import { Quote } from "@/components/sections/Quote";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setLoadingComplete(true);
    setTimeout(() => setShowContent(true), 100);
  };

  return (
    <>
      {!loadingComplete && <LoadingScreen onComplete={handleLoadingComplete} />}

      <div
        className={`bg-[#FAF7F0] text-[#3D3024] min-h-screen overflow-hidden transition-opacity duration-600 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <Scanlines />
        <GridBackground />
        <Navbar />
        <Hero showContent={showContent} />
        <Stats />
        <Services />
        <Projects />
        <Process />
        <Quote />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
