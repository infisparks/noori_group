"use client";
import React, { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "#featured-projects" },
  { label: "About", href: "#about" },
  { label: "Contact Us", href: "#contact" },
];

export default function Header({ onRegisterClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      // Check if we've reached the OUR PROJECTS section
      const projectsEl = document.getElementById("featured-projects");
      if (projectsEl) {
        const rect = projectsEl.getBoundingClientRect();
        // If the top of the projects section is at or above the viewport top
        if (rect.top <= 80) {
          setShowHeader(false);
        } else {
          setShowHeader(true);
        }
      } else {
        setShowHeader(true);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.getElementById(href.slice(1));
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  /* ── Styles ── */
  const headerBg = scrolled
    ? "rgba(5,12,35,0.97)"
    : "transparent";
  const headerBorder = scrolled ? "1px solid rgba(212,175,55,0.2)" : "none";
  const headerShadow = scrolled
    ? "0 4px 30px rgba(0,0,0,0.3)"
    : "none";

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: headerBg,
          borderBottom: headerBorder,
          boxShadow: headerShadow,
          transform: showHeader ? "translateY(0)" : "translateY(-100%)",
          opacity: showHeader ? 1 : 0,
          transition: "background 0.35s ease, box-shadow 0.35s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: "1320px",
            margin: "0 auto",
            padding: "0 32px",
            height: "76px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* ── Logo ── */}
          <a href="/" style={{ display: "block", flexShrink: 0 }}>
            <img
              src="/images/building/logo/logo.png"
              alt="Noori Group of Companies"
              style={{
                height: "48px",
                width: "auto",
                display: "block",
                filter: "brightness(1.05)",
              }}
            />
          </a>

          {/* ── Desktop Nav ── */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
            className="noori-desktop-nav"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                style={{
                  color: "#e2e8f0",
                  fontSize: "12.5px",
                  fontWeight: "500",
                  textDecoration: "none",
                  padding: "8px 16px",
                  borderRadius: "4px",
                  letterSpacing: "1.5px",
                  fontFamily: "'Cinzel', serif",
                  textTransform: "uppercase",
                  transition: "all 0.2s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = "#d4af37";
                  e.currentTarget.style.background = "rgba(212,175,55,0.08)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = "#e2e8f0";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {link.label}
              </a>
            ))}

            {/* CTA Button */}
            <button
              onClick={onRegisterClick}
              style={{
                marginLeft: "12px",
                padding: "10px 24px",
                backgroundColor: "transparent",
                color: "#d4af37",
                border: "1px solid #d4af37",
                borderRadius: "4px",
                fontWeight: "600",
                fontSize: "12px",
                cursor: "pointer",
                letterSpacing: "1.5px",
                fontFamily: "'Cinzel', serif",
                textTransform: "uppercase",
                transition: "all 0.3s ease",
                whiteSpace: "nowrap",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#d4af37";
                e.currentTarget.style.color = "#050c23";
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(212, 175, 55, 0.35)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#d4af37";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Get in Touch
            </button>
          </nav>

          {/* ── Mobile Hamburger ── */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="noori-hamburger"
            style={{
              display: "none",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              color: "#ffffff",
            }}
          >
            {mobileOpen ? (
              /* X icon */
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              /* Hamburger */
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>

        {/* ── Mobile Dropdown ── */}
        {mobileOpen && (
          <div
            style={{
              background: "rgba(5,12,35,0.97)",
              borderTop: "1px solid rgba(212,175,55,0.2)",
              backdropFilter: "blur(12px)",
              padding: "16px 24px 24px",
            }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                style={{
                  display: "block",
                  color: "#e2e8f0",
                  fontSize: "13px",
                  fontWeight: "500",
                  textDecoration: "none",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  letterSpacing: "1.5px",
                  fontFamily: "'Cinzel', serif",
                  textTransform: "uppercase",
                }}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => { setMobileOpen(false); onRegisterClick?.(); }}
              style={{
                marginTop: "16px",
                width: "100%",
                padding: "12px",
                backgroundColor: "transparent",
                color: "#d4af37",
                border: "1px solid #d4af37",
                borderRadius: "4px",
                fontWeight: "600",
                fontSize: "13px",
                cursor: "pointer",
                letterSpacing: "1.5px",
                fontFamily: "'Cinzel', serif",
                textTransform: "uppercase",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#d4af37";
                e.currentTarget.style.color = "#050c23";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#d4af37";
              }}
            >
              Get in Touch
            </button>
          </div>
        )}
      </header>

      {/* ── Responsive CSS (injected once) ── */}
      <style>{`
        @media (max-width: 900px) {
          .noori-desktop-nav { display: none !important; }
          .noori-hamburger   { display: flex !important; }
        }
      `}</style>
    </>
  );
}
