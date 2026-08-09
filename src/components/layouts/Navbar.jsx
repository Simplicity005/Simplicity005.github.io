import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.svg";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1);
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
    <nav
      className={`navbar ${isScrolled ? "scrolled" : ""} ${isMobileMenuOpen ? "nav-side-open" : ""}`}
      id="navbar"
    >
      <div className="nav-left">
        {/* Hamburger goes first so it sits on the left */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${isMobileMenuOpen ? "open" : ""}`}></span>
          <span className={`bar ${isMobileMenuOpen ? "open" : ""}`}></span>
          <span className={`bar ${isMobileMenuOpen ? "open" : ""}`}></span>
        </div>

        {/* Logo goes second */}
        <a href="#hero">
          <img src={logo} alt="Simplicity Logo" className="nav-logo" />
        </a>
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
