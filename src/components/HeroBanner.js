"use client";
import React from "react";

/* ─────────────────────────────────────────────────────────────
   HERO BANNER
   – Pure CSS media queries to eliminate layout shift and SSR flash
 ───────────────────────────────────────────────────────────── */
export default function HeroBanner() {
  return (
    <>
      {/* Desktop Hero Section */}
      <section
        className="noori-hero-desktop"
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          backgroundColor: "#0a1628",
        }}
      >
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

      {/* Mobile Hero Section */}
      <section
        className="noori-hero-mobile"
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          backgroundColor: "#0a1628",
        }}
      >
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

      {/* Inline styles for show/hide responsive behavior */}
      <style>{`
        @media (min-width: 900px) {
          .noori-hero-desktop { display: block !important; }
          .noori-hero-mobile  { display: none !important; }
        }
        @media (max-width: 899px) {
          .noori-hero-desktop { display: none !important; }
          .noori-hero-mobile  { display: block !important; }
        }
      `}</style>
    </>
  );
}
