"use client";
import React, { useState } from "react";

export default function OtherVentures() {
  const [activeTab, setActiveTab] = useState("healthcare");

  const ventures = [
    {
      id: "healthcare",
      label: "Healthcare",
      title: "MedFord Multi-Specialty Hospital",
      subtitle: "State-of-the-Art Care in Mumbra",
      description: "Noori Group of Companies has opened up the renowned Multi-speciality Medford Hospital in Mumbra and plans to expand this initiative to create a chain of Multi-speciality Hospitals and a Dialysis Centre with state-of-the-art equipment, offering quality healthcare at affordable costs.",
      highlights: [
        "Renowned multi-specialty hospital in Mumbra",
        "Advanced dialysis center with modern facilities",
        "Expanding chain of affordable specialty hospitals",
        "Highly equipped diagnostics & care units"
      ],
      tagline: "Shaping dreams, building legacies, and nurturing lives.",
      badge: "Healthcare Venture",
      image: "/images/building/ventures/medford.jpg",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "48px", height: "48px" }}>
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          <path d="M12 5v14" />
          <path d="M5 12h14" />
        </svg>
      )
    },
    {
      id: "marketing",
      label: "Digital Marketing",
      title: "Whitemint Marketing",
      subtitle: "Performance-Driven Agency",
      description: "Whitemint Marketing is a digital marketing agency with a performance-driven approach and yet another milestone achieved by Noori Group of Companies. We specialize in scaling brand presence and driving measurable growth through strategic digital channels.",
      highlights: [
        "Performance-driven marketing approach",
        "Led by Director Mr. Farid Zariwala",
        "Key milestone of the Noori Group",
        "Focused on cutting-edge brand scalability"
      ],
      tagline: "Carving paths for digital growth and performance.",
      badge: "Digital Agency",
      image: "/images/building/ventures/digitalmarketing.jpg",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "48px", height: "48px" }}>
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
          <path d="M3 20h18" />
          <path d="m16 4 4 4-4 4" />
          <path d="M20 8H12" />
        </svg>
      )
    },
    {
      id: "hospitality",
      label: "Food & Hospitality",
      title: "Hospitality Investments",
      subtitle: "Curating Celebrated Dining Sectors",
      description: "Noori Group of Companies is well invested in the hospitality sector, supporting beloved local establishments that have served the community with exceptional culinary traditions.",
      highlights: [
        "Yaadgaar Restaurant: Renowned Mughlai establishment",
        "Mumbai Chaat: A 50-seater traditional snack corner",
        "Yaadgaar has been operational for over a decade",
        "Diverse snack delicacies from various Indian states"
      ],
      tagline: "Nurturing local taste and culinary legacies.",
      badge: "Hospitality Sector",
      image: "/images/building/ventures/food.jpg",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "48px", height: "48px" }}>
          <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
          <path d="M7 2v20" />
          <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
          <path d="M12 18a6 6 0 0 1-6-6v-1" />
        </svg>
      )
    }
  ];

  const currentVenture = ventures.find((v) => v.id === activeTab);

  return (
    <div id="other-ventures" style={{ backgroundColor: "#f8f9fb", padding: "60px 24px" }}>
      <div 
        style={{
          textAlign: "center",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          marginBottom: "35px"
        }}
      >
        {/* Gold Subtitle Accent */}
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
          DIVERSIFIED PORTFOLIO
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
            lineHeight: "1.25"
          }}
        >
          OTHER <span style={{ color: "#d4af37" }}>VENTURES</span>
        </h2>

        {/* Accent Divider Line */}
        <div
          style={{
            width: "50px",
            height: "2px",
            backgroundColor: "#d4af37",
            marginTop: "2px",
          }}
        />
      </div>

      <div style={{ maxWidth: "950px", margin: "0 auto" }}>
        {/* Premium Tab Buttons */}
        <div className="ventures-tab-bar">
          {ventures.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`ventures-tab-btn ${isActive ? "active" : ""}`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Venture Details Card Wrapper */}
        <div className="venture-card-container">
          {/* Left Column: Visual Image Box */}
          <div className="venture-badge-column">
            <div 
              className="venture-card-image-bg"
              style={{
                backgroundImage: `url('${currentVenture.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
                transition: "transform 0.6s ease"
              }}
            />
          </div>

          {/* Right Column: Detailed Info Block */}
          <div className="venture-info-column">
            <div>
              {/* Badge & Icon Header Row */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px", flexWrap: "wrap", gap: "10px" }}>
                <span className="venture-gold-badge">
                  {currentVenture.badge}
                </span>
                <div className="venture-icon-circle">
                  {currentVenture.icon}
                </div>
              </div>

              <div className="venture-small-subtitle">{currentVenture.subtitle}</div>
              <h3 className="venture-card-title">{currentVenture.title}</h3>
              <div className="venture-card-divider" />
            </div>

            {/* Premium Tagline Quote Block */}
            <div className="venture-tagline-quote">
              "{currentVenture.tagline}"
            </div>

            <p className="venture-card-desc">
              {currentVenture.description}
            </p>

            <div style={{ marginTop: "10px" }}>
              <div className="venture-highlights-title">Key Highlights</div>
              <ul className="venture-highlights-list">
                {currentVenture.highlights.map((h, i) => (
                  <li key={i} className="venture-highlight-item">
                    <span className="venture-checkmark">✦</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .ventures-tab-bar {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-bottom: 30px;
          flex-wrap: wrap;
        }

        .ventures-tab-btn {
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 10px 24px;
          border-radius: 4px;
          background-color: #ffffff;
          color: #4a5568;
          border: 1px solid #e2e8f0;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 2px 4px rgba(0,0,0,0.02);
        }

        .ventures-tab-btn:hover {
          background-color: #050c23;
          color: #d4af37;
          border-color: #050c23;
        }

        .ventures-tab-btn.active {
          background-color: #050c23;
          color: #d4af37;
          border-color: #050c23;
          box-shadow: 0 4px 10px rgba(5, 12, 35, 0.15);
        }

        .venture-card-container {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          background-color: #ffffff;
          border-radius: 6px;
          border: 1px solid rgba(212, 175, 55, 0.15);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
          overflow: hidden;
          min-height: 380px;
          animation: fadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .venture-badge-column {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .venture-badge-column:hover .venture-card-image-bg {
          transform: scale(1.05);
        }

        .venture-icon-circle {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: #f8f9fb;
          border: 1px solid rgba(212, 175, 55, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 6px rgba(0,0,0,0.02);
          transition: all 0.3s ease;
        }

        .venture-card-container:hover .venture-icon-circle {
          border-color: #d4af37;
          background-color: #050c23;
        }

        .venture-card-container:hover .venture-icon-circle svg {
          stroke: #d4af37;
        }

        .venture-tagline-quote {
          font-family: 'Cinzel', serif;
          font-size: 13.5px;
          font-style: italic;
          color: #4a5568;
          line-height: 1.6;
          border-left: 2px solid #d4af37;
          padding-left: 15px;
          margin: 8px 0 12px;
        }

        .venture-gold-badge {
          font-family: 'Montserrat', sans-serif;
          font-size: 9px;
          font-weight: 700;
          color: #050c23;
          background-color: #d4af37;
          padding: 5px 12px;
          border-radius: 30px;
          letter-spacing: 1px;
          text-transform: uppercase;
          align-self: flex-start;
        }

        .venture-info-column {
          padding: 45px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 20px;
        }

        .venture-small-subtitle {
          font-family: 'Montserrat', sans-serif;
          font-size: 10.5px;
          font-weight: 700;
          color: #d4af37;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 4px;
        }

        .venture-card-title {
          font-family: 'Cinzel', serif;
          font-size: 23px;
          font-weight: 400;
          color: #0a1628;
          margin: 0;
          letter-spacing: 0.5px;
        }

        .venture-card-divider {
          width: 40px;
          height: 2px;
          background-color: #d4af37;
          margin-top: 10px;
        }

        .venture-card-desc {
          font-family: 'Montserrat', sans-serif;
          font-size: 13.5px;
          line-height: 1.65;
          color: #4a5568;
          font-weight: 300;
          margin: 0;
        }

        .venture-highlights-title {
          font-family: 'Cinzel', serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1px;
          color: #0a1628;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .venture-highlights-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .venture-highlight-item {
          font-family: 'Montserrat', sans-serif;
          font-size: 12.5px;
          color: #555555;
          font-weight: 400;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .venture-checkmark {
          color: #d4af37;
          font-size: 11px;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .venture-card-container {
            grid-template-columns: 1fr !important;
            min-height: auto;
          }
          
          .venture-badge-column {
            min-height: 260px !important;
            height: 260px !important;
            padding: 0 !important;
          }
          
          .venture-info-column {
            padding: 30px 20px !important;
            gap: 15px !important;
          }
          
          .venture-card-title {
            font-size: 19px !important;
          }

          .venture-highlights-list {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }

          .ventures-tab-btn {
            padding: 8px 16px !important;
            font-size: 10px !important;
            letter-spacing: 1px !important;
          }
        }
      `}</style>
    </div>
  );
}
