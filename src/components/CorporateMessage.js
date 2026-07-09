"use client";
import React, { useState, useEffect } from "react";

export default function CorporateMessage() {
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 991);
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="corporate-message"
      style={{
        backgroundColor: "#0a1628",
        padding: isMobile ? "40px 0" : "60px 0",
        width: "100%",
        overflow: "hidden",
        borderTop: "3px solid #d4af37",
        color: "#ffffff",
      }}
    >
      <div
        className="corporate-message-container"
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "0 48px",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1.2fr 0.8fr",
          columnGap: "60px",
          rowGap: isMobile ? "30px" : "0",
          alignItems: "start",
        }}
      >
        {/* Left Column: Message of Commitment */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {/* Subtitle Accent */}
          <div
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "10px",
              fontWeight: "700",
              color: "#d4af37",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Our Commitment
          </div>

          {/* Main Title */}
          <h2
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: isMobile ? "20px" : "28px",
              fontWeight: "400",
              color: "#ffffff",
              lineHeight: "1.3",
              letterSpacing: "1px",
              margin: 0,
            }}
          >
            Building Homes, <br />
            <span style={{ color: "#d4af37" }}>Nurturing Legacies</span>
          </h2>

          {/* Divider */}
          <div
            style={{
              width: "50px",
              height: "2px",
              backgroundColor: "#d4af37",
            }}
          />

          {/* Body Content */}
          <div
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "14px",
              color: "#cbd5e1",
              lineHeight: "1.7",
              fontWeight: "300",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            <p style={{ margin: 0 }}>
              At the heart of our endeavours lies the aspiration to provide not just houses, but homes where dreams are nurtured and futures are built. We understand that homeownership is not just a transaction; it’s an aspiration, a symbol of progress, and a sanctuary for families. Our dedication to this cause has enabled us to bring happiness to countless lives, and it continues to drive us forward.
            </p>

            {isExpanded && (
              <div 
                style={{ 
                  display: "flex", 
                  flexDirection: "column", 
                  gap: "14px",
                  animation: "fadeInText 0.4s ease-in-out" 
                }}
              >
                <p style={{ margin: 0 }}>
                  We aim to upscale the development of Mumbai and its suburbs by not only constructing buildings but by crafting communities that thrive. We envision a future where our projects contribute to the growth, sustainability, and inclusivity of this great city.
                </p>
                <p style={{ margin: 0 }}>
                  In the pursuit of our goals, we remain resolute in our commitment to innovation, quality, and customer satisfaction. Together, we will create not just structures but enduring legacies, enriching the lives of those we serve.
                </p>
                <p style={{ margin: 0, fontWeight: "500", color: "#ffffff" }}>
                  Thank you for your trust in Noori Group of Companies. With your continued support, we will keep building dreams.
                </p>
              </div>
            )}

            {/* Read More / Read Less CTA */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              style={{
                alignSelf: "flex-start",
                backgroundColor: "transparent",
                border: "none",
                color: "#d4af37",
                fontFamily: "'Cinzel', serif",
                fontSize: "11px",
                fontWeight: "600",
                letterSpacing: "1.5px",
                cursor: "pointer",
                padding: "4px 0",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                transition: "color 0.2s ease",
                marginTop: "4px"
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#ffffff")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#d4af37")}
            >
              {isExpanded ? "READ LESS —" : "READ MORE +"}
            </button>
          </div>
        </div>

        {/* Right Column: Corporate Headquarters Block */}
        <div
          style={{
            position: "relative",
            width: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.02)",
            border: "1px solid rgba(212, 175, 55, 0.2)",
            borderRadius: "4px",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
          }}
        >
          {/* Subtitle Accent */}
          <div
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "10px",
              fontWeight: "700",
              color: "#d4af37",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Corporate Office
          </div>

          {/* Title */}
          <h3
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "18px",
              fontWeight: "400",
              color: "#ffffff",
              margin: 0,
            }}
          >
            Noori Group HQ
          </h3>

          {/* Divider */}
          <div
            style={{
              width: "30px",
              height: "1px",
              backgroundColor: "rgba(212, 175, 55, 0.4)",
            }}
          />

          {/* Address and details */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              alignItems: "flex-start",
            }}
          >
            {/* Gold Pin Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#d4af37"
              style={{ width: "24px", height: "24px", flexShrink: 0, marginTop: "2px" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>

            {/* Address Details */}
            <div
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "13.5px",
                lineHeight: "1.6",
                color: "#cbd5e1",
                fontWeight: "300",
              }}
            >
              306/307, Madhava, <br />
              E Block, Near Jio Mall, <br />
              BKC, Bandra East, <br />
              Mumbai - 400051
            </div>
          </div>

          {/* Map Link / Quick CTA */}
          <a
            href="https://maps.google.com/?q=306/307,+Madhava,+E+Block,+Near+Jio+Mall,+BKC,+Bandra+East,+Mumbai+-+400051"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: "12px",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "#d4af37",
              fontFamily: "'Cinzel', serif",
              fontSize: "11px",
              fontWeight: "600",
              letterSpacing: "1.5px",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#ffffff")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#d4af37")}
          >
            LOCATE ON GOOGLE MAPS ➔
          </a>
        </div>
      </div>

      {styleMobileQuery}
    </section>
  );
}

const styleMobileQuery = (
  <style>{`
    @keyframes fadeInText {
      from {
        opacity: 0;
        transform: translateY(4px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @media (max-width: 991px) {
      .corporate-message-container {
        padding: 0 24px !important;
      }
    }
  `}</style>
);
