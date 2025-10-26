import React from "react";
import ThemeToggle from "../Components/ThemeToggle";
import StarBackground from "../Components/StarBackground";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import AboutMe from "../Components/AboutMe";
import SkillsSection from "../Components/SkillsSection";
import ProjectsSection from "../Components/ProjectsSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle></ThemeToggle>
      {/* Background Effects */}
      <StarBackground />
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Main Content */}
      <main>
        <HeroSection></HeroSection>
        <AboutMe></AboutMe>
        <SkillsSection></SkillsSection>
        <ProjectsSection></ProjectsSection>
      </main>
      {/* Footer */}
    </div>
  );
};

export default Home;
