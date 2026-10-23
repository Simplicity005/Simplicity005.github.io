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
        {/* Top Row: Name/AJ on Left, Links on Right (On the same line) */}
        <div className="footer-main-row">
          <div className="footer-brand-side">
            <span className="footer-logo-pill">
              <span className="footer-name-full">✦ ARJUN SANESH</span>
              <span className="footer-name-short">✦ AJ</span>
            </span>
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
          </div>
        </div>

        {/* Bottom Row: Copyright on Left, Back to Top small button on Right */}
        <div className="footer-bottom-row">
          <p className="footer-copyright">
            &copy; {year} Arjun Sanesh. Hardware &amp; Software Developer.
          </p>

          <button
            type="button"
            className="footer-back-btn"
            onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
            aria-label="Back to top"
            title="Back to top"
          >
            <span className="footer-back-text">Back to Top</span>
            <span className="footer-back-arrow">↑</span>
          </button>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
