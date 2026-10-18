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
        <div className="footer-brand">
          <span className="footer-logo-pill">✦ ARJUN SANESH</span>
          <span className="footer-copyright">
            &copy; {year} Arjun Sanesh. Built with React &amp; Neo-Brutalism.
          </span>
        </div>

        <button
          type="button"
          className="neo-btn neo-btn-sm neo-btn-white"
          onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
        >
          <span>Back to Top ↑</span>
        </button>
      </motion.div>
    </footer>
  );
}

export default Footer;
