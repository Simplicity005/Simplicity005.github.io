import { motion } from "motion/react";

const CAPABILITIES = [
  {
    id: "web",
    num: "01",
    badge: "WEB & FRONTEND",
    badgeClass: "pill-mint",
    title: "Web Engineering",
    desc: "Building fast, reactive web applications with clean React component trees, custom CSS design systems, and RESTful APIs. Fast load times and accessible user flows.",
    tags: ["React 19", "JavaScript", "Modern CSS", "Vite", "Node.js", "REST APIs"],
  },
  {
    id: "embedded",
    num: "02",
    badge: "HARDWARE & IOT",
    badgeClass: "pill-yellow",
    title: "Embedded Systems & IoT",
    desc: "Writing interrupt-driven C++ for ESP32 and Arduino microcontrollers. Handling serial communication (I2C, SPI, UART), ADC sensors, and MQTT relays.",
    tags: ["ESP32", "Arduino", "Embedded C++", "I2C / SPI / UART", "MQTT", "Sensors"],
  },
  {
    id: "robotics",
    num: "03",
    badge: "ROBOTICS & SLAM",
    badgeClass: "pill-coral",
    title: "Robotics & Automation",
    desc: "Developing 2D LiDAR distance scanning, SLAM mapping, and kinematic differential drive motion controllers using ROS 2 nodes on Linux.",
    tags: ["ROS 2", "Python", "2D LiDAR", "SLAM", "Linux Mint"],
  },
  {
    id: "workflow",
    num: "04",
    badge: "WORKFLOW & TOOLS",
    badgeClass: "pill-lilac",
    title: "Dual-Boot Development",
    desc: "Dual-boot workstation setup utilizing Linux Mint for low-latency ROS 2 nodes and bash automation, paired with Windows 11 for hardware flashing toolchains.",
    tags: ["Linux Mint", "Windows 11", "Bash & Git", "PlatformIO", "VS Code"],
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
            className="capability-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="cap-header">
              <span className={`neo-pill ${cap.badgeClass}`}>{cap.badge}</span>
              <span className="cap-index">{cap.num}</span>
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
