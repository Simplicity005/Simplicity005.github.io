import React, { useState, useEffect } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`} id="navbar">
      <div className="nav-left">
        <a href="#home">
          <img
            src="/src/assets/Logo.png"
            alt="Simplicity Logo"
            className="nav-logo"
          />
        </a>
        <div className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${isMobileMenuOpen ? "open" : ""}`}></span>
          <span className={`bar ${isMobileMenuOpen ? "open" : ""}`}></span>
          <span className={`bar ${isMobileMenuOpen ? "open" : ""}`}></span>
        </div>
      </div>

      <div className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
        <a href="#about" onClick={closeMenu}>
          About Me
        </a>
        <a href="#work" onClick={closeMenu}>
          My Work
        </a>
        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </div>
      <div className="nav-right"></div>
    </nav>
  );
}

export default Navbar;
