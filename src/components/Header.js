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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
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
          transition: "background 0.35s ease, box-shadow 0.35s ease",
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
                  fontSize: "13.5px",
                  fontWeight: "500",
                  textDecoration: "none",
                  padding: "8px 16px",
                  borderRadius: "6px",
                  letterSpacing: "0.5px",
                  fontFamily: "system-ui, sans-serif",
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
                padding: "10px 22px",
                backgroundColor: "#d4af37",
                color: "#0a1628",
                border: "none",
                borderRadius: "6px",
                fontWeight: "700",
                fontSize: "13.5px",
                cursor: "pointer",
                letterSpacing: "0.3px",
                fontFamily: "system-ui, sans-serif",
                transition: "all 0.2s",
                whiteSpace: "nowrap",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#c8a02e";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#d4af37";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Register Interest
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
                  fontSize: "15px",
                  fontWeight: "500",
                  textDecoration: "none",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  fontFamily: "system-ui, sans-serif",
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
                padding: "14px",
                backgroundColor: "#d4af37",
                color: "#0a1628",
                border: "none",
                borderRadius: "6px",
                fontWeight: "700",
                fontSize: "15px",
                cursor: "pointer",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              Register Interest
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
