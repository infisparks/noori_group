"use client";
import React, { useState, useEffect } from "react";

export default function OngoingProjects({ onRegisterClick }) {
  const [activeIdx, setActiveIdx] = useState(null);
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [isModalMobile, setIsModalMobile] = useState(false);
  const [isDescExpanded, setIsDescExpanded] = useState(false);

  const projects = [
    {
      title: "Noori Enclave (SRA Project)",
      subtitle: "SV Road, Bandra West (32 Stories)",
      description:
        "Noori Enclave, a magnificent 32-story tower in Bandra West, graces the prime location of SV Road. This impressive project offers residents breathtaking views of the Arabian Sea and the vibrant Mumbai cityscape. With a myriad of amenities, including a podium, clubhouse, and a dedicated library, Noori Enclave is designed to enrich the lives of its residents. Notably, it also serves as an SRA (Slum Rehabilitation Authority) project, demonstrating the builder’s commitment to community development. Additionally, the provision of a separate 18-story building for tenants underscores the builder’s dedication to creating an inclusive and thriving community within this iconic urban enclave.",
      imageDesktop: "/images/building/PC VERSION/noorienclave.jpg",
      imageMobile: "/images/building/mobile version/noorienclave.jpg",
    },
    {
      title: "Rehabilitation Building",
      subtitle: "SV Road SRA Tenant Wing (18 Stories)",
      description:
        "Notably, it also serves as an SRA (Slum Rehabilitation Authority) project, demonstrating the builder’s commitment to community development. Additionally, the provision of a separate 18-story building for tenants underscores the builder’s dedication to creating an inclusive and thriving community within this iconic urban enclave.",
      imageDesktop: "/images/building/PC VERSION/rehabilitation.jpg",
      imageMobile: "/images/building/mobile version/rehabilitation.jpg",
    },
    {
      title: "Noori Crest",
      subtitle: "Off Mumbra Bypass (7-Storey Residential & Commercial)",
      description:
        "Noori Crest project encompasses the development of a 7-storey residential cum commercial tower strategically situated off the bustling Mumbra bypass. Nestled within a serene and respectable neighborhood, the tower boasts a picturesque backdrop of majestic mountains and lush greenery, offering residents a tranquil and refreshing living environment. The location’s prime advantage lies in its proximity to esteemed educational institutions and top-notch medical facilities, ensuring a convenient and holistic lifestyle for families.",
      imageDesktop: "/images/building/PC VERSION/nooricrest.jpg",
      imageMobile: "/images/building/mobile version/nooricrest.jpg",
    },
    {
      title: "Noori Mirage (SRA Project)",
      subtitle: "Chirag Nagar, Thane City (36 Stories)",
      description:
        "Noori Mirage, a striking 36-story tower, graces the heart of Thane City in Chirag Nagar. This project represents the thoughtful redevelopment of the Aai Ambabai Society, offering residents and tenants a taste of luxurious urban living. With its soaring height, Noori Mirage not only provides stunning views of the city but also serves as a symbol of modern elegance in the neighborhood. The project embodies a harmonious blend of contemporary design and comfort, redefining the living standards for its fortunate occupants. Its prime location ensures easy access to all the conveniences and attractions that Thane City has to offer, making Noori Mirage an ideal choice for those seeking a premium urban lifestyle.",
      imageDesktop: "/images/building/PC VERSION/noorimirage.jpg",
      imageMobile: "/images/building/mobile version/noorimirage.jpg",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const wrappers = document.querySelectorAll(".noori-ongoing-project-wrapper");
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

  useEffect(() => {
    if (selectedIdx === null) return;
    setIsDescExpanded(false);
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
        id="ongoing-projects"
        style={{
          backgroundColor: "#ffffff",
          padding: "50px 24px 25px",
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
          ON-GOING <span style={{ color: "#d4af37" }}>PROJECTS</span>
        </h2>

        {/* Accent Divider Line */}
        <div
          style={{
            width: "50px",
            height: "2px",
            backgroundColor: "#d4af37",
            marginTop: "2px",
            marginBottom: "8px"
          }}
        />

        {/* Subtitle description paragraph */}
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "13.5px",
            lineHeight: "1.6",
            color: "#6b7280",
            fontWeight: "300",
            maxWidth: "600px",
            margin: "0 auto",
            padding: "0 10px"
          }}
        >
          Our Projects are designed with luxury in mind but without compromising on your budget. Every project is inspired by European structure giving you and your family a world class ambiance.
        </p>
      </div>

      <section 
        className="elementor-section elementor-top-section elementor-element elementor-section-stretched elementor-section-content-middle elementor-section-full_width elementor-section-height-default" 
      >
        <div className="elementor-container elementor-column-gap-no">
          <div className="elementor-column elementor-col-100 elementor-top-column">
            <div className="elementor-widget-wrap elementor-element-populated">
              
              {/* Desktop Showcase */}
              <div className="elementor-hidden-mobile elementor-hidden-tablet noori-ongoing-projects-desktop">
                <div className="home-featured-section">
                  {projects.map((proj, idx) => {
                    const isActive = activeIdx === idx;
                    return (
                      <div 
                        key={idx}
                        className="noori-ongoing-project-wrapper"
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
                        <div 
                          className="ongoing-project-hover-overlay"
                          style={{
                            opacity: isActive ? 1 : 0,
                            pointerEvents: isActive ? "auto" : "none"
                          }}
                        >
                          <button 
                            className="ongoing-project-hover-btn" 
                            onClick={() => setSelectedIdx(idx)}
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Mobile Showcase */}
              <div className="elementor-hidden-desktop noori-ongoing-projects-mobile">
                <div className="home-featured-section featured-section-mobile">
                  {projects.map((proj, idx) => {
                    const isActive = activeIdx === idx;
                    return (
                      <div 
                        key={idx}
                        className="noori-ongoing-project-wrapper"
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
                        <div 
                          className="ongoing-project-hover-overlay"
                          style={{
                            opacity: isActive ? 1 : 0,
                            pointerEvents: isActive ? "auto" : "none"
                          }}
                        >
                          <button 
                            className="ongoing-project-hover-btn" 
                            onClick={() => setSelectedIdx(idx)}
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    );
                  })}
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
            backgroundColor: "rgba(5, 12, 35, 0.8)",
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
              overflowY: "auto",
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
            <div className="ongoing-modal-grid">
              {/* Left Column: Image */}
              <div className="ongoing-modal-image-wrapper">
                <img
                  src={
                    isModalMobile
                      ? projects[selectedIdx].imageDesktop
                      : projects[selectedIdx].imageMobile
                  }
                  alt={projects[selectedIdx].title}
                  className="ongoing-modal-project-img"
                />
              </div>

              {/* Right Column: Information */}
              <div className="ongoing-modal-info-block">
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
                    On-Going Project
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

      {/* Stylesheet */}
      <style>{`
        .noori-ongoing-project-wrapper {
          position: relative;
        }
        
        .ongoing-project-hover-overlay {
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
        
        .ongoing-project-hover-btn {
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
        .ongoing-project-hover-btn:hover {
          background-color: #d4af37;
          color: #050c23;
          box-shadow: 0 4px 15px rgba(212, 175, 55, 0.4);
        }

        /* Modal Grid Layout */
        .ongoing-modal-grid {
          display: grid;
          grid-template-columns: 1.1fr 1.3fr;
          align-items: stretch;
          height: 100%;
        }

        /* Modal Image wrapper & image styles */
        .ongoing-modal-image-wrapper {
          position: relative;
          width: 100%;
          background-color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ongoing-modal-project-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }

        /* Modal Information block */
        .ongoing-modal-info-block {
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
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
          .noori-ongoing-projects-desktop { display: block !important; }
          .noori-ongoing-projects-mobile  { display: none !important; }
          
          .noori-ongoing-project-wrapper:hover .ongoing-project-hover-overlay {
            opacity: 1 !important;
            pointer-events: auto !important;
          }
        }
        
        /* Mobile / Tablet layouts styling */
        @media (max-width: 1024px) {
          .noori-ongoing-projects-desktop { display: none !important; }
          .noori-ongoing-projects-mobile  { display: block !important; }
          
          .ongoing-project-hover-overlay {
            padding-bottom: 40px !important;
          }
          .ongoing-project-hover-btn {
            padding: 8px 18px !important;
            font-size: 10px !important;
          }
          
          /* Modal Responsive Stack */
          .ongoing-modal-grid {
            display: block !important;
            height: auto !important;
            max-height: none !important;
          }
          .ongoing-modal-image-wrapper {
            height: auto !important;
            min-height: auto !important;
          }
          .ongoing-modal-project-img {
            height: auto !important;
            width: 100% !important;
          }
          .ongoing-modal-info-block {
            padding: 24px !important;
            max-height: none !important;
            overflow-y: visible !important;
          }
        }
      `}</style>
    </>
  );
}
