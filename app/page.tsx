"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import AboutSection from "../components/AboutSection";
import BottomNav from "../components/BottomNav";
import IntroSection from "../components/IntroSection";
import ProjectSection from "../components/ProjectSection";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <main ref={containerRef}>
      <IntroSection />
      <AboutSection />
      <ProjectSection />
      <BottomNav containerRef={containerRef} />
    </main>
  );
}
