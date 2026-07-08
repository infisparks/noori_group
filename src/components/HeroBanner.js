"use client";
import React from "react";

/* ─────────────────────────────────────────────────────────────
   HERO BANNER
   – Pure CSS media queries to eliminate layout shift and SSR flash
   – Aligns text and 1 button inside the blue area (left on PC, bottom on mobile)
 ───────────────────────────────────────────────────────────── */
export default function HeroBanner({ onRegisterClick }) {
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
            backgroundImage: "url('/images/building/PC VERSION/HEROSECTION.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "left center",
            backgroundRepeat: "no-repeat",
            zIndex: 0,
          }}
        />

        {/* Content container aligned to the left blue space */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            height: "100%",
            paddingLeft: "80px", // Aligns with the left ornament of the logo frame
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          {/* Constrain width to keep it strictly inside the left blue space */}
          <div style={{ maxWidth: "480px", paddingTop: "140px" }}>
            <h1
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "44px",
                fontWeight: "400",
                color: "#ffffff",
                lineHeight: "1.25",
                letterSpacing: "1.5px",
                marginBottom: "18px",
              }}
            >
              ELEVATING <br />
              <span style={{ color: "#d4af37" }}>LUXURY LIVING</span>
            </h1>

            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "14.5px",
                fontWeight: "300",
                color: "#cbd5e1",
                lineHeight: "1.75",
                letterSpacing: "0.5px",
                marginBottom: "36px",
              }}
            >
              Discover an exclusive collection of premium residential & commercial
              landmarks in Dubai's most prestigious locations, crafted with
              architectural excellence.
            </p>

            <button
              onClick={onRegisterClick}
              style={{
                padding: "14px 36px",
                backgroundColor: "#d4af37",
                color: "#050c23",
                border: "none",
                borderRadius: "4px",
                fontFamily: "'Cinzel', serif",
                fontWeight: "600",
                fontSize: "13px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 20px rgba(212,175,55,0.25)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#fff";
                e.currentTarget.style.color = "#050c23";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 6px 25px rgba(255,255,255,0.2)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#d4af37";
                e.currentTarget.style.color = "#050c23";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(212,175,55,0.25)";
              }}
            >
              Get in Touch
            </button>
          </div>
        </div>
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
            backgroundImage: "url('/images/building/mobile version/HEROSECTION.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            zIndex: 0,
          }}
        />

        {/* Content positioned in the bottom 55% space */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "48%", // Sits in the bottom navy blue area
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "0 24px",
            textAlign: "center",
            zIndex: 2,
          }}
        >
          <h1
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "28px",
              fontWeight: "400",
              color: "#ffffff",
              lineHeight: "1.3",
              letterSpacing: "1.5px",
              marginBottom: "12px",
            }}
          >
            ELEVATING <br />
            <span style={{ color: "#d4af37" }}>LUXURY LIVING</span>
          </h1>

          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "13px",
              fontWeight: "300",
              color: "#cbd5e1",
              lineHeight: "1.6",
              letterSpacing: "0.5px",
              maxWidth: "320px",
              marginBottom: "28px",
            }}
          >
            Premium residential & commercial developments across Dubai's prime
            locations.
          </p>

          <button
            onClick={onRegisterClick}
            style={{
              width: "100%",
              maxWidth: "280px",
              padding: "12px 24px",
              backgroundColor: "#d4af37",
              color: "#050c23",
              border: "none",
              borderRadius: "4px",
              fontFamily: "'Cinzel', serif",
              fontWeight: "600",
              fontSize: "12.5px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 20px rgba(212,175,55,0.25)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#fff";
              e.currentTarget.style.color = "#050c23";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#d4af37";
              e.currentTarget.style.color = "#050c23";
            }}
          >
            Get in Touch
          </button>
        </div>
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
