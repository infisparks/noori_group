"use client";
import React, { useState, useEffect } from "react";
import { auth, db, ref, onValue, update } from "@/lib/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [leads, setLeads] = useState([]);
  const [activeTab, setActiveTab] = useState("unseen"); // 'unseen' or 'seen'
  const [commentsState, setCommentsState] = useState({}); // { [leadId]: "current comment text" }
  const [savingCommentId, setSavingCommentId] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const router = useRouter();

  // 1. Auth Guard Checks
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push("/login");
      } else {
        setUser(currentUser);
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, [router]);

  // 2. Fetch Leads in Realtime from Realtime Database
  useEffect(() => {
    if (!user) return;
    const leadsRef = ref(db, "leads");
    const unsubscribeLeads = onValue(leadsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const parsed = Object.entries(data).map(([id, value]) => ({
          id,
          ...value,
        }));
        // Sort leads by date descending
        parsed.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
        setLeads(parsed);

        // Prepopulate comments state
        const initialComments = {};
        parsed.forEach((lead) => {
          initialComments[lead.id] = lead.comment || "";
        });
        setCommentsState(initialComments);
      } else {
        setLeads([]);
      }
    });

    return () => unsubscribeLeads();
  }, [user]);

  // 3. Handle Actions
  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/login");
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveComment = async (leadId) => {
    setSavingCommentId(leadId);
    try {
      const commentText = commentsState[leadId] || "";
      const leadRef = ref(db, `leads/${leadId}`);
      await update(leadRef, { comment: commentText });
      alert("Comment saved successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to save comment.");
    } finally {
      setSavingCommentId(null);
    }
  };

  const handleMarkSeen = async (leadId) => {
    try {
      const leadRef = ref(db, `leads/${leadId}`);
      await update(leadRef, { status: "seen" });
    } catch (err) {
      console.error(err);
      alert("Failed to update status.");
    }
  };

  // 4. Split Leads by status
  const unseenLeads = leads.filter((l) => l.status !== "seen");
  const seenLeads = leads.filter((l) => l.status === "seen");

  const currentDisplayLeads = activeTab === "unseen" ? unseenLeads : seenLeads;

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
        <div style={{ fontSize: "16px", letterSpacing: "2px" }}>VERIFYING CREDENTIALS...</div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      backgroundColor: "#F5F6F8",
      fontFamily: "'Montserrat', sans-serif"
    }}>
      {/* Sidebar */}
      <aside style={{
        width: sidebarOpen ? "260px" : "80px",
        backgroundColor: "#0a1628",
        color: "#ffffff",
        transition: "width 0.3s cubic-bezier(0.2, 1, 0.2, 1)",
        display: "flex",
        flexDirection: "column",
        borderRight: "1px solid rgba(255, 255, 255, 0.08)",
        flexShrink: 0
      }} className="admin-sidebar">
        {/* Sidebar Brand header */}
        <div style={{
          height: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: sidebarOpen ? "space-between" : "center",
          padding: "0 24px",
          borderBottom: "1px solid rgba(255, 255, 255, 0.05)"
        }}>
          {sidebarOpen ? (
            <div>
              <span style={{ fontFamily: "'Cinzel', serif", fontSize: "16px", fontWeight: "600", letterSpacing: "1px" }}>NOORI</span>
              <span style={{ fontSize: "9px", display: "block", color: "#d4af37", letterSpacing: "2px", fontWeight: "600" }}>PORTAL</span>
            </div>
          ) : (
            <span style={{ fontFamily: "'Cinzel', serif", fontSize: "18px", color: "#d4af37", fontWeight: "700" }}>N</span>
          )}
          
          {/* Toggle Sidebar Button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            style={{
              background: "none",
              border: "none",
              color: "#94a3b8",
              cursor: "pointer",
              fontSize: "14px",
              padding: "4px"
            }}
          >
            {sidebarOpen ? "◀" : "▶"}
          </button>
        </div>

        {/* Navigation Items */}
        <nav style={{ flex: 1, padding: "20px 12px", display: "flex", flexDirection: "column", gap: "8px" }}>
          {/* Unseen Tab Nav */}
          <button
            onClick={() => setActiveTab("unseen")}
            style={{
              width: "100%",
              padding: "12px 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: sidebarOpen ? "space-between" : "center",
              backgroundColor: activeTab === "unseen" ? "rgba(212, 175, 55, 0.15)" : "transparent",
              border: "none",
              borderRadius: "6px",
              color: activeTab === "unseen" ? "#d4af37" : "#cbd5e1",
              fontSize: "14px",
              fontWeight: activeTab === "unseen" ? "600" : "400",
              cursor: "pointer",
              textAlign: "left",
              transition: "all 0.2s"
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span>📥</span>
              {sidebarOpen && <span>New Requests</span>}
            </span>
            {sidebarOpen && (
              <span style={{
                backgroundColor: unseenLeads.length > 0 ? "#ef4444" : "rgba(255,255,255,0.1)",
                color: "#ffffff",
                fontSize: "11px",
                padding: "2px 8px",
                borderRadius: "10px",
                fontWeight: "600"
              }}>
                {unseenLeads.length}
              </span>
            )}
          </button>

          {/* Seen Tab Nav */}
          <button
            onClick={() => setActiveTab("seen")}
            style={{
              width: "100%",
              padding: "12px 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: sidebarOpen ? "space-between" : "center",
              backgroundColor: activeTab === "seen" ? "rgba(212, 175, 55, 0.15)" : "transparent",
              border: "none",
              borderRadius: "6px",
              color: activeTab === "seen" ? "#d4af37" : "#cbd5e1",
              fontSize: "14px",
              fontWeight: activeTab === "seen" ? "600" : "400",
              cursor: "pointer",
              textAlign: "left",
              transition: "all 0.2s"
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span>✅</span>
              {sidebarOpen && <span>Seen Requests</span>}
            </span>
            {sidebarOpen && (
              <span style={{
                backgroundColor: "rgba(255,255,255,0.06)",
                color: "#94a3b8",
                fontSize: "11px",
                padding: "2px 8px",
                borderRadius: "10px"
              }}>
                {seenLeads.length}
              </span>
            )}
          </button>
        </nav>

        {/* Sidebar Footer Logout */}
        <div style={{ padding: "20px 12px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
          <button
            onClick={handleLogout}
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "rgba(239, 68, 68, 0.08)",
              border: "1px solid rgba(239, 68, 68, 0.2)",
              borderRadius: "6px",
              color: "#f87171",
              fontSize: "13px",
              fontWeight: "500",
              cursor: "pointer",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px"
            }}
          >
            <span>🚪</span>
            {sidebarOpen && <span>LOGOUT</span>}
          </button>
        </div>
      </aside>

      {/* Main Panel Area */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Top Header Navigation */}
        <header style={{
          height: "70px",
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #E5E7EB",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 32px"
        }} className="admin-header">
          <h2 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "20px",
            color: "#0a1628",
            margin: 0,
            letterSpacing: "1px"
          }}>
            {activeTab === "unseen" ? "New Inquiries" : "Processed Inquiries"}
          </h2>

          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div style={{ textAlign: "right" }}>
              <span style={{ fontSize: "13px", fontWeight: "600", color: "#1f2937", display: "block" }}>Administrator</span>
              <span style={{ fontSize: "11px", color: "#6b7280" }}>{user?.email}</span>
            </div>
            <div style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              backgroundColor: "#d4af37",
              color: "#0a1628",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "700",
              fontSize: "14px"
            }}>
              {user?.email?.charAt(0).toUpperCase() || "A"}
            </div>
          </div>
        </header>

        {/* Dashboard Grid / Table content */}
        <main style={{ flex: 1, overflowY: "auto", padding: "32px" }} className="admin-main-container">
          
          {currentDisplayLeads.length === 0 ? (
            <div style={{
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              padding: "48px",
              textAlign: "center",
              border: "1px solid #E5E7EB",
              boxShadow: "0 4px 6px rgba(0,0,0,0.02)"
            }}>
              <span style={{ fontSize: "48px", display: "block", marginBottom: "16px" }}>📭</span>
              <h3 style={{ fontSize: "16px", color: "#374151", margin: "0 0 8px 0" }}>No requests found</h3>
              <p style={{ fontSize: "13px", color: "#9ca3af", margin: 0 }}>
                {activeTab === "unseen" ? "All requests are marked read!" : "Processed database is currently empty."}
              </p>
            </div>
          ) : (
            <>
              {/* Desktop Table View */}
              <div className="admin-desktop-table" style={{
                backgroundColor: "#ffffff",
                borderRadius: "8px",
                border: "1px solid #E5E7EB",
                boxShadow: "0 4px 6px rgba(0,0,0,0.02)",
                overflow: "hidden"
              }}>
                <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                  <thead>
                    <tr style={{ backgroundColor: "#F9FAFB", borderBottom: "1px solid #E5E7EB" }}>
                      <th style={{ padding: "16px 24px", fontSize: "11px", color: "#4B5563", textTransform: "uppercase", letterSpacing: "1px" }}>Date</th>
                      <th style={{ padding: "16px 24px", fontSize: "11px", color: "#4B5563", textTransform: "uppercase", letterSpacing: "1px" }}>Full Name</th>
                      <th style={{ padding: "16px 24px", fontSize: "11px", color: "#4B5563", textTransform: "uppercase", letterSpacing: "1px" }}>Contact Details</th>
                      <th style={{ padding: "16px 24px", fontSize: "11px", color: "#4B5563", textTransform: "uppercase", letterSpacing: "1px" }}>Comments</th>
                      <th style={{ padding: "16px 24px", fontSize: "11px", color: "#4B5563", textTransform: "uppercase", letterSpacing: "1px", textAlign: "right" }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentDisplayLeads.map((lead) => (
                      <tr key={lead.id} style={{ borderBottom: "1px solid #F3F4F6", transition: "background 0.2s" }} className="table-row-hover">
                        {/* Date column */}
                        <td style={{ padding: "20px 24px", fontSize: "13.5px", color: "#4B5563" }}>
                          {lead.createdAt ? new Date(lead.createdAt).toLocaleDateString("en-IN", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit"
                          }) : "N/A"}
                        </td>

                        {/* Name column */}
                        <td style={{ padding: "20px 24px" }}>
                          <span style={{ fontSize: "14px", fontWeight: "600", color: "#111827", display: "block" }}>
                            {lead.firstName} {lead.lastName}
                          </span>
                        </td>

                        {/* Contact details */}
                        <td style={{ padding: "20px 24px" }}>
                          <span style={{ fontSize: "13.5px", color: "#111827", display: "block" }}>📞 {lead.phone}</span>
                          <span style={{ fontSize: "12px", color: "#6B7280", display: "block", marginTop: "2px" }}>✉️ {lead.email}</span>
                        </td>

                        {/* Comment Column */}
                        <td style={{ padding: "20px 24px", width: "30%" }}>
                          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                            <textarea
                              value={commentsState[lead.id] || ""}
                              onChange={(e) => setCommentsState({ ...commentsState, [lead.id]: e.target.value })}
                              placeholder="Add follow-up notes..."
                              rows={2}
                              style={{
                                flex: 1,
                                padding: "8px",
                                fontSize: "12.5px",
                                border: "1px solid #E5E7EB",
                                borderRadius: "4px",
                                color: "#374151",
                                resize: "none",
                                outline: "none",
                                fontFamily: "'Montserrat', sans-serif"
                              }}
                            />
                            <button
                              onClick={() => handleSaveComment(lead.id)}
                              disabled={savingCommentId === lead.id}
                              style={{
                                padding: "8px 12px",
                                backgroundColor: "#0a1628",
                                border: "none",
                                borderRadius: "4px",
                                color: "#ffffff",
                                fontSize: "11px",
                                fontWeight: "600",
                                cursor: "pointer",
                                transition: "all 0.2s"
                              }}
                            >
                              {savingCommentId === lead.id ? "..." : "💾"}
                            </button>
                          </div>
                        </td>

                        {/* Actions column */}
                        <td style={{ padding: "20px 24px", textAlign: "right" }}>
                          {lead.status !== "seen" ? (
                            <button
                              onClick={() => handleMarkSeen(lead.id)}
                              style={{
                                padding: "8px 16px",
                                backgroundColor: "#d4af37",
                                border: "none",
                                borderRadius: "4px",
                                color: "#050c23",
                                fontSize: "12px",
                                fontWeight: "700",
                                letterSpacing: "0.5px",
                                cursor: "pointer",
                                transition: "transform 0.2s"
                              }}
                              onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.02)"}
                              onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
                            >
                              Read Appt ➔
                            </button>
                          ) : (
                            <span style={{
                              display: "inline-block",
                              fontSize: "11px",
                              fontWeight: "600",
                              color: "#059669",
                              backgroundColor: "#D1FAE5",
                              padding: "4px 10px",
                              borderRadius: "12px"
                            }}>
                              Seen
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Card View */}
              <div className="admin-mobile-cards" style={{ display: "none", flexDirection: "column", gap: "16px" }}>
                {currentDisplayLeads.map((lead) => (
                  <div key={lead.id} style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "8px",
                    border: "1px solid #E5E7EB",
                    padding: "20px",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.02)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px"
                  }}>
                    {/* Header: Date + Status Badge */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: "12px", color: "#6B7280" }}>
                        {lead.createdAt ? new Date(lead.createdAt).toLocaleDateString("en-IN", {
                          day: "2-digit",
                          month: "short",
                          hour: "2-digit",
                          minute: "2-digit"
                        }) : "N/A"}
                      </span>
                      {lead.status === "seen" && (
                        <span style={{
                          fontSize: "10px",
                          fontWeight: "600",
                          color: "#059669",
                          backgroundColor: "#D1FAE5",
                          padding: "2px 8px",
                          borderRadius: "10px"
                        }}>
                          Seen
                        </span>
                      )}
                    </div>

                    {/* Name */}
                    <div>
                      <h4 style={{ margin: 0, fontSize: "16px", fontWeight: "600", color: "#111827" }}>
                        {lead.firstName} {lead.lastName}
                      </h4>
                    </div>

                    {/* Details */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px", fontSize: "13px", color: "#4B5563" }}>
                      <span>📞 {lead.phone}</span>
                      <span>✉️ {lead.email}</span>
                    </div>

                    {/* Comment section */}
                    <div style={{ borderTop: "1px solid #E5E7EB", paddingTop: "12px", display: "flex", gap: "8px", alignItems: "center" }}>
                      <textarea
                        value={commentsState[lead.id] || ""}
                        onChange={(e) => setCommentsState({ ...commentsState, [lead.id]: e.target.value })}
                        placeholder="Add follow-up notes..."
                        rows={2}
                        style={{
                          flex: 1,
                          padding: "8px",
                          fontSize: "12px",
                          border: "1px solid #E5E7EB",
                          borderRadius: "4px",
                          color: "#374151",
                          resize: "none",
                          outline: "none",
                          fontFamily: "'Montserrat', sans-serif"
                        }}
                      />
                      <button
                        onClick={() => handleSaveComment(lead.id)}
                        disabled={savingCommentId === lead.id}
                        style={{
                          padding: "8px 12px",
                          backgroundColor: "#0a1628",
                          border: "none",
                          borderRadius: "4px",
                          color: "#ffffff",
                          fontSize: "12px",
                          cursor: "pointer"
                        }}
                      >
                        {savingCommentId === lead.id ? "..." : "💾"}
                      </button>
                    </div>

                    {/* Mark Seen Action */}
                    {lead.status !== "seen" && (
                      <div style={{ borderTop: "1px solid #E5E7EB", paddingTop: "12px" }}>
                        <button
                          onClick={() => handleMarkSeen(lead.id)}
                          style={{
                            width: "100%",
                            padding: "10px",
                            backgroundColor: "#d4af37",
                            border: "none",
                            borderRadius: "4px",
                            color: "#050c23",
                            fontSize: "13px",
                            fontWeight: "700",
                            cursor: "pointer"
                          }}
                        >
                          Mark as Seen ➔
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}

        </main>
      </div>

      {/* Responsive Breakpoints stylesheet styling */}
      <style>{`
        .table-row-hover:hover {
          background-color: #F9FAFB !important;
        }
        @media (max-width: 900px) {
          .admin-sidebar {
            position: fixed;
            top: 70px;
            bottom: 0;
            left: 0;
            z-index: 100;
            width: ${sidebarOpen ? "260px" : "0px"} !important;
            overflow: hidden;
          }
          .admin-header {
            padding: 0 16px !important;
          }
          .admin-main-container {
            padding: 16px !important;
          }
          .admin-desktop-table {
            display: none !important;
          }
          .admin-mobile-cards {
            display: flex !important;
          }
        }
      `}</style>
    </div>
  );
}
