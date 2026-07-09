"use client";
import React, { useState, useEffect } from "react";

export default function MissionVision() {
  const [activeTab, setActiveTab] = useState("mission");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 991);
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const tabsData = {
    mission: {
      title: "Our Mission",
      text: "Noori Group of Companies is dedicated to making affordable housing a reality for all, by combining the essence of luxury within budget constraints. Our mission is to create sustainable and vibrant communities through innovative urban planning and redevelopment, where every individual can experience the comfort of a well-designed home.",
    },
    vision: {
      title: "Our Vision",
      text: "Our vision is to be a trailblazing force in the construction industry, setting new standards for affordability and luxury. We aspire to reshape urban landscapes, breathing life into neglected spaces through meticulous urban planning and redevelopment initiatives. By consistently delivering high-quality, cost-effective housing solutions, we aim to uplift the lives of countless families, making homeownership an achievable dream for everyone.",
    },
    philosophy: {
      title: "Our Philosophy",
      text: "Our philosophy in the realm of construction is rooted in the belief that building excellence goes beyond bricks and mortar—it is about creating enduring structures that stand as testaments to quality, precision, and innovation. At the heart of our philosophy lies an unwavering commitment to delivering projects of exceptional quality, meeting and exceeding industry standards.",
    },
  };

  return (
    <section
      id="mission-vision"
      style={{
        backgroundColor: "#ffffff",
        padding: isMobile ? "30px 0" : "50px 0",
        width: "100%",
        overflow: "hidden",
        borderTop: "1px solid #f0f0f0",
      }}
    >
      <div
        className="mission-vision-container"
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "0 48px",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "0.95fr 1.05fr",
          columnGap: "50px",
          rowGap: isMobile ? "30px" : "0",
          alignItems: "center",
        }}
      >
        {/* Left Column: Image with offset gold border */}
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: isMobile ? "400px" : "480px",
            margin: "0 auto",
          }}
        >
          {/* Gold Decorative offset border behind the image */}
          <div
            style={{
              position: "absolute",
              top: "12px",
              left: "-12px",
              right: "12px",
              bottom: "-12px",
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
              backgroundColor: "#f7fafc",
              borderRadius: "4px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
              overflow: "hidden",
              zIndex: 2,
              border: "1px solid #e2e8f0",
              aspectRatio: "586/268",
            }}
          >
            <img
              src="/images/building/other/our_mission.jpg"
              alt="Noori Group Corporate Purpose"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </div>

        {/* Right Column: Tab Switcher & Text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {/* Accent Subtitle */}
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
            Our Core Pillars
          </div>

          {/* Main Heading */}
          <h2
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: isMobile ? "18px" : "28px",
              fontWeight: "400",
              color: "#0a1628",
              lineHeight: "1.3",
              letterSpacing: "1px",
              margin: 0,
            }}
          >
            Purpose, Direction & <br />
            <span style={{ color: "#d4af37" }}>Philosophy</span>
          </h2>

          {/* Divider */}
          <div
            style={{
              width: "50px",
              height: "2px",
              backgroundColor: "#d4af37",
            }}
          />

          {/* Switcher Tabs */}
          <div
            style={{
              display: "flex",
              borderBottom: "1px solid #f0f0f0",
              gap: "24px",
              marginTop: "4px",
            }}
          >
            {Object.keys(tabsData).map((tabKey) => {
              const tab = tabsData[tabKey];
              const isActive = activeTab === tabKey;
              return (
                <button
                  key={tabKey}
                  onClick={() => setActiveTab(tabKey)}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    borderBottom: isActive ? "2px solid #d4af37" : "2px solid transparent",
                    color: isActive ? "#0a1628" : "#718096",
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "11px",
                    fontWeight: "600",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    padding: "10px 0",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  onMouseOver={(e) => {
                    if (!isActive) e.currentTarget.style.color = "#0a1628";
                  }}
                  onMouseOut={(e) => {
                    if (!isActive) e.currentTarget.style.color = "#718096";
                  }}
                >
                  {tab.title}
                </button>
              );
            })}
          </div>

          {/* Tab Content Display */}
          <div
            key={activeTab}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "14px",
              color: "#4a5568",
              lineHeight: "1.65",
              fontWeight: "300",
              minHeight: isMobile ? "auto" : "115px",
              animation: "fadeInTab 0.4s ease-in-out",
            }}
          >
            <p style={{ margin: 0 }}>
              {tabsData[activeTab].text}
            </p>
          </div>
        </div>
      </div>

      {/* Global CSS animation and responsive override */}
      <style>{`
        @keyframes fadeInTab {
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
          .mission-vision-container {
            padding: 0 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
