"use client";
import React from "react";

export default function Footer({ onRegisterClick }) {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-container">
          
          {/* Brand Info Column */}
          <div className="footer-col brand-col">
            <h3 className="footer-logo">NOORI GROUP</h3>
            <p className="brand-tagline">
              Crafting lifestyles, building future landmarks, and making homeownership an achievable dream since 1987.
            </p>
            <div className="social-links">
              {/* Facebook */}
              <a href="https://www.facebook.com/watch/?v=1739199419577145" className="social-icon" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/noori-group-of-companies" className="social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="https://www.youtube.com/watch?v=gUrHeatNW0c" className="social-icon" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.104 1.975l-.01.104-.022.26-.008.104c-.05.517-.12 1.02-.221 1.402a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.58v-.09c.001-.194.01-1.108.104-1.975l.01-.104.022-.26.008-.104c.05-.517.12-1.02.221-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A30.658 30.658 0 0 1 7.958 2v-.001zm-.214 7.64L12 6.786 8.051 4.05v5.589z"/>
                </svg>
              </a>
              {/* Justdial */}
              <a href="https://www.justdial.com/Thane/Noori-Group-Of-Companies-Near-Millenium-Hospital-Kausa/022PXX22-XX22-150526123730-H5X9_BZDET" className="social-icon" aria-label="Justdial" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: "10px", fontWeight: "700", fontFamily: "sans-serif" }}>JD</span>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col links-col">
            <h4 className="col-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li><a href="/">Home</a></li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="footer-col contact-col">
            <h4 className="col-title">Get In Touch</h4>
            <p className="contact-item">
              <span className="contact-label">Email:</span> info@noorigroupofcompanies.com
            </p>
            <p className="contact-item">
              <span className="contact-label">Address:</span> 306/307, Madhava, BKC, Bandra East, Mumbai - 400051
            </p>
          </div>

          {/* Newsletter / Action Column */}
          <div className="footer-col action-col">
            <h4 className="col-title">Newsletter</h4>
            <p className="action-text">Subscribe to receive updates on our latest property launches.</p>
            <button className="footer-cta-btn" onClick={onRegisterClick}>
              REGISTER INTEREST
            </button>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="copyright-text">
            Copyright 2025 <a href="https://www.infispark.in/" target="_blank" rel="noopener noreferrer">Infispark</a>. All Rights Reserved.
          </p>
          <p className="developer-text">
            Building Dreams Since 1987
          </p>
        </div>
      </div>

      <style jsx>{`
        .site-footer {
          background-color: #050c23;
          color: #cbd5e1;
          font-family: 'Montserrat', sans-serif;
          border-top: 2px solid #d4af37;
        }

        .footer-top {
          padding: 60px 20px;
        }

        .footer-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 48px;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr 1fr 1fr;
          gap: 40px;
        }

        .footer-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .footer-logo {
          font-family: 'Cinzel', serif;
          font-size: 20px;
          font-weight: 600;
          color: #ffffff;
          letter-spacing: 2px;
          margin: 0;
        }

        .brand-tagline {
          font-size: 13.5px;
          font-weight: 300;
          line-height: 1.6;
          color: #94a3b8;
        }

        .social-links {
          display: flex;
          gap: 12px;
        }

        .social-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid rgba(212, 175, 55, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #d4af37;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          background-color: #d4af37;
          color: #050c23;
          border-color: #d4af37;
        }

        .col-title {
          font-family: 'Cinzel', serif;
          font-size: 14px;
          font-weight: 600;
          color: #ffffff;
          letter-spacing: 1px;
          margin: 0;
          position: relative;
          padding-bottom: 8px;
        }

        .col-title::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 30px;
          height: 1px;
          background-color: #d4af37;
        }

        .footer-links-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-links-list a {
          font-size: 13.5px;
          color: #94a3b8;
          text-decoration: none;
          font-weight: 300;
          transition: color 0.2s ease;
        }

        .footer-links-list a:hover {
          color: #d4af37;
        }

        .contact-item {
          font-size: 13.5px;
          font-weight: 300;
          line-height: 1.6;
          color: #94a3b8;
        }

        .contact-label {
          color: #ffffff;
          font-weight: 500;
        }

        .action-text {
          font-size: 13px;
          font-weight: 300;
          line-height: 1.6;
          color: #94a3b8;
        }

        .footer-cta-btn {
          align-self: flex-start;
          background-color: transparent;
          border: 1px solid #d4af37;
          color: #d4af37;
          font-family: 'Cinzel', serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1.5px;
          padding: 10px 20px;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .footer-cta-btn:hover {
          background-color: #d4af37;
          color: #050c23;
        }

        .footer-bottom {
          background-color: #020817;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding: 24px 20px;
        }

        .footer-bottom-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 48px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }

        .copyright-text {
          font-size: 12.5px;
          color: #64748b;
          font-weight: 300;
          margin: 0;
        }

        .copyright-text a {
          color: #d4af37;
          text-decoration: none;
          font-weight: 400;
          transition: color 0.2s ease;
        }

        .copyright-text a:hover {
          color: #ffffff;
        }

        .developer-text {
          font-family: 'Cinzel', serif;
          font-size: 11px;
          color: #d4af37;
          margin: 0;
          letter-spacing: 1px;
        }

        @media (max-width: 991px) {
          .footer-container {
            grid-template-columns: 1fr 1fr;
            padding: 0 24px;
            gap: 30px;
          }
          .footer-bottom-container {
            padding: 0 24px;
            flex-direction: column;
            text-align: center;
          }
        }

        @media (max-width: 576px) {
          .footer-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
}
