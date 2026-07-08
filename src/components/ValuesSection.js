"use client";
import React from "react";

export default function ValuesSection() {
  const values = [
    {
      title: "Affordable Housing",
      description:
        "We are committed to providing housing options that are affordable and accessible, ensuring that individuals from diverse backgrounds can enjoy the security and pride of homeownership.",
    },
    {
      title: "Luxury Within Budget",
      description:
        "We believe that luxury should not be exclusive. We strive to redefine luxury by incorporating it into our budget-friendly projects, offering residents the best of both worlds.",
    },
    {
      title: "Urban Planning",
      description:
        "We are passionate about creating well-designed, sustainable communities. Our urban planning strategies prioritize green spaces, accessibility, and functionality, enriching the lives of our residents.",
    },
    {
      title: "Redevelopment",
      description:
        "We are dedicated to revitalizing urban areas, breathing new life into neglected spaces, and preserving historical heritage. Our redevelopment projects aim to enhance the overall quality of life in the communities we serve.",
    },
    {
      title: "Customer-Centric",
      description:
        "We prioritize our customers’ needs and preferences. Our commitment to excellence in construction and customer satisfaction is unwavering, ensuring a positive experience for every homeowner.",
    },
    {
      title: "Innovation",
      description:
        "We embrace innovation in construction techniques, design, and sustainability practices to stay at the forefront of the industry, continually exceeding expectations.",
    },
  ];

  return (
    <section
      id="values"
      style={{
        backgroundColor: "#ffffff",
        padding: "60px 0 50px",
        width: "100%",
        overflow: "hidden",
        borderTop: "1px solid #f7fafc",
      }}
    >
      <div
        className="values-container"
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "0 48px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "35px",
        }}
      >
        {/* Header Block */}
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          {/* Gold Subtitle */}
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
            Our Core Principles
          </div>

          {/* Main Heading */}
          <h2
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "28px",
              fontWeight: "400",
              color: "#0a1628",
              margin: 0,
              letterSpacing: "1.5px",
              lineHeight: "1.25",
            }}
          >
            OUR <span style={{ color: "#d4af37" }}>VALUES</span>
          </h2>

          {/* Accent Line */}
          <div
            style={{
              width: "50px",
              height: "2px",
              backgroundColor: "#d4af37",
              marginTop: "2px",
            }}
          />
        </div>

        {/* Intro Paragraph (Premium & Compact Box) */}
        <p
          style={{
            maxWidth: "850px",
            margin: "0 auto 10px",
            textAlign: "center",
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "14px",
            lineHeight: "1.65",
            color: "#4a5568",
            fontWeight: "300",
          }}
        >
          Noori Group of Companies takes immense pride in having provided quality
          residences to over 1,000 satisfied families, a testament to their
          unwavering commitment to excellence in construction and customer
          satisfaction. With Mr. Farid’s experience and Mr. Meraj’s leadership,
          Noori Group is set to continue its legacy of building dreams for years
          to come.
        </p>

        {/* Values Responsive Grid / Slidable Container */}
        <div className="values-grid">
          {values.map((val, idx) => (
            <div
              key={idx}
              className="value-card"
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = "#d4af37";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(212, 175, 55, 0.08)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = "#f3f4f6";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.01)";
              }}
            >
              {/* Value Header with gold indicator */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#d4af37",
                  }}
                >
                  0{idx + 1}.
                </span>
                <h3
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "15px",
                    fontWeight: "600",
                    color: "#0a1628",
                    margin: 0,
                    letterSpacing: "0.5px",
                  }}
                >
                  {val.title}
                </h3>
              </div>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "12.5px",
                  lineHeight: "1.5",
                  color: "#718096",
                  margin: 0,
                  fontWeight: "300",
                }}
              >
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Breakpoints CSS */}
      <style>{`
        /* Desktop styles (grid) */
        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 24px 30px;
          width: 100%;
          margin-top: 10px;
        }
        .value-card {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 16px 20px;
          background-color: #fcfdfe;
          border: 1px solid #f3f4f6;
          border-radius: 6px;
          transition: all 0.3s ease;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.01);
        }

        /* Mobile / Tablet horizontal scroll */
        @media (max-width: 767px) {
          .values-container {
            padding: 0 16px !important;
            gap: 20px !important;
          }
          .values-grid {
            display: flex !important;
            flex-direction: row !important;
            overflow-x: auto !important;
            scroll-snap-type: x mandatory !important;
            -webkit-overflow-scrolling: touch !important;
            gap: 16px !important;
            padding: 10px 4px 15px !important; 
            margin-top: 5px !important;
            width: 100% !important;
          }
          .value-card {
            flex-shrink: 0 !important;
            width: 280px !important;
            scroll-snap-align: start !important;
          }
          /* Hide scrollbar for Chrome, Safari and Opera */
          .values-grid::-webkit-scrollbar {
            display: none;
          }
          /* Hide scrollbar for IE, Edge and Firefox */
          .values-grid {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }
        }
      `}</style>
    </section>
  );
}
