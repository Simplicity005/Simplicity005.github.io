import { motion } from "motion/react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-container" id="site-footer">
      <motion.div
        className="footer-neo-card"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.45 }}
      >
        {/* Top Row: Name on Left, Actions on Right */}
        <div className="footer-main-row">
          <div className="footer-brand-side">
            <span className="footer-logo-pill">✦ ARJUN SANESH</span>
          </div>

          <div className="footer-links-side">
            <a
              href="https://github.com/Simplemindedmoron"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link-pill"
              aria-label="GitHub Profile"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/arjun-sanesh/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link-pill"
              aria-label="LinkedIn Profile"
            >
              LinkedIn ↗
            </a>
            <button
              type="button"
              className="neo-btn neo-btn-sm neo-btn-white footer-back-btn"
              onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
              aria-label="Scroll back to top"
            >
              <span>Back to Top ↑</span>
            </button>
          </div>
        </div>

        {/* Bottom Row: Copyright at the bottom */}
        <div className="footer-bottom-row">
          <p className="footer-copyright">
            &copy; {year} Arjun Sanesh. Hardware &amp; Software Developer.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
