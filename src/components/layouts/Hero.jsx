import { Link } from "react-router-dom";
import { motion } from "motion/react";

const STACK_DOMAINS = [
  {
    label: "EMBEDDED",
    items: "ESP32 · Arduino · C++ · FreeRTOS · I2C / SPI / MQTT",
  },
  {
    label: "ROBOTICS",
    items: "ROS 2 · Computer Vision · 2D LiDAR · Kinematics",
  },
  {
    label: "SOFTWARE",
    items: "React · Next.js · Python · Node.js · Supabase",
  },
];

function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="hero-section" id="hero">
      <div className="hero-bento-grid">
        {/* BENTO CELL 1: Main Identity & Introduction (Span 7 cols, 2 rows) */}
        <motion.div
          className="bento-cell hero-identity-cell"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="bento-cell-top">
            <span className="bento-index">01 // OVERVIEW</span>
            <span className="bento-meta-label">HARDWARE &amp; SOFTWARE</span>
          </div>

          <div className="hero-identity-body">
            <h1 className="hero-main-title">
              Arjun Sanesh
              <span className="hero-serif-line">
                Hardware &amp; Software Developer.
              </span>
            </h1>

            <p className="hero-bio-lead">
              Building across microcontroller firmware, autonomous robotics, and
              modern web applications — focused on clean architecture and
              reliable systems.
            </p>
          </div>

          <div className="hero-actions-row">
            <button
              type="button"
              className="btn-solid-white"
              onClick={() => scrollTo("work")}
            >
              <span>Selected Work</span>
              <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 3.5V12.5M8 12.5L4 8.5M8 12.5L12 8.5" />
              </svg>
            </button>

            <Link to="/projects" className="btn-outline-mono">
              <span>Full Archive (7)</span>
              <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12" />
              </svg>
            </Link>

            <button
              type="button"
              className="btn-outline-mono"
              onClick={() => scrollTo("contact")}
            >
              <span>Contact</span>
            </button>
          </div>
        </motion.div>

        {/* BENTO CELL 2: Live Mathematical Game of Life Cutout Viewport (Span 5 cols, 1 row) */}
        <motion.div
          className="bento-cell hero-simulation-cell"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="bento-cell-top">
            <span className="bento-index">CONWAY&apos;S GAME OF LIFE</span>
            <span className="bento-live-indicator">
              <span className="live-dot" aria-hidden="true" />
              CLICK TO SEED
            </span>
          </div>

          <div className="simulation-viewport-spacer" aria-hidden="true">
            <span className="crosshair tl">+</span>
            <span className="crosshair tr">+</span>
            <span className="crosshair bl">+</span>
            <span className="crosshair br">+</span>
          </div>

          <div className="bento-cell-bottom">
            <span className="bento-meta-label">CELLULAR AUTOMATON</span>
            <span className="bento-meta-label">RULE B3/S23</span>
          </div>
        </motion.div>

        {/* BENTO CELL 3: Technical Stack Breakdown (Span 3 cols, 1 row) */}
        <motion.div
          className="bento-cell hero-stack-cell"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="bento-cell-top">
            <span className="bento-index">DOMAINS &amp; STACK</span>
          </div>

          <div className="stack-rows-list">
            {STACK_DOMAINS.map((group) => (
              <div key={group.label} className="stack-row-item">
                <span className="stack-domain-key">{group.label}</span>
                <span className="stack-domain-val">{group.items}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* BENTO CELL 4: Direct Profiles (Span 2 cols, 1 row) */}
        <motion.div
          className="hero-profiles-cell"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="https://github.com/Simplemindedmoron"
            target="_blank"
            rel="noopener noreferrer"
            className="bento-profile-tile"
          >
            <div className="bento-cell-top">
              <span className="bento-index">CODE</span>
              <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 11.5L11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5" />
              </svg>
            </div>
            <div className="profile-tile-bottom">
              <span className="profile-tile-name">GitHub</span>
              <span className="profile-tile-sub">@Simplemindedmoron</span>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/arjun-sanesh/"
            target="_blank"
            rel="noopener noreferrer"
            className="bento-profile-tile"
          >
            <div className="bento-cell-top">
              <span className="bento-index">NETWORK</span>
              <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 11.5L11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5" />
              </svg>
            </div>
            <div className="profile-tile-bottom">
              <span className="profile-tile-name">LinkedIn</span>
              <span className="profile-tile-sub">in/arjun-sanesh</span>
            </div>
          </a>
        </motion.div>
      </div>
    </main>
  );
}

export default Hero;
