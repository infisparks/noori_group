import React from "react";

export default function LatestLaunch() {
  return (
    <>
      <section 
        className="elementor-section elementor-top-section elementor-element elementor-element-f1bf395 elementor-section-stretched elementor-section-content-middle elementor-section-full_width elementor-section-height-default elementor-section-height-default" 
        data-id="f1bf395" 
        data-element_type="section" 
        data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
      >
        <div className="elementor-container elementor-column-gap-no">
          <div 
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-244583f" 
            data-id="244583f" 
            data-element_type="column" 
            data-settings='{"background_background":"classic"}'
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              
              {/* Desktop view gallery */}
              <div 
                className="elementor-element elementor-element-998b669 elementor-hidden-mobile elementor-hidden-tablet elementor-widget elementor-widget-shortcode" 
                data-id="998b669" 
                data-element_type="widget" 
                data-widget_type="shortcode.default"
              >
                <div className="elementor-widget-container">
                  <div className="palaraxx-effect-section home-first-gallery">
                    <div style={{ backgroundImage: "url(/images/Entrance-1.webp)" }} className="pageBlock">
                      <h5>Entrance</h5>
                    </div>
                  </div>
                  <div className="palaraxx-effect-section home-first-gallery">
                    <div style={{ backgroundImage: "url(/images/EXTERIOR-1.webp)" }} className="pageBlock">
                      <h5>Villa</h5>
                    </div>
                  </div>
                  <div className="palaraxx-effect-section home-first-gallery">
                    <div style={{ backgroundImage: "url(/images/balconey-1.webp)" }} className="pageBlock">
                      <h5>balcony </h5>
                    </div>
                  </div>
                  <div className="palaraxx-effect-section home-first-gallery">
                    <div style={{ backgroundImage: "url(/images/building-1.webp)" }} className="pageBlock">
                      <h5>Exterior</h5>
                    </div>
                  </div>
                  <div className="elementor-shortcode"></div>
                </div>
              </div>

              {/* Mobile view gallery */}
              <div 
                className="elementor-element elementor-element-8550365 elementor-hidden-desktop elementor-widget elementor-widget-shortcode" 
                data-id="8550365" 
                data-element_type="widget" 
                data-widget_type="shortcode.default"
              >
                <div className="elementor-widget-container">
                  <div className="palaraxx-effect-section home-first-gallery">
                    <div style={{ backgroundImage: "url(/images/Entrance-Mobile-1.webp)" }} className="pageBlock">
                      <h5>Entrance</h5>
                    </div>
                  </div>
                  <div className="palaraxx-effect-section home-first-gallery">
                    <div style={{ backgroundImage: "url(/images/Exterior_mobile-2.webp)" }} className="pageBlock">
                      <h5>Villa</h5>
                    </div>
                  </div>
                  <div className="palaraxx-effect-section home-first-gallery">
                    <div style={{ backgroundImage: "url(/images/balconey_mobile-1.webp)" }} className="pageBlock">
                      <h5>balcony </h5>
                    </div>
                  </div>
                  <div className="palaraxx-effect-section home-first-gallery">
                    <div style={{ backgroundImage: "url(/images/building_mobile-1.webp)" }} className="pageBlock">
                      <h5>Exterior</h5>
                    </div>
                  </div>
                  <div className="elementor-shortcode"></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
