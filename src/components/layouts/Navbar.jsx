import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#work" },
  { label: "Terminal", href: "#terminal" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("portfolio-theme") || "paper";
    }
    return "paper";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "paper" : "dark"));
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* Top Neo-Brutalism Ticker Marquee Strip */}
      <div className="top-ticker-strip">
        <div className="ticker-content">
          ✦ ARJUN SANESH // FULL-STACK WEB &amp; EMBEDDED SYSTEMS ✦ BASED IN BANGALORE ✦ LINUX MINT + WINDOWS 11 ✦ ROS 2 &amp; ESP32 ✦ EXPLORE OPEN-SOURCE REPOSITORIES ✦ ARJUN SANESH // FULL-STACK WEB &amp; EMBEDDED SYSTEMS ✦ BASED IN BANGALORE ✦ LINUX MINT + WINDOWS 11 ✦ ROS 2 &amp; ESP32 ✦
        </div>
      </div>

      <header className="navbar-wrapper" id="main-nav">
        <nav className="navbar-pill">
          {/* Brand Badge */}
          <Link
            to="/"
            onClick={(e) => scrollToSection(e, "hero")}
            className="nav-brand-group"
            title="Arjun Sanesh Home"
          >
            <span className="nav-logo-pill">✦ ARJUN SANESH</span>
          </Link>

          {/* Center Links */}
          <div className="nav-links-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href.replace("#", ""))}
                className="nav-item-btn"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="nav-right-actions">
            <a
              href="https://github.com/Simplemindedmoron"
              target="_blank"
              rel="noopener noreferrer"
              className="neo-btn neo-btn-sm neo-btn-coral"
            >
              <span>GitHub ↗</span>
            </a>

            <button
              type="button"
              className="theme-toggle-neo"
              onClick={toggleTheme}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              aria-label="Toggle color theme"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="mobile-hamburger-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
