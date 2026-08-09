import React, { useState, useEffect } from "react";
import logo from "../../assets/Logo.png"; // <-- Using the correct PNG import!

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

  // Custom scroll function that doesn't break React Router
  const scrollToSection = (e, sectionId) => {
    e.preventDefault(); // Stops the # from breaking the URL
    setIsMobileMenuOpen(false); // Closes menu on mobile
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`navbar ${isScrolled ? "scrolled" : ""} ${isMobileMenuOpen ? "nav-side-open" : ""}`}
      id="navbar"
    >
      <div className="nav-left">
        <div className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${isMobileMenuOpen ? "open" : ""}`}></span>
          <span className={`bar ${isMobileMenuOpen ? "open" : ""}`}></span>
          <span className={`bar ${isMobileMenuOpen ? "open" : ""}`}></span>
        </div>

        <a href="/" onClick={(e) => scrollToSection(e, "hero")}>
          <img src={logo} alt="Simplicity Logo" className="nav-logo" />
        </a>
      </div>

      <div className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
        <a href="#about" onClick={(e) => scrollToSection(e, "about")}>
          About Me
        </a>
        <a href="#work" onClick={(e) => scrollToSection(e, "work")}>
          My Work
        </a>
        <a href="#contact" onClick={(e) => scrollToSection(e, "contact")}>
          Contact
        </a>
      </div>
      <div className="nav-right"></div>
    </nav>
  );
}

export default Navbar;
