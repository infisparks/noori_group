"use client";
import React, { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      title: "Real Estate Developer In Dubai",
      content: "Are you looking for luxury living with a leading real estate developer in Dubai? In the ever-evolving landscape of Dubai’s real estate market, choosing the right partner for your investment is paramount. As one of the top three real estate developers in Dubai, Danube Properties stands as a beacon of trust, quality, and innovation. Founded in 1993 by Mr. Rizwan Sajan, Danube Properties has grown into a formidable force in the UAE’s real estate sector, offering a diverse range of properties for sale in Dubai that cater to the needs of its global clientele. Specializing in residential homes, commercial spaces, mixed-use developments, and premium luxury estates, Danube Properties caters to a broad spectrum of needs and preferences."
    },
    {
      title: "Why Choose Danube Properties?",
      content: "Selecting a real estate developer in Dubai is more than just a financial decision; it’s about finding a company that aligns with your vision and goals. Danube Properties has carved out a reputation for delivering high-quality developments on time, ensuring that your investment is secure and fruitful. With over three decades of experience in the industry, the company has consistently met the expectations of its customers through exceptional quality, and prime locations.\n\nDanube Properties is particularly known for pioneering the 1% monthly payment plan with 0% interest and up to 80 months payment plan, making premium property ownership accessible to a wider audience. This approach, combined with over 40 world class amenities offered in their developments, positions Danube as a leader in providing not just properties, but a comprehensive lifestyle. Additionally, a wide range of options cater to different preferences and budgets, ensuring a high return on investment. Danube Properties offers a new standard of living with spacious, fully furnished homes designed for modern lifestyles. These modern homes are equipped with exquisite materials and interiors, providing both luxury and comfort."
    },
    {
      title: "A Trusted Name in Real Estate",
      content: "Danube Properties stands out not only for its exceptional developments but also for its customer-centric approach. The company’s philosophy is centered around delivering value through quality and building long-lasting relationships with its clients."
    },
    {
      title: "Investment Opportunities in Dubai",
      content: "Dubai’s real estate market is booming, with properties for sale in Dubai attracting investors from around the world. The city’s dynamic economy, and attractive lifestyle make it a prime destination for real estate investment. Whether you’re looking for a residential home, commercial space, or luxury estate. Don’t wait to invest with Danube Properties today."
    },
    {
      title: "Danube Properties Impressive Portfolio",
      content: "Danube Properties has launched 32 projects, successfully delivering 16, with another 16 currently in various stages of construction. Each project showcases exceptional construction quality, state-of-the-art equipment, and top-tier home interior finishes. These projects include Pearlz, Jewelz, Wavez, Eleganz, Olivz, Elz, Lawnz, Bayz, Miraclz, Resortz, Glamz, Starz, Glitz 3, Glitz 2, Glitz 1, and Dreamz.\n\nDanube’s developments are designed to offer a range from affordable to premium luxury, attracting significant interest from a diverse clientele. Since its inception, Danube Properties’ ventures have achieved remarkable success. The combination of attractive payment plans, strategic locations, and an array of modern amenities has made their properties highly desirable. Currently, Danube Properties holds an impressive book value with construction spanning over 25.5 million square feet. Their projects continue to set new standards in the real estate market, delivering exceptional value and quality to their customers."
    }
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div 
      className="elementor-element elementor-element-c03da9d e-flex e-con-boxed e-con e-parent" 
      data-id="c03da9d" 
      data-element_type="container"
      data-settings='{"enabled_visibility":"yes","dce_visibility_selected":"yes"}'
    >
      <div className="e-con-inner">
        <div 
          className="elementor-element elementor-element-29402d4 faq-section elementor-widget elementor-widget-toggle" 
          data-id="29402d4" 
          data-element_type="widget" 
          data-widget_type="toggle.default"
        >
          <div className="elementor-widget-container">
            <div className="elementor-toggle" role="presentation">
              
              {faqItems.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={index} className="elementor-toggle-item">
                    <div 
                      id={`elementor-tab-title-${4321 + index}`} 
                      className={`elementor-tab-title ${isOpen ? "elementor-active" : ""}`} 
                      data-tab={index + 1} 
                      role="button" 
                      aria-controls={`elementor-tab-content-${4321 + index}`} 
                      aria-expanded={isOpen}
                      onClick={() => handleToggle(index)}
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          handleToggle(index);
                        }
                      }}
                    >
                      <span className="elementor-toggle-icon elementor-toggle-icon-right" aria-hidden="true">
                        {isOpen ? (
                          <span className="elementor-toggle-icon-opened">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d="M1.48101 0.438916L1.48101 3.00034L11.5909 3.00034L0.575909 14.0154L2.3861 15.8256L13.4011 4.81053L13.4011 14.9205L15.9625 14.9205V0.438916H1.48101Z" fill="black" />
                            </svg>
                          </span>
                        ) : (
                          <span className="elementor-toggle-icon-closed">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                              <path d="M15.7222 1.74077L13.1608 1.74077L13.1608 11.8507L2.14577 0.835674L0.335577 2.64587L11.3506 13.6609L1.24067 13.6609L1.24067 16.2223L15.7222 16.2223L15.7222 1.74077Z" fill="#BDA588" />
                            </svg>
                          </span>
                        )}
                      </span>
                      <a className="elementor-toggle-title" tabIndex={-1}>{item.title}</a>
                    </div>

                    <div 
                      id={`elementor-tab-content-${4321 + index}`} 
                      className="elementor-tab-content elementor-clearfix" 
                      data-tab={index + 1} 
                      role="region" 
                      aria-labelledby={`elementor-tab-title-${4321 + index}`}
                      style={{ display: isOpen ? "block" : "none" }}
                    >
                      {item.content.split("\n\n").map((para, pIdx) => (
                        <p key={pIdx}>{para}</p>
                      ))}
                    </div>
                  </div>
                );
              })}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
