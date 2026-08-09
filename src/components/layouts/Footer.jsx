import React from "react";
import logo from "../../assets/Logo.png";
import linkedinIcon from "../../assets/images/linkedin.png";
import instagramIcon from "../../assets/images/instagram.png";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const contactLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/arjun-sanesh/",
    icon: linkedinIcon,
  },
  {
    label: "GitHub",
    href: "https://github.com/Simplicity005",
    icon: "github",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    icon: instagramIcon,
  },
];

function Footer() {
  const revealRef = useScrollReveal();
  const year = new Date().getFullYear();

  return (
    <footer className="footer-container" id="contact">
      <div className="footer-blur">
        <div className="footer-inner reveal-zoom" ref={revealRef}>
          <div className="footer-top">
            <div className="footer-brand">
              <div className="footer-logo-badge">
                <img
                  src={logo}
                  alt="Arjun Sanesh logo"
                  className="footer-logo"
                />
              </div>
            </div>

            <div className="footer-col">
              <span className="footer-col-title">Get in touch</span>
              <div className="footer-contact-list">
                {contactLinks.map((link) => (
                  <a
                    href={link.href}
                    key={link.label}
                    className="footer-contact-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="footer-contact-icon">
                      {link.icon === "github" ? (
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.02 11.02 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.58.23 2.75.11 3.04.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .3.2.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
                        </svg>
                      ) : (
                        <img src={link.icon} alt="" />
                      )}
                    </span>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span className="footer-bottom-spacer" aria-hidden="true"></span>
            <p>© {year} Arjun Sanesh. All rights reserved.</p>
            <a
              href="#"
              className="back-to-top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
