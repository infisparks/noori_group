"use client";
import React, { useState, useEffect } from "react";

/* ─────────────────────────────────────────────────────────────
   DESKTOP HERO  (≥ 900 px)
   – Full-viewport, display PC version of the hero image as-is
 ───────────────────────────────────────────────────────────── */
function DesktopHero() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#0a1628",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/images/building/PC VERSION/HEROSECTION.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      />
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   MOBILE HERO  (< 900 px)
   – Full-viewport, display mobile version of the hero image as-is
 ───────────────────────────────────────────────────────────── */
function MobileHero() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#0a1628",
      }}
    >
      {/* Mobile background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/images/building/mobile version/HEROSECTION.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      />
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   ROOT EXPORT – picks correct hero based on viewport width
 ───────────────────────────────────────────────────────────── */
export default function HeroBanner() {
  const [isMobile, setIsMobile] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900);
    check();
    setReady(true);
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  // Avoid flash of wrong layout on SSR
  if (!ready) return null;

  return isMobile ? <MobileHero /> : <DesktopHero />;
}
