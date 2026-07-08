"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import LatestLaunch from "@/components/LatestLaunch";
import FeaturedProjects from "@/components/FeaturedProjects";
import HeroBanner from "@/components/HeroBanner";
import AboutSection from "@/components/AboutSection";
import RegisterInterestModal from "@/components/RegisterInterestModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div style={{ minHeight: "100vh" }}>

      {/* 1. Fixed Header */}
      <Header onRegisterClick={handleOpenModal} />

      {/* 2. Hero Banner – full screen */}
      <HeroBanner onRegisterClick={handleOpenModal} />

      {/* 3. About Section */}
      <AboutSection />

      {/* 4. Featured Projects */}
      <FeaturedProjects />

      {/* 5. Remaining page sections */}
      <LatestLaunch />

      {/* Modal */}
      <RegisterInterestModal isOpen={isModalOpen} onClose={handleCloseModal} />

    </div>
  );
}
