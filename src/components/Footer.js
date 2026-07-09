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
              <a href="#" className="social-icon" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="social-icon" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.999 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" className="social-icon" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.104 1.975l-.01.104-.022.26-.008.104c-.05.517-.12 1.02-.221 1.402a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.58v-.09c.001-.194.01-1.108.104-1.975l.01-.104.022-.26.008-.104c.05-.517.12-1.02.221-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A30.658 30.658 0 0 1 7.958 2v-.001zm-.214 7.64L12 6.786 8.051 4.05v5.589z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col links-col">
            <h4 className="col-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li><a href="#about">About Us</a></li>
              <li><a href="#projects">Featured Projects</a></li>
              <li><a href="#mission-vision">Our Mission</a></li>
              <li><a href="#ventures">Other Ventures</a></li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="footer-col contact-col">
            <h4 className="col-title">Get In Touch</h4>
            <p className="contact-item">
              <span className="contact-label">Email:</span> info@noorigroup.ae
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
