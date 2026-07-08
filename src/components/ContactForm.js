"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    budget: "",
    unitType: "",
    timeline: "",
    nationality: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const countries = [
    "United Arab Emirates", "India", "Pakistan", "United Kingdom", "Saudi Arabia",
    "Qatar", "Oman", "Kuwait", "Bahrain", "Russia", "United States", "Canada",
    "Australia", "Germany", "France", "China", "Iran", "Iraq", "Egypt", "Bangladesh"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Simple validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.phone ||
      !formData.email ||
      !formData.budget ||
      !formData.unitType ||
      !formData.timeline ||
      !formData.nationality
    ) {
      setError("Please fill in all required fields marked with *");
      return;
    }

    // In a real application, you would send this to /wp-json/lead/v1/submit or custom endpoint.
    console.log("Form Submitted:", formData);
    setSubmitted(true);
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
            className="w-full text-sm p-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
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
            className="w-full text-sm p-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
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
            placeholder="e.g. +971 50 123 4567"
            className="w-full text-sm p-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
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
            className="w-full text-sm p-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
            required
          />
        </div>
      </div>

      {/* Budget & Unit Type */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="budget" className="block text-xs font-semibold text-gray-700 mb-1">
            Select Budget <span className="text-red-500">*</span>
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full text-sm p-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
            required
          >
            <option value="">Select a Budget</option>
            <option value="AED 1M - AED 2M">AED 1M - AED 2M</option>
            <option value="AED 2M - AED 3M">AED 2M - AED 3M</option>
            <option value="AED 3M - AED 5M">AED 3M - AED 5M</option>
            <option value="AED 5M+">AED 5M+</option>
          </select>
        </div>
        <div>
          <label htmlFor="unitType" className="block text-xs font-semibold text-gray-700 mb-1">
            Unit Type <span className="text-red-500">*</span>
          </label>
          <select
            id="unitType"
            name="unitType"
            value={formData.unitType}
            onChange={handleChange}
            className="w-full text-sm p-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
            required
          >
            <option value="">Select Unit Type</option>
            <option value="Studio">Studio</option>
            <option value="1 Bedroom">1 Bedroom</option>
            <option value="2 Bedroom">2 Bedroom</option>
            <option value="3 Bedroom">3 Bedroom</option>
          </select>
        </div>
      </div>

      {/* Timeline & Nationality */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="timeline" className="block text-xs font-semibold text-gray-700 mb-1">
            Purchase Timeline <span className="text-red-500">*</span>
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="w-full text-sm p-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
            required
          >
            <option value="">Purchase Timeline</option>
            <option value="Within 60 days">Within 60 days</option>
            <option value="Within 90 days">Within 90 days</option>
            <option value="After 90 Days">After 90 Days</option>
          </select>
        </div>
        <div>
          <label htmlFor="nationality" className="block text-xs font-semibold text-gray-700 mb-1">
            Nationality <span className="text-red-500">*</span>
          </label>
          <select
            id="nationality"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            className="w-full text-sm p-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
            required
          >
            <option value="">Select Nationality</option>
            {countries.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      <p className="text-[11px] leading-relaxed text-gray-500 mt-2">
        Disclaimer: Danube Properties values your privacy and will use the contact information you provide solely for communicating with you about our products and services. By clicking submit, you consent to our sales agents contacting you via phone calls, emails, and WhatsApp messages.
      </p>

      <div>
        <button
          type="submit"
          className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm rounded-lg transition-colors shadow-sm cursor-pointer"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
