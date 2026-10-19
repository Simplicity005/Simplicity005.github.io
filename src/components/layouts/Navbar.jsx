import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

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
          ✦ ARJUN SANESH // HARDWARE &amp; SOFTWARE DEVELOPER ✦ OPEN FOR COLLABORATION ✦ ROS 2 &amp; ESP32 ✦ EXPLORE OPEN-SOURCE REPOSITORIES ✦ ARJUN SANESH // HARDWARE &amp; SOFTWARE DEVELOPER ✦ OPEN FOR COLLABORATION ✦ ROS 2 &amp; ESP32 ✦
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

            {/* Clean Professional SVG Theme Toggle (No Emojis) */}
            <button
              type="button"
              className="theme-toggle-neo"
              onClick={toggleTheme}
              title={`Switch to ${theme === "dark" ? "light beige" : "dark"} mode`}
              aria-label="Toggle color theme"
            >
              {theme === "dark" ? (
                /* Sun Vector Icon */
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4.5" />
                  <line x1="12" y1="2" x2="12" y2="4.5" />
                  <line x1="12" y1="19.5" x2="12" y2="22" />
                  <line x1="4.93" y1="4.93" x2="6.7" y2="6.7" />
                  <line x1="17.3" y1="17.3" x2="19.07" y2="19.07" />
                  <line x1="2" y1="12" x2="4.5" y2="12" />
                  <line x1="19.5" y1="12" x2="22" y2="12" />
                  <line x1="4.93" y1="19.07" x2="6.7" y2="17.3" />
                  <line x1="17.3" y1="6.7" x2="19.07" y2="4.93" />
                </svg>
              ) : (
                /* Moon Vector Icon */
                <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
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
