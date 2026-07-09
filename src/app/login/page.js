"use client";
import React, { useState, useEffect } from "react";
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [loggingIn, setLoggingIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if user is already logged in, redirect to admin
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/admin");
      } else {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, [router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoggingIn(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/admin");
    } catch (err) {
      console.error(err);
      setError("Invalid email or password. Please try again.");
      setLoggingIn(false);
    }
  };

  if (loading) {
    return (
      <div style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#050c23",
        color: "#d4af37",
        fontFamily: "'Montserrat', sans-serif"
      }}>
        <div style={{ fontSize: "16px", letterSpacing: "2px" }}>LOADING...</div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#050c23",
      padding: "24px",
      fontFamily: "'Montserrat', sans-serif"
    }}>
      <div style={{ position: "relative", width: "100%", maxWidth: "420px" }}>
        {/* Decorative Gold Frame */}
        <div style={{
          position: "absolute",
          top: "10px",
          left: "-10px",
          right: "10px",
          bottom: "-10px",
          border: "1px solid #d4af37",
          borderRadius: "8px",
          zIndex: 1
        }} />

        {/* Login Box */}
        <div style={{
          position: "relative",
          zIndex: 2,
          backgroundColor: "#0a1628",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: "8px",
          padding: "40px 32px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
        }}>
          {/* Logo / Header */}
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <h1 style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "24px",
              color: "#ffffff",
              letterSpacing: "2px",
              margin: "0 0 8px 0"
            }}>
              NOORI GROUP
            </h1>
            <p style={{
              fontSize: "11px",
              color: "#d4af37",
              letterSpacing: "3px",
              textTransform: "uppercase",
              margin: 0
            }}>
              Admin Portal Login
            </p>
          </div>

          {error && (
            <div style={{
              backgroundColor: "rgba(239, 68, 68, 0.1)",
              border: "1px solid rgba(239, 68, 68, 0.2)",
              color: "#f87171",
              fontSize: "13px",
              padding: "12px",
              borderRadius: "4px",
              marginBottom: "20px",
              lineHeight: "1.5"
            }}>
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div>
              <label style={{
                display: "block",
                fontSize: "11px",
                color: "#94a3b8",
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: "6px"
              }}>
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@noorigroup.com"
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  fontSize: "14px",
                  backgroundColor: "#050c23",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "4px",
                  color: "#ffffff",
                  outline: "none",
                  transition: "border-color 0.2s"
                }}
                onFocus={(e) => e.target.style.borderColor = "#d4af37"}
                onBlur={(e) => e.target.style.borderColor = "rgba(255, 255, 255, 0.1)"}
              />
            </div>

            <div>
              <label style={{
                display: "block",
                fontSize: "11px",
                color: "#94a3b8",
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: "6px"
              }}>
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  fontSize: "14px",
                  backgroundColor: "#050c23",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "4px",
                  color: "#ffffff",
                  outline: "none",
                  transition: "border-color 0.2s"
                }}
                onFocus={(e) => e.target.style.borderColor = "#d4af37"}
                onBlur={(e) => e.target.style.borderColor = "rgba(255, 255, 255, 0.1)"}
              />
            </div>

            <button
              type="submit"
              disabled={loggingIn}
              style={{
                marginTop: "12px",
                padding: "14px",
                backgroundColor: "#d4af37",
                border: "none",
                borderRadius: "4px",
                color: "#050c23",
                fontFamily: "'Cinzel', serif",
                fontWeight: "700",
                fontSize: "13px",
                letterSpacing: "1.5px",
                cursor: "pointer",
                transition: "opacity 0.2s"
              }}
              onMouseOver={(e) => e.currentTarget.style.opacity = 0.9}
              onMouseOut={(e) => e.currentTarget.style.opacity = 1}
            >
              {loggingIn ? "LOGGING IN..." : "ENTER PORTAL"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
