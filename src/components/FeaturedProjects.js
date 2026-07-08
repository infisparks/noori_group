import React from "react";

export default function FeaturedProjects() {
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
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <div 
                        className="featured-background-desktop pageBlock" 
                        style={{ 
                          backgroundImage: "url('/images/building/PC VERSION/NOORIGEIGHT.png')",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat"
                        }} 
                      />
                    </a>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <div 
                        className="featured-background-desktop pageBlock" 
                        style={{ 
                          backgroundImage: "url('/images/building/PC VERSION/BELLAVISTA.png')",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat"
                        }} 
                      />
                    </a>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <div 
                        className="featured-background-desktop pageBlock" 
                        style={{ 
                          backgroundImage: "url('/images/building/PC VERSION/BLUEBELLS.png')",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat"
                        }} 
                      />
                    </a>
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
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <div 
                        className="featured-background-mobile pageBlock" 
                        style={{ 
                          backgroundImage: "url('/images/building/mobile version/nooriheight.png')",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat"
                        }} 
                      />
                    </a>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <div 
                        className="featured-background-mobile pageBlock" 
                        style={{ 
                          backgroundImage: "url('/images/building/mobile version/bellavista.png')",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat"
                        }} 
                      />
                    </a>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <div 
                        className="featured-background-mobile pageBlock" 
                        style={{ 
                          backgroundImage: "url('/images/building/mobile version/bluebells.png')",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat"
                        }} 
                      />
                    </a>
                  </div>
                  <div className="elementor-shortcode"></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Guaranteed show/hide responsive rules - tablet and mobile load mobile version */}
      <style>{`
        @media (min-width: 1025px) {
          .noori-projects-desktop { display: block !important; }
          .noori-projects-mobile  { display: none !important; }
        }
        @media (max-width: 1024px) {
          .noori-projects-desktop { display: none !important; }
          .noori-projects-mobile  { display: block !important; }
        }
      `}</style>
    </>
  );
}
