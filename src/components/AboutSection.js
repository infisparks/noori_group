"use client";
import React from "react";

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "#ffffff",
        padding: "100px 0",
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
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: "80px",
          alignItems: "center",
        }}
      >
        {/* Left Side: Professional Text Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {/* Subtitle Accent */}
          <div
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "11px",
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
              fontSize: "36px",
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
              width: "60px",
              height: "2px",
              backgroundColor: "#d4af37",
              marginTop: "4px",
            }}
          />

          {/* Body Content */}
          <div
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "15px",
              color: "#4a5568",
              lineHeight: "1.75",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              fontWeight: "300",
            }}
          >
            <p>
              Noori Group of Companies, led by the visionary builder **Farid Zariwala** as the Director, boasts a rich legacy spanning three decades in the construction industry. With a sterling reputation for excellence and innovation, Noori Group has become a household name in the world of real estate development.
            </p>
            <p>
              Farid Zariwala, the driving force behind the company, brings a wealth of experience and expertise to the table. His illustrious career in construction spans over 30 years, during which he has spearheaded numerous successful projects, earning accolades for quality and craftsmanship. Under his guidance, the group has consistently delivered exceptional residential properties, shaped communities, and transformed dreams into reality.
            </p>
            <p>
              Complementing Farid’s vast industry knowledge is the dynamic CEO, **Meraj Zariwala**. Armed with a strong background in management and administration, Meraj brings a fresh perspective to the company. His strategic vision and modern approach have been instrumental in Noori Group's continued growth and adaptability in a rapidly evolving market.
            </p>
            <p style={{ fontWeight: "400", color: "#0a1628" }}>
              Together, this dynamic duo has not only constructed homes but has also crafted lifestyles.
            </p>
          </div>

          {/* Dynamic Duo Highlights */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                borderLeft: "2px solid #d4af37",
                paddingLeft: "16px",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#0a1628",
                  marginBottom: "4px",
                }}
              >
                Farid Zariwala
              </div>
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "12px",
                  color: "#d4af37",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginBottom: "8px",
                }}
              >
                Director
              </div>
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "13px",
                  color: "#718096",
                  lineHeight: "1.5",
                  fontWeight: "300",
                }}
              >
                30+ years of construction experience, spearheading luxury projects.
              </div>
            </div>

            <div
              style={{
                borderLeft: "2px solid #0a1628",
                paddingLeft: "16px",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#0a1628",
                  marginBottom: "4px",
                }}
              >
                Meraj Zariwala
              </div>
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "12px",
                  color: "#0a1628",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginBottom: "8px",
                }}
              >
                Chief Executive Officer
              </div>
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "13px",
                  color: "#718096",
                  lineHeight: "1.5",
                  fontWeight: "300",
                }}
              >
                Modern strategic vision, driving administrative and market growth.
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Square Image Container with gold accents */}
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
              top: "20px",
              left: "20px",
              width: "100%",
              maxWidth: "450px",
              aspectRatio: "1/1",
              border: "2px solid #d4af37",
              borderRadius: "4px",
              zIndex: 1,
            }}
          />

          {/* Main Image Frame */}
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "450px",
              aspectRatio: "1/1",
              backgroundColor: "#f7fafc",
              borderRadius: "4px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
              overflow: "hidden",
              zIndex: 2,
              border: "1px solid #e2e8f0",
            }}
          >
            <img
              src="/images/about.png"
              alt="Noori Group Leadership"
              onError={(e) => {
                // If user hasn't added about.png yet, fall back to a nice styled placeholder
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
            {/* Fallback Placeholder (displayed only when about.png fails to load) */}
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
                  fontSize: "24px",
                  color: "#d4af37",
                  marginBottom: "8px",
                }}
              >
                Noori Group
              </div>
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "12px",
                  letterSpacing: "1px",
                  color: "#cbd5e1",
                  textTransform: "uppercase",
                }}
              >
                [ Square Image Space ]
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
            gap: 60px !important;
            padding: 0 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
