import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

const navItems = [
  { label: "Projects", href: "#work" },
  { label: "Terminal", href: "#terminal" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
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

  // Close mobile menu on resize, escape key, or click outside
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

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
          ✦ ARJUN SANESH // HARDWARE &amp; SOFTWARE DEVELOPER ✦ OPEN FOR COLLABORATION ✦ ROS 2 &amp; ESP32 ✦ EXPLORE OPEN-SOURCE REPOSITORIES ✦ ARJUN SANESH // HARDWARE &amp; SOFTWARE DEVELOPER ✦ OPEN FOR COLLABORATION ✦ ROS 2 &amp; ESP32 ✦
        </div>
      </div>

      <header className="navbar-wrapper" id="main-nav" ref={navRef}>
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
              className="neo-btn neo-btn-sm neo-btn-coral nav-github-desktop"
            >
              <span>GitHub ↗</span>
            </a>

            {/* Clean Professional SVG Theme Toggle (No Emojis) */}
            <button
              type="button"
              className="theme-toggle-neo"
              onClick={toggleTheme}
              title={`Switch to ${theme === "dark" ? "light beige" : "dark"} mode`}
              aria-label="Toggle color theme"
            >
              {theme === "dark" ? (
                /* Moon Vector Icon for Dark Mode */
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                /* Sun Vector Icon for Light Mode */
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className={`mobile-hamburger-btn ${isMobileMenuOpen ? "is-active" : ""}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="mobile-menu-card"
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mobile-menu-links">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href.replace("#", ""))}
                    className="mobile-nav-link"
                  >
                    <span>{item.label}</span>
                    <span className="mobile-nav-arrow">→</span>
                  </a>
                ))}
                <a
                  href="https://github.com/Simplemindedmoron"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-nav-link mobile-nav-github"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>GitHub Profile</span>
                  <span className="mobile-nav-arrow">↗</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/arjun-sanesh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-nav-link mobile-nav-linkedin"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>LinkedIn Network</span>
                  <span className="mobile-nav-arrow">↗</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

export default Navbar;
