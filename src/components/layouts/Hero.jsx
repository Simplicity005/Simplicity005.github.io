import { useState, useEffect } from "react";
import { motion } from "motion/react";

const ROLES = [
  "Full-Stack Web Developer",
  "Hardware & Embedded Systems Hacker",
  "Microcontroller & IoT Developer",
  "Robotics & Sensor Systems Explorer",
  "Dual-Boot: Linux Mint + Windows 11",
];

const FOLDERS = [
  {
    id: "web",
    label: "Web & React",
    pillClass: "pill-mint",
    title: "Modern Web Engineering",
    desc: "Building clean, high-performance web applications using React, modern CSS systems, and RESTful APIs. Fast load times and responsive layouts.",
    tags: ["React 19", "JavaScript", "Modern CSS", "Vite", "Node.js", "REST APIs"],
  },
  {
    id: "embedded",
    label: "ESP32 & IoT",
    pillClass: "pill-yellow",
    title: "Microcontrollers & Hardware",
    desc: "Writing interrupt-driven C++ for ESP32 and Arduino boards, handling serial buses (I2C, SPI, UART), ADC sensors, and MQTT relays.",
    tags: ["ESP32", "Arduino", "Embedded C++", "I2C / SPI / UART", "MQTT", "Sensors"],
  },
  {
    id: "robotics",
    label: "Robotics ROS2",
    pillClass: "pill-coral",
    title: "Autonomous Robotics & SLAM",
    desc: "Developing 2D LiDAR distance scanning, SLAM mapping algorithms, and differential drive motion controllers using ROS 2 on Linux.",
    tags: ["ROS 2", "Python", "2D LiDAR", "SLAM", "Linux Mint"],
  },
  {
    id: "workflow",
    label: "Dual-Boot OS",
    pillClass: "pill-lilac",
    title: "Dual-Boot Development",
    desc: "Using Linux Mint for ROS 2 nodes, bash scripting, and terminal agility, paired with Windows 11 for hardware flashing toolchains.",
    tags: ["Linux Mint", "Windows 11", "Bash & Git", "PlatformIO", "VS Code"],
  },
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeFolderId, setActiveFolderId] = useState("web");

  const activeFolder = FOLDERS.find((f) => f.id === activeFolderId) || FOLDERS[0];

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const speed = isDeleting ? 25 : 50;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="hero-section" id="hero">
      <motion.div
        className="hero-neo-card"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Left Column: Bio & Core Info */}
        <div className="hero-text-col">
          <div className="hero-salutation-strip">
            <span className="neo-pill pill-yellow">✦ HEY THERE! I AM</span>
            <span className="neo-pill pill-white">BANGALORE, IN</span>
          </div>

          <h1 className="hero-main-title">
            Arjun Sanesh.<br />
            <span className="highlight-text">Software &amp; Hardware.</span>
          </h1>

          <p className="hero-bio-lead">
            I build responsive web applications, microcontroller firmware (ESP32 / Arduino), and autonomous robotics. Focused on clean code and reliable hardware.
          </p>

          {/* Typing Prompt Box */}
          <div className="neo-type-box">
            <span className="type-prompt">&gt;</span>
            <span className="type-text">{displayText}</span>
            <span className="cursor-blink">_</span>
          </div>

          {/* Action Buttons */}
          <div className="hero-actions-row">
            <button
              type="button"
              className="neo-btn"
              onClick={() => scrollTo("work")}
            >
              <span>Explore Projects →</span>
            </button>

            <button
              type="button"
              className="neo-btn neo-btn-white"
              onClick={() => scrollTo("terminal")}
            >
              <span>Terminal CLI &gt;_</span>
            </button>

            {/* Social Icons */}
            <a
              href="https://github.com/Simplemindedmoron"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-pill"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/arjun-sanesh/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-pill"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column: Folder Tab Showcase (Inspired by Reference Image 3) */}
        <div className="hero-folder-showcase">
          {/* Top Folder Tabs */}
          <div className="folder-tabs-header" role="tablist">
            {FOLDERS.map((f) => (
              <button
                key={f.id}
                type="button"
                className={`folder-tab-btn ${activeFolderId === f.id ? "active" : ""}`}
                onClick={() => setActiveFolderId(f.id)}
              >
                <span>{f.label}</span>
              </button>
            ))}
          </div>

          {/* Folder Card Body */}
          <div className="folder-card-body">
            <span className={`neo-pill folder-tag-pill ${activeFolder.pillClass}`}>
              ● ACTIVE FOCUS
            </span>
            <h3 className="folder-title">{activeFolder.title}</h3>
            <p className="folder-desc">{activeFolder.desc}</p>
            <div className="folder-tags-wrap">
              {activeFolder.tags.map((tag) => (
                <span key={tag} className="micro-tech-tag">#{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}

export default Hero;
