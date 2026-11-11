import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

const navItems = [
  { label: "Work", sectionId: "work" },
  { label: "Contact", sectionId: "contact" },
];

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.removeItem("portfolio-theme");
  }, []);

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
    <header className="navbar-wrapper" id="main-nav" ref={navRef}>
      <nav className="navbar-bento-bar">
        <div className="nav-left-group">
          <Link
            to="/"
            onClick={(e) => scrollToSection(e, "hero")}
            className="nav-brand-group"
          >
            <span className="nav-brand-dot" aria-hidden="true" />
            <span className="nav-brand-name">ARJUN SANESH</span>
          </Link>
          <span className="nav-discipline-tag">HARDWARE / ROBOTICS / SOFTWARE</span>
        </div>

        <div className="nav-right-group">
          <div className="nav-links-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={`#${item.sectionId}`}
                onClick={(e) => scrollToSection(e, item.sectionId)}
                className="nav-item-btn"
              >
                {item.label}
              </a>
            ))}
            <Link to="/projects" className="nav-item-btn">
              Archive
            </Link>
          </div>

          <a
            href="https://github.com/Simplemindedmoron"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta-btn nav-github-desktop"
          >
            <span>GitHub</span>
            <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4.5 11.5L11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5" />
            </svg>
          </a>

          <button
            type="button"
            className={`mobile-hamburger-btn ${isMobileMenuOpen ? "is-active" : ""}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu-card"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mobile-menu-links">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={`#${item.sectionId}`}
                  onClick={(e) => scrollToSection(e, item.sectionId)}
                  className="mobile-nav-link"
                >
                  <span>{item.label}</span>
                  <span>→</span>
                </a>
              ))}
              <Link
                to="/projects"
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>Archive</span>
                <span>→</span>
              </Link>
              <a
                href="https://github.com/Simplemindedmoron"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>GitHub</span>
                <span>↗</span>
              </a>
              <a
                href="https://www.linkedin.com/in/arjun-sanesh/"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>LinkedIn</span>
                <span>↗</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
