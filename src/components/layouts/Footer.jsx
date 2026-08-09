import React from "react";
import logo from "../../assets/Logo.png";
import linkedinIcon from "../../assets/images/linkedin.png";
import instagramIcon from "../../assets/images/instagram.png";
import Socials from "../ui/Socials";
import { useScrollReveal } from "../../hooks/useScrollReveal";

function Footer() {
  const revealRef = useScrollReveal();
  const year = new Date().getFullYear();

  return (
    <footer className="footer-container" id="contact">
      <div className="footer-inner reveal-zoom" ref={revealRef}>
        <div className="footer-top">
          <div className="footer-brand">
            <img src={logo} alt="Simplicity Logo" className="footer-logo" />
            <p className="footer-tagline">
              Building things that (mostly) work, and making them look good.
            </p>
          </div>

          <div className="footer-col">
            <span className="footer-col-title">Navigate</span>
            <a href="#hero">Home</a>
            <a href="#about">About Me</a>
            <a href="#work">My Work</a>
          </div>

          <div className="footer-col">
            <span className="footer-col-title">Connect</span>
            <div className="socials footer-socials">
              <Socials
                link="https://www.linkedin.com/in/arjun-sanesh/"
                imgURL={linkedinIcon}
                alt="LinkedIn"
              />
              <Socials
                link="https://www.instagram.com"
                imgURL={instagramIcon}
                alt="Instagram"
              />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} Arjun Sanesh. All rights reserved.</p>
          <a href="#hero" className="back-to-top">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
