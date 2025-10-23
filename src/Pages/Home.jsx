import React from "react";
import ThemeToggle from "../Components/ThemeToggle";
import StarBackground from "../Components/StarBackground";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle></ThemeToggle>
      {/* Background Effects */}
      <StarBackground />
      {/* Navbar */}
      {/* Main Content */}
      {/* Footer */}
    </div>
  );
};

export default Home;
