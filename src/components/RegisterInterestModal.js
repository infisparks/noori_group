"use client";
import React, { useEffect } from "react";
import ContactForm from "./ContactForm";

export default function RegisterInterestModal({ isOpen, onClose }) {
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <link rel="stylesheet" href="/css/elementor-modal.css" />
      <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 px-4 transition-opacity duration-300"
      onClick={onClose}
      id="elementor-popup-modal-146197"
    >
      <div 
        className="relative bg-white w-full max-w-[640px] max-h-[90vh] overflow-y-auto rounded-xl p-8 shadow-2xl border border-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Heading */}
        <div className="mb-6 text-center">
          <h3 className="text-2xl font-bold text-gray-900">Register Interest</h3>
          <p className="text-gray-500 text-sm mt-1">
            Submit your information to receive exclusive details and floor plans.
          </p>
        </div>

        {/* Form Body */}
        <ContactForm />

      </div>
    </div>
    </>
  );
}
