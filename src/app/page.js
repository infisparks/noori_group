"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import FeaturedProjects from "@/components/FeaturedProjects";
import HeroBanner from "@/components/HeroBanner";
import AboutSection from "@/components/AboutSection";
import MissionVision from "@/components/MissionVision";
import ValuesSection from "@/components/ValuesSection";
import OngoingProjects from "@/components/OngoingProjects";
import OtherVentures from "@/components/OtherVentures";
import CorporateMessage from "@/components/CorporateMessage";
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
      <FeaturedProjects onRegisterClick={handleOpenModal} />

      {/* 5. Mission, Vision & Philosophy Section */}
      <MissionVision />

      {/* 6. On-Going Projects Section */}
      <OngoingProjects onRegisterClick={handleOpenModal} />

      {/* 7. Our Values Section */}
      <ValuesSection />

      {/* 8. Other Ventures Section */}
      <OtherVentures />

      {/* 9. Corporate Message Section */}
      <CorporateMessage />

      {/* Modal */}
      <RegisterInterestModal isOpen={isModalOpen} onClose={handleCloseModal} />

    </div>
  );
}
