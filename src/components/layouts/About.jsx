import { motion } from "motion/react";

const CAPABILITIES = [
  {
    id: "web",
    num: "01",
    badge: "WEB & FRONTEND",
    badgeClass: "pill-mint",
    cardTheme: "cap-theme-mint",
    title: "Web Engineering",
    desc: "Building fast, reactive web applications with clean React component trees, custom CSS design systems, and RESTful APIs. Fast load times and accessible user flows.",
    tags: ["React 19", "JavaScript", "Modern CSS", "Vite", "Node.js", "REST APIs"],
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: "embedded",
    num: "02",
    badge: "HARDWARE & IOT",
    badgeClass: "pill-yellow",
    cardTheme: "cap-theme-yellow",
    title: "Embedded Systems & IoT",
    desc: "Writing interrupt-driven C++ for ESP32 and Arduino microcontrollers. Handling serial communication (I2C, SPI, UART), ADC sensors, and MQTT relays.",
    tags: ["ESP32", "Arduino", "Embedded C++", "I2C / SPI / UART", "MQTT", "Sensors"],
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    ),
  },
  {
    id: "robotics",
    num: "03",
    badge: "ROBOTICS & SLAM",
    badgeClass: "pill-coral",
    cardTheme: "cap-theme-coral",
    title: "Robotics & Automation",
    desc: "Developing 2D LiDAR distance scanning, SLAM mapping, and kinematic differential drive motion controllers using ROS 2 nodes on Linux.",
    tags: ["ROS 2", "Python", "2D LiDAR", "SLAM", "Linux Mint"],
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <line x1="12" y1="3" x2="12" y2="21" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    id: "workflow",
    num: "04",
    badge: "WORKFLOW & TOOLS",
    badgeClass: "pill-lilac",
    cardTheme: "cap-theme-lilac",
    title: "Dual-Boot Development",
    desc: "Dual-boot workstation setup utilizing Linux Mint for low-latency ROS 2 nodes and bash automation, paired with Windows 11 for hardware flashing toolchains.",
    tags: ["Linux Mint", "Windows 11", "Bash & Git", "PlatformIO", "VS Code"],
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    ),
  },
];

function About() {
  return (
    <section className="about-section" id="about">
      {/* Section Header */}
      <motion.div
        className="section-header-block"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="section-kicker">01 // CAPABILITIES</span>
        <h2 className="section-heading">
          What I Build &amp; <span>Work With.</span>
        </h2>
        <p className="section-desc">
          From responsive web applications to low-level microcontroller firmware and robotics.
        </p>
      </motion.div>

      {/* 4 Neo-Brutalist Cards Grid */}
      <div className="about-cards-grid">
        {CAPABILITIES.map((cap, idx) => (
          <motion.div
            key={cap.id}
            className={`capability-card ${cap.cardTheme}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Top Accent Strip */}
            <div className="cap-top-accent-bar" />

            <div className="cap-header">
              <div className="cap-icon-box">
                {cap.icon}
              </div>
              <div className="cap-header-meta">
                <span className={`neo-pill ${cap.badgeClass}`}>{cap.badge}</span>
                <span className="cap-index">{cap.num}</span>
              </div>
            </div>

            <h3 className="cap-title">{cap.title}</h3>
            <p className="cap-desc">{cap.desc}</p>

            <div className="cap-tags-row">
              {cap.tags.map((tag) => (
                <span key={tag} className="micro-tech-tag">#{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default About;
