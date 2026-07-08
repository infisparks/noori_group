"use client";
import React from "react";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section 
      data-dce-background-color="#F7F8FA" 
      className="elementor-section elementor-top-section elementor-element elementor-element-0fec14b elementor-section-stretched elementor-section-content-middle contact-us-form elementor-section-boxed elementor-section-height-default elementor-section-height-default" 
      data-id="0fec14b" 
      data-element_type="section"
      data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
    >
      <div className="elementor-container elementor-column-gap-no">
        
        {/* Form Column */}
        <div 
          className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-b0a3255" 
          data-id="b0a3255" 
          data-element_type="column" 
          id="get-in-touch-form" 
          data-settings='{"background_background":"classic"}'
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            
            <div 
              className="elementor-element elementor-element-cc4ad0e elementor-widget elementor-widget-heading" 
              data-id="cc4ad0e" 
              data-element_type="widget" 
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-heading-wrapper">
                  <div className="elementor-heading-wrapper-inner">
                    <h4 className="elementor-heading-title elementor-size-default">Get in Touch</h4>
                  </div>
                </div>
              </div>
            </div>

            <div 
              className="elementor-element elementor-element-156e639 elementor-widget elementor-widget-shortcode" 
              data-id="156e639" 
              data-element_type="widget" 
              data-widget_type="shortcode.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-shortcode">
                  <ContactForm />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Side Image Column (Desktop Only) */}
        <div 
          className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-d0a16a9 elementor-hidden-tablet elementor-hidden-mobile" 
          data-id="d0a16a9" 
          data-element_type="column" 
          data-settings='{"background_background":"classic"}'
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div 
              className="elementor-element elementor-element-ee4e5ad dce_masking-none elementor-widget elementor-widget-image" 
              data-id="ee4e5ad" 
              data-element_type="widget" 
              data-widget_type="image.default"
            >
              <div className="elementor-widget-container">
                <img 
                  loading="lazy" 
                  decoding="async" 
                  width="1284" 
                  height="1852" 
                  src="/images/danube-buy-property-dubai.jpg" 
                  className="attachment-full size-full wp-image-151040" 
                  alt="Danube - Buy Property in Dubai" 
                  srcSet="/images/danube-buy-property-dubai.jpg 1284w, /images/danube-buy-property-dubai-208x300.jpg 208w, /images/danube-buy-property-dubai-710x1024.jpg 710w, /images/danube-buy-property-dubai-768x1108.jpg 768w, /images/danube-buy-property-dubai-1065x1536.jpg 1065w, /images/danube-buy-property-dubai-700x1010.jpg 700w" 
                  sizes="(max-width: 1284px) 100vw, 1284px" 
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
