"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function RegisterPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Smooth scroll down to form container if they are already on this page
  const handleOpenModal = () => {
    const el = document.getElementById("register-form-container");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#fcfdfd" }}>
      {/* Premium Navigation Header */}
      <Header onRegisterClick={handleOpenModal} />

      {/* Main Registration Content Box */}
      <main style={{ flex: 1, paddingTop: "120px", paddingBottom: "80px" }}>
        <div
          className="register-page-container"
          style={{
            maxWidth: "1320px",
            margin: "0 auto",
            padding: "0 48px",
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            columnGap: "80px",
            alignItems: "center",
          }}
        >
          {/* Left Column: Premium Text & Contact Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
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
              Priority Registration
            </div>

            <h1
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "36px",
                fontWeight: "400",
                color: "#0a1628",
                lineHeight: "1.25",
                margin: 0,
              }}
            >
              Register Your Interest & <br />
              <span style={{ color: "#d4af37" }}>Secure Your Future Home</span>
            </h1>

            <div
              style={{
                width: "60px",
                height: "2px",
                backgroundColor: "#d4af37",
              }}
            />

            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "15px",
                color: "#4a5568",
                lineHeight: "1.7",
                fontWeight: "300",
                margin: 0,
              }}
            >
              Enter your details to receive priority booking updates, exclusive launch price structures, brochures, and layout maps for Noori Group's luxury developments.
            </p>

            {/* HQ Coordinates Card */}
            <div
              style={{
                borderLeft: "2px solid #d4af37",
                paddingLeft: "20px",
                marginTop: "10px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "15px",
                  fontWeight: "600",
                  color: "#0a1628",
                }}
              >
                Noori Group Corporate HQ
              </div>
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "13.5px",
                  color: "#6b7280",
                  lineHeight: "1.5",
                  fontWeight: "300",
                }}
              >
                306/307, Madhava, E Block, <br />
                BKC, Bandra East, Mumbai - 400051 <br />
                Email: info@noorigroupofcompanies.com
              </div>
            </div>
          </div>

          {/* Right Column: Premium Form Card */}
          <div
            id="register-form-container"
            style={{
              position: "relative",
              width: "100%",
            }}
          >
            {/* Gold Offset Border */}
            <div
              style={{
                position: "absolute",
                top: "12px",
                left: "-12px",
                right: "12px",
                bottom: "-12px",
                border: "1px solid #d4af37",
                borderRadius: "8px",
                zIndex: 1,
              }}
            />

            {/* Main Form Wrapper */}
            <div
              style={{
                position: "relative",
                zIndex: 2,
                backgroundColor: "#ffffff",
                borderRadius: "8px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                border: "1px solid #e2e8f0",
                padding: "36px",
              }}
            >
              <h2
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "20px",
                  fontWeight: "500",
                  color: "#0a1628",
                  marginBottom: "20px",
                  textAlign: "center",
                  letterSpacing: "1px",
                }}
              >
                Interest Registration
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer onRegisterClick={handleOpenModal} />

      {/* Mobile queries for grid columns */}
      <style>{`
        @media (max-width: 991px) {
          .register-page-container {
            grid-template-columns: 1fr !important;
            padding: 0 24px !important;
            row-gap: 40px !important;
          }
        }
      `}</style>
    </div>
  );
}
