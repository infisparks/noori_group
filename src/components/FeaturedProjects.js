"use client";
import React, { useState, useEffect } from "react";

export default function FeaturedProjects({ onRegisterClick }) {
  const [activeIdx, setActiveIdx] = useState(null);
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [isModalMobile, setIsModalMobile] = useState(false);
  const [isDescExpanded, setIsDescExpanded] = useState(false);

  const projects = [
    {
      title: "Noori Heights Bellmonte",
      subtitle: "Tallest Tower in Mumbra (24 Stories)",
      description:
        "Standing tall as the tallest tower in Mumbra at 24 stories, redefines luxury living. This architectural marvel offers a range of opulent amenities, including a spacious underground parking facility accommodating up to 60 vehicles, ensuring convenience for residents and guests. The crowning jewel of Bellmonte lies in its breathtaking vistas, offering residents spectacular panoramic views of the majestic Mumbra Mountains and a captivating cityscape. This harmonious blend of luxury, convenience, and aweinspiring natural beauty makes Bellmonte an iconic address, setting a new standard for upscale living in the heart of Mumbra.",
      imageDesktop: "/images/building/PC VERSION/NOORIGEIGHT.jpg",
      imageMobile: "/images/building/mobile version/nooriheight.jpg",
    },
    {
      title: "Bellavista",
      subtitle: "Infrastructure Excellence opposite Bluebells",
      description:
        "A charming project comprising three wings, each soaring seven stories high, stands proudly opposite Bluebells. Its strategic location offers convenient access to a service road, ensuring hassle-free commuting. The development boasts spectacular infrastructure and provides residents with mesmerizing vistas of the iconic Mumbra Mountains. Nestled in a prime spot, Bellavista offers swift road connectivity to major cities like Navi Mumbai, Mumbai, and Thane, making it an ideal choice for those seeking both modern comforts and easy access to urban hubs. Bellavista promises a delightful living experience in the heart of convenience and natural beauty.",
      imageDesktop: "/images/building/PC VERSION/BELLAVISTA.jpg",
      imageMobile: "/images/building/mobile version/bellavista.jpg",
    },
    {
      title: "Bluebells",
      subtitle: "Security & Health Care at Mumbra Bypass",
      description:
        "Strategically nestled along Mumbra Bypass Road, Bluebells comprises four 7-story wings, seamlessly merging modern infrastructure and top-tier security. With each wing exuding luxury and functionality, residents enjoy a premium living experience. A distinctive feature is the state-of-the-art 60-bed hospital spanning the entire first floor, thoughtfully built and managed by our esteemed builder. This healthcare facility ensures quick and easy access to medical services for our residents, offering peace of mind and convenience. FAM’s commitment to creating a safe, comfortable, and convenient living environment reflects our dedication to enhancing the quality of life for our valued residents.",
      imageDesktop: "/images/building/PC VERSION/BLUEBELLS.jpg",
      imageMobile: "/images/building/mobile version/bluebells.jpg",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const wrappers = document.querySelectorAll(".noori-project-wrapper");
      let currentActive = null;
      let minDistance = Infinity;
      const viewportCenter = window.innerHeight / 2;

      wrappers.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const distance = Math.abs(elementCenter - viewportCenter);

        if (distance < minDistance && distance < window.innerHeight * 0.4) {
          minDistance = distance;
          currentActive = index;
        }
      });

      if (currentActive !== null) {
        setActiveIdx(currentActive % projects.length);
      } else {
        setActiveIdx(null);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Monitor viewport size specifically for popup modal image rendering
  useEffect(() => {
    if (selectedIdx === null) return;
    setIsDescExpanded(false); // Reset expanded text state when opening/changing project popup
    const handleModalResize = () => {
      setIsModalMobile(window.innerWidth < 1025);
    };
    handleModalResize();
    window.addEventListener("resize", handleModalResize, { passive: true });
    return () => window.removeEventListener("resize", handleModalResize);
  }, [selectedIdx]);

  return (
    <>
      <div 
        id="featured-projects"
        style={{
          backgroundColor: "#ffffff",
          padding: "35px 24px 15px",
          textAlign: "center",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px"
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
          Exclusive Portfolio
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
          OUR <span style={{ color: "#d4af37" }}>PROJECTS</span>
        </h2>

        {/* Accent Divider Line */}
        <div
          style={{
            width: "50px",
            height: "2px",
            backgroundColor: "#d4af37",
            marginTop: "2px"
          }}
        />
      </div>

      <section 
        className="elementor-section elementor-top-section elementor-element elementor-element-fb37d40 elementor-section-stretched elementor-section-content-middle elementor-section-full_width elementor-section-height-default elementor-section-height-default" 
        data-id="fb37d40" 
        data-element_type="section" 
        data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
      >
        <div className="elementor-container elementor-column-gap-no">
          <div 
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-311fad4" 
            data-id="311fad4" 
            data-element_type="column" 
            data-settings='{"background_background":"classic"}'
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              
              {/* Desktop Showcase (visible on width >= 1025px) */}
              <div 
                className="elementor-element elementor-element-73b2217 elementor-hidden-mobile elementor-hidden-tablet elementor-widget elementor-widget-shortcode noori-projects-desktop" 
                data-id="73b2217" 
                data-element_type="widget" 
                data-widget_type="shortcode.default"
              >
                <div className="elementor-widget-container">
                  <div className="home-featured-section">
                    {projects.map((proj, idx) => {
                      const isActive = activeIdx === idx;
                      return (
                        <div 
                          key={idx}
                          className="noori-project-wrapper"
                          style={{ position: "relative", overflow: "hidden" }}
                        >
                          <div 
                            className="featured-background-desktop pageBlock" 
                            style={{ 
                              backgroundImage: `url('${proj.imageDesktop}')`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                              backgroundRepeat: "no-repeat"
                            }} 
                          />
                          {/* Centered Overlay (No filter background, button at bottom center) */}
                          <div 
                            className="project-hover-overlay"
                            style={{
                              opacity: isActive ? 1 : 0,
                              pointerEvents: isActive ? "auto" : "none"
                            }}
                          >
                            <button 
                              className="project-hover-btn" 
                              onClick={() => setSelectedIdx(idx)}
                            >
                              View Details
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="elementor-shortcode"></div>
                </div>
              </div>

              {/* Mobile Showcase (visible on width <= 1024px including tablets) */}
              <div 
                className="elementor-element elementor-element-cbcfa8e elementor-hidden-desktop elementor-widget elementor-widget-shortcode noori-projects-mobile" 
                data-id="cbcfa8e" 
                data-element_type="widget" 
                data-widget_type="shortcode.default"
              >
                <div className="elementor-widget-container">
                  <div className="home-featured-section featured-section-mobile">
                    {projects.map((proj, idx) => {
                      const isActive = activeIdx === idx;
                      return (
                        <div 
                          key={idx}
                          className="noori-project-wrapper"
                          style={{ position: "relative", overflow: "hidden" }}
                        >
                          <div 
                            className="featured-background-mobile pageBlock" 
                            style={{ 
                              backgroundImage: `url('${proj.imageMobile}')`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                              backgroundRepeat: "no-repeat"
                            }} 
                          />
                          {/* Centered Overlay (No filter background, button at bottom center) */}
                          <div 
                            className="project-hover-overlay"
                            style={{
                              opacity: isActive ? 1 : 0,
                              pointerEvents: isActive ? "auto" : "none"
                            }}
                          >
                            <button 
                              className="project-hover-btn" 
                              onClick={() => setSelectedIdx(idx)}
                            >
                              View Details
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="elementor-shortcode"></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECT DETAILS MODAL ── */}
      {selectedIdx !== null && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(5, 12, 35, 0.7)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
          onClick={() => setSelectedIdx(null)}
        >
          {/* Modal Container */}
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "850px",
              maxHeight: "90vh",
              backgroundColor: "#ffffff",
              borderRadius: "6px",
              border: "1px solid rgba(212, 175, 55, 0.2)",
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
              overflow: "hidden",
              animation: "fadeInUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              display: "flex",
              flexDirection: "column"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedIdx(null)}
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                backgroundColor: "transparent",
                border: "none",
                color: "#0a1628",
                fontSize: "20px",
                fontWeight: "300",
                cursor: "pointer",
                zIndex: 10,
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(5, 12, 35, 0.05)";
                e.currentTarget.style.color = "#d4af37";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#0a1628";
              }}
            >
              ✕
            </button>

            {/* Modal Body Grid */}
            <div className="modal-grid">
              {/* Left Column: Image (Desktop popup shows mobile portrait, Mobile popup shows desktop landscape) */}
              <div className="modal-image-wrapper">
                <img
                  src={
                    isModalMobile
                      ? projects[selectedIdx].imageDesktop
                      : projects[selectedIdx].imageMobile
                  }
                  alt={projects[selectedIdx].title}
                  className="modal-project-img"
                />
              </div>

              {/* Right Column: Information */}
              <div className="modal-info-block">
                <div>
                  <div
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "10px",
                      fontWeight: "700",
                      color: "#d4af37",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      marginBottom: "4px",
                    }}
                  >
                    Project Showcase
                  </div>
                  <h2
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "24px",
                      fontWeight: "500",
                      color: "#0a1628",
                      lineHeight: "1.3",
                      margin: 0,
                    }}
                  >
                    {projects[selectedIdx].title}
                  </h2>
                  <div
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "12px",
                      color: "#718096",
                      marginTop: "4px",
                    }}
                  >
                    {projects[selectedIdx].subtitle}
                  </div>
                  <div
                    style={{
                      width: "40px",
                      height: "2px",
                      backgroundColor: "#d4af37",
                      marginTop: "12px",
                    }}
                  />
                </div>

                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "13.5px",
                    lineHeight: "1.65",
                    color: "#4a5568",
                    fontWeight: "300",
                    margin: 0,
                    display: isDescExpanded ? "block" : "-webkit-box",
                    WebkitLineClamp: isDescExpanded ? "none" : 5,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {projects[selectedIdx].description}
                </p>

                {/* Read More button inside Modal */}
                <button
                  onClick={() => setIsDescExpanded(!isDescExpanded)}
                  style={{
                    alignSelf: "flex-start",
                    backgroundColor: "transparent",
                    border: "none",
                    color: "#d4af37",
                    fontFamily: "'Cinzel', serif",
                    fontSize: "11px",
                    fontWeight: "600",
                    letterSpacing: "1px",
                    cursor: "pointer",
                    padding: "4px 0",
                    marginTop: "-10px",
                  }}
                >
                  {isDescExpanded ? "READ LESS —" : "READ MORE +"}
                </button>

                <button
                  onClick={() => {
                    setSelectedIdx(null);
                    onRegisterClick?.();
                  }}
                  style={{
                    alignSelf: "flex-start",
                    marginTop: "8px",
                    padding: "12px 28px",
                    backgroundColor: "#d4af37",
                    color: "#050c23",
                    border: "none",
                    borderRadius: "4px",
                    fontFamily: "'Cinzel', serif",
                    fontWeight: "600",
                    fontSize: "12px",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 15px rgba(212, 175, 55, 0.2)",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#0a1628";
                    e.currentTarget.style.color = "#ffffff";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "#d4af37";
                    e.currentTarget.style.color = "#050c23";
                  }}
                >
                  Inquire Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Responsive stylesheet to guarantee no cross-loading of mobile/desktop renders */}
      <style>{`
        .noori-project-wrapper {
          position: relative;
        }
        
        /* Centered Hover Overlay CSS (No background tint, button at bottom center) */
        .project-hover-overlay {
          position: absolute;
          inset: 0;
          background-color: transparent;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          padding-bottom: 50px;
          transition: opacity 0.4s ease-in-out;
          z-index: 10;
        }
        
        .project-hover-btn {
          background-color: #050c23;
          color: #d4af37;
          border: 1px solid #d4af37;
          border-radius: 4px;
          padding: 10px 24px;
          font-family: 'Cinzel', serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0,0,0,0.4);
        }
        .project-hover-btn:hover {
          background-color: #d4af37;
          color: #050c23;
          box-shadow: 0 4px 15px rgba(212, 175, 55, 0.4);
        }

        /* Modal Grid Layout */
        .modal-grid {
          display: grid;
          grid-template-columns: 1.1fr 1.3fr;
          align-items: stretch;
          height: 100%;
          max-height: 90vh;
        }

        /* Modal Image wrapper & image styles */
        .modal-image-wrapper {
          position: relative;
          width: 100%;
          background-color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .modal-project-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }

        /* Modal Information block */
        .modal-info-block {
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 18px;
          overflow-y: auto;
          max-height: 80vh;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (min-width: 1025px) {
          .noori-projects-desktop { display: block !important; }
          .noori-projects-mobile  { display: none !important; }
          
          /* Hover override for desktop */
          .noori-project-wrapper:hover .project-hover-overlay {
            opacity: 1 !important;
            pointer-events: auto !important;
          }
        }
        
        /* Mobile / Tablet layouts styling */
        @media (max-width: 1024px) {
          .noori-projects-desktop { display: none !important; }
          .noori-projects-mobile  { display: block !important; }
          
          .project-hover-overlay {
            padding-bottom: 40px !important;
          }
          .project-hover-btn {
            padding: 8px 18px !important;
            font-size: 10px !important;
          }
          
          /* Modal Responsive Stack */
          .modal-grid {
            grid-template-columns: 1fr !important;
            max-height: 90vh !important;
          }
          .modal-image-wrapper {
            height: auto !important;
            min-height: auto !important;
          }
          .modal-project-img {
            height: auto !important;
          }
          .modal-info-block {
            padding: 24px !important;
            max-height: calc(90vh - 220px) !important;
          }
        }
      `}</style>
    </>
  );
}
