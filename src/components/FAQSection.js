"use client";
import React, { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      title: "Real Estate Developer",
      content: "Are you looking for luxury living with a leading developer? Choosing the right partner for your investment is paramount. Noori Group of Companies stands as a beacon of trust, quality, and innovation. Founded in 1987, Noori Group of Companies has grown into a formidable force in the real estate sector, offering a diverse range of residential homes, commercial spaces, mixed-use developments, and premium luxury estates designed to enrich the lives of its residents."
    },
    {
      title: "Why Choose Noori Group of Companies?",
      content: "Selecting a real estate developer is more than just a financial decision; it’s about finding a company that aligns with your vision and goals. Noori Group of Companies has carved out a reputation for delivering high-quality developments on time, ensuring that your investment is secure and fruitful. With a legacy of excellence since 1987, the company has consistently met the expectations of its customers through exceptional construction quality, prime locations, and a customer-centric approach.\n\nNoori Group of Companies is particularly known for pioneering transparent payment plans and offering world-class amenities in our developments, positioning us as a leader in providing not just properties, but a comprehensive lifestyle. We offer a new standard of living with spacious, beautifully designed homes equipped with exquisite materials and interiors, providing both luxury and comfort."
    },
    {
      title: "A Trusted Name in Real Estate",
      content: "Noori Group of Companies stands out not only for its exceptional developments but also for its customer-centric approach. The company’s philosophy is centered around delivering value through quality, building long-lasting relationships with its clients, and a deep commitment to community development."
    },
    {
      title: "Investment Opportunities",
      content: "The real estate market is booming, attracting investors seeking premium living spaces and high capital appreciation. Whether you are looking for a residential home, commercial space, or a luxury estate, Noori Group of Companies offers strategic investment opportunities designed to deliver high returns. Don’t wait to invest with Noori Group of Companies today."
    },
    {
      title: "Noori Group of Companies Impressive Portfolio",
      content: "Noori Group of Companies has successfully developed and delivered landmark residential and commercial projects across prime locations. Each project showcases exceptional construction quality, state-of-the-art equipment, and top-tier home interior finishes. Our portfolio includes celebrated developments like Noori Crest, Noori Horizon, and dedicated community housing.\n\nOur ventures have achieved remarkable success by combining attractive payment plans, strategic locations, and a comprehensive suite of modern amenities, delivering exceptional value and quality to our customers."
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
