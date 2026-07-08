"use client";
import React, { useState, useEffect } from "react";

export default function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 991);
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="about"
      style={{
        backgroundColor: "#ffffff",
        padding: isMobile ? "40px 0" : "60px 0",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <div
        className="about-container"
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "0 48px",
          display: "grid",
          gridTemplateColumns: "1.15fr 0.85fr",
          gap: "50px",
          alignItems: "center",
        }}
      >
        {/* Left Side: Professional Text Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
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
            Our Legacy & Leadership
          </div>

          {/* Main Heading */}
          <h2
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "30px",
              fontWeight: "400",
              color: "#0a1628",
              lineHeight: "1.25",
              letterSpacing: "1px",
              margin: 0,
            }}
          >
            Crafting Lifestyles, <br />
            <span style={{ color: "#d4af37" }}>Building Future Landmarks</span>
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
              color: "#4a5568",
              lineHeight: "1.65",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              fontWeight: "300",
            }}
          >
            {/* Paragraph 1 - Always Visible */}
            <p style={{ margin: 0 }}>
              Noori Group of Companies, led by the visionary builder **Farid Zariwala** as the Director, boasts a rich legacy spanning three decades in the construction industry. With a sterling reputation for excellence and innovation, Noori Group has become a household name in the world of real estate development.
            </p>

            {/* Paragraph 2 - Visible on desktop always, or on mobile only when expanded */}
            {(!isMobile || isExpanded) && (
              <p style={{ margin: 0 }}>
                Farid Zariwala, the driving force behind the company, brings a wealth of experience and expertise to the table. His illustrious career in construction spans over 30 years, during which he has spearheaded numerous successful projects, earning accolades for quality and craftsmanship. Under his guidance, the group has consistently delivered exceptional residential properties, shaped communities, and transformed dreams into reality.
              </p>
            )}

            {/* Paragraphs 3 & 4 - Visible only when expanded */}
            {isExpanded && (
              <>
                <p style={{ margin: 0 }}>
                  Complementing Farid’s vast industry knowledge is the dynamic CEO, **Meraj Zariwala**. Armed with a strong background in management and administration, Meraj brings a fresh perspective to the company. His strategic vision and modern approach have been instrumental in Noori Group's continued growth and adaptability in a rapidly evolving market.
                </p>
                <p style={{ margin: 0, fontWeight: "500", color: "#0a1628" }}>
                  Together, this dynamic duo has not only constructed homes but has also crafted lifestyles.
                </p>
              </>
            )}
          </div>

          {/* Read More / Read Less CTA */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            style={{
              alignSelf: "flex-start",
              backgroundColor: "transparent",
              border: "none",
              color: "#d4af37",
              fontFamily: "'Cinzel', serif",
              fontSize: "12px",
              fontWeight: "600",
              letterSpacing: "1.5px",
              cursor: "pointer",
              padding: "4px 0",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              transition: "color 0.2s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#0a1628")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#d4af37")}
          >
            {isExpanded ? "READ LESS —" : "READ MORE +"}
          </button>

          {/* Dynamic Duo Highlights - Compact */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
              marginTop: "8px",
              borderTop: "1px solid #f0f0f0",
              paddingTop: "16px",
            }}
          >
            <div style={{ borderLeft: "2px solid #d4af37", paddingLeft: "12px" }}>
              <div
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#0a1628",
                  marginBottom: "2px",
                }}
              >
                Farid Zariwala
              </div>
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "10px",
                  color: "#d4af37",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                Director
              </div>
            </div>

            <div style={{ borderLeft: "2px solid #0a1628", paddingLeft: "12px" }}>
              <div
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#0a1628",
                  marginBottom: "2px",
                }}
              >
                Meraj Zariwala
              </div>
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "10px",
                  color: "#0a1628",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                Chief Executive Officer
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Compact Square Image Container */}
        <div
          style={{
            position: "relative",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* Gold Decorative offset border behind the image */}
          <div
            style={{
              position: "absolute",
              top: "15px",
              left: "15px",
              width: "100%",
              maxWidth: "350px",
              aspectRatio: "1/1",
              border: "1px solid #d4af37",
              borderRadius: "4px",
              zIndex: 1,
            }}
          />

          {/* Main Image Frame */}
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "350px",
              aspectRatio: "1/1",
              backgroundColor: "#f7fafc",
              borderRadius: "4px",
              boxShadow: "0 15px 30px rgba(0,0,0,0.06)",
              overflow: "hidden",
              zIndex: 2,
              border: "1px solid #e2e8f0",
            }}
          >
            <img
              src="/images/founder/founder.png"
              alt="Farid Zariwala - Founder of Noori Group"
              onError={(e) => {
                // If founder.png fails to load, show a styled placeholder
                e.currentTarget.style.display = "none";
                e.currentTarget.nextSibling.style.display = "flex";
              }}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
            {/* Fallback Placeholder (displayed only when founder.png fails to load) */}
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "none",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #0a1628 0%, #152942 100%)",
                padding: "24px",
                color: "#ffffff",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "20px",
                  color: "#d4af37",
                  marginBottom: "8px",
                }}
              >
                Noori Group
              </div>
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "11px",
                  letterSpacing: "1px",
                  color: "#cbd5e1",
                  textTransform: "uppercase",
                }}
              >
                Founder & Director
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Breakpoints CSS */}
      <style>{`
        @media (max-width: 991px) {
          .about-container {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            padding: 0 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
