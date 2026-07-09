"use client";
import React, { useState } from "react";
import { db, ref, push } from "@/lib/firebase";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    // Simple validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.phone ||
      !formData.email
    ) {
      setError("Please fill in all required fields marked with *");
      setSubmitting(false);
      return;
    }

    try {
      const leadsRef = ref(db, "leads");
      await push(leadsRef, {
        ...formData,
        createdAt: new Date().toISOString(),
      });
      console.log("Form Submitted to Firebase:", formData);
      setSubmitted(true);
    } catch (err) {
      console.error("Firebase submit error:", err);
      setError("Failed to register your interest. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-white border border-gray-200 rounded-xl text-center shadow-sm">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600 text-sm">
          Your interest has been registered. One of our sales agents will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto w-full">
      {error && (
        <div className="p-3 bg-red-50 text-red-600 text-xs rounded-lg border border-red-200 font-medium">
          {error}
        </div>
      )}

      {/* Name row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-xs font-semibold text-gray-700 mb-1">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter first name"
            className="w-full text-sm p-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]"
            required
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-xs font-semibold text-gray-700 mb-1">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter last name"
            className="w-full text-sm p-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]"
            required
          />
        </div>
      </div>

      {/* Phone & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +91 98765 43210"
            className="w-full text-sm p-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email address"
            className="w-full text-sm p-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]"
            required
          />
        </div>
      </div>

      <p className="text-[11px] leading-relaxed text-gray-500 mt-2">
        Disclaimer: Noori Group of Companies values your privacy and will use the contact information you provide solely for communicating with you about our products and services. By clicking submit, you consent to our sales agents contacting you via phone calls, emails, and WhatsApp messages.
      </p>

      <div>
        <button
          type="submit"
          disabled={submitting}
          className="w-full py-3 bg-[#0a1628] hover:bg-[#d4af37] disabled:bg-gray-400 disabled:text-gray-200 text-white hover:text-[#050c23] font-semibold text-sm rounded-lg transition-all duration-300 shadow-sm cursor-pointer"
        >
          {submitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
}
