import { useState } from "react";
import { motion } from "motion/react";

function About() {
  const [activeOs, setActiveOs] = useState("linux");
  const [activeLed, setActiveLed] = useState("gpio2");

  return (
    <section className="about-section" id="about">
      {/* Ambient Atmospheric Lighting Auroras (Behind Windows, Over Conway Grid) */}
      <div className="about-ambient-glow glow-amber" aria-hidden="true" />
      <div className="about-ambient-glow glow-cyan" aria-hidden="true" />
      <div className="about-ambient-glow glow-teal" aria-hidden="true" />

      <div className="about-container">
        {/* Section Header */}
        <motion.div
          className="section-header-block"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-kicker">01 // ARCHITECTURE &amp; CAPABILITIES</span>
          <h2 className="section-heading">
            Engineering Stack &amp; <span>Systems Matrix.</span>
          </h2>
          <p className="section-subheading">
            Hardware firmware, autonomous robotics nodes, dual-boot toolchains, and reactive web platforms.
          </p>
        </motion.div>

        {/* Asymmetric Windows Bento Grid */}
        <div className="bento-grid-container">
          
          {/* Card 1: Hardware & Embedded Firmware Lab (Wide 7-Col Anchor) */}
          <motion.div
            className="neo-window bento-card bento-card-hardware"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="neo-titlebar bento-titlebar">
              <div className="neo-titlebar-left">
                <span className="neo-titlebar-dot dot-emerald"></span>
                <span className="neo-titlebar-text">hardware_lab.sys</span>
              </div>
              <span className="bento-status-pill status-emerald">
                <span className="status-live-dot"></span>
                <span>GPIO_ONLINE</span>
              </span>
            </div>

            <div className="bento-card-content">
              <div className="bento-card-meta">
                <span className="bento-domain-tag tag-emerald">EMBEDDED SYSTEMS &amp; IOT</span>
                <h3 className="bento-card-title">Microcontroller Firmware &amp; Hardware Circuitry</h3>
                <p className="bento-card-desc">
                  Writing interrupt-driven C++ firmware for ESP32 and Arduino microcontrollers. Designing low-level telemetry pipelines across serial buses with sensor ADC calibration and real-time actuators.
                </p>
              </div>

              {/* Hardware Diagnostics Matrix */}
              <div className="hardware-specs-grid">
                <div className="spec-tile">
                  <span className="spec-label">MCU CORE</span>
                  <span className="spec-val">ESP32 Dual-Core (240MHz)</span>
                </div>
                <div className="spec-tile">
                  <span className="spec-label">COMM PROTOCOLS</span>
                  <span className="spec-val">I2C · SPI · UART · MQTT</span>
                </div>
                <div className="spec-tile">
                  <span className="spec-label">SCHEDULER</span>
                  <span className="spec-val">FreeRTOS Task Queues</span>
                </div>
                <div className="spec-tile">
                  <span className="spec-label">COMPONENTS</span>
                  <span className="spec-val">Optocouplers, Relays, ADC</span>
                </div>
              </div>

              {/* Interactive GPIO Pinout Status Bar */}
              <div className="bento-interactive-strip">
                <div className="strip-header">
                  <span className="strip-title">PINOUT BUS TELEMETRY:</span>
                  <span className="strip-subtitle">CLICK PIN TO INSPECT</span>
                </div>
                <div className="gpio-pins-bar">
                  <button
                    type="button"
                    className={`gpio-pin-btn ${activeLed === "gpio2" ? "active" : ""}`}
                    onClick={() => setActiveLed("gpio2")}
                  >
                    <span className="pin-led pin-pulse"></span>
                    <span className="pin-text">GPIO_02 [HEARTBEAT]</span>
                  </button>
                  <button
                    type="button"
                    className={`gpio-pin-btn ${activeLed === "sda" ? "active" : ""}`}
                    onClick={() => setActiveLed("sda")}
                  >
                    <span className="pin-led pin-sda"></span>
                    <span className="pin-text">GPIO_21 [I2C_SDA]</span>
                  </button>
                  <button
                    type="button"
                    className={`gpio-pin-btn ${activeLed === "scl" ? "active" : ""}`}
                    onClick={() => setActiveLed("scl")}
                  >
                    <span className="pin-led pin-scl"></span>
                    <span className="pin-text">GPIO_22 [I2C_SCL]</span>
                  </button>
                  <button
                    type="button"
                    className={`gpio-pin-btn ${activeLed === "uart" ? "active" : ""}`}
                    onClick={() => setActiveLed("uart")}
                  >
                    <span className="pin-led pin-uart"></span>
                    <span className="pin-text">UART0 [TX/RX]</span>
                  </button>
                </div>
              </div>

              {/* Tags */}
              <div className="bento-tags-row">
                <span className="neo-tag bento-tag"><span className="hash-emerald">#</span>ESP32</span>
                <span className="neo-tag bento-tag"><span className="hash-emerald">#</span>Embedded C++</span>
                <span className="neo-tag bento-tag"><span className="hash-emerald">#</span>Arduino</span>
                <span className="neo-tag bento-tag"><span className="hash-emerald">#</span>MQTT</span>
                <span className="neo-tag bento-tag"><span className="hash-emerald">#</span>PlatformIO</span>
                <span className="neo-tag bento-tag"><span className="hash-emerald">#</span>Sensors</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Dual-Boot Kernel Workflow (5-Col Anchor) */}
          <motion.div
            className="neo-window bento-card bento-card-workflow"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="neo-titlebar bento-titlebar">
              <div className="neo-titlebar-left">
                <span className="neo-titlebar-dot dot-cyan"></span>
                <span className="neo-titlebar-text">dual_kernel.cfg</span>
              </div>
              <span className="bento-status-pill status-cyan">
                <span className="status-live-dot"></span>
                <span>DUAL_ACTIVE</span>
              </span>
            </div>

            <div className="bento-card-content">
              <div className="bento-card-meta">
                <span className="bento-domain-tag tag-cyan">ENGINEERING WORKFLOW</span>
                <h3 className="bento-card-title">Dual-Boot OS Architecture</h3>
                <p className="bento-card-desc">
                  Operating across dual OS environments tailored to specialized execution boundaries:
                </p>
              </div>

              {/* OS Selector Tabs */}
              <div className="os-selector-strip">
                <button
                  type="button"
                  className={`os-pill-btn ${activeOs === "linux" ? "active" : ""}`}
                  onClick={() => setActiveOs("linux")}
                >
                  <span className="os-dot">●</span>
                  <span>Linux Mint (Cinnamon)</span>
                </button>
                <button
                  type="button"
                  className={`os-pill-btn ${activeOs === "windows" ? "active" : ""}`}
                  onClick={() => setActiveOs("windows")}
                >
                  <span className="os-dot">●</span>
                  <span>Windows 11 Pro</span>
                </button>
              </div>

              {/* Dynamic OS Detail Box */}
              <div className="os-detail-window">
                {activeOs === "linux" ? (
                  <div className="os-info-block">
                    <div className="os-badge-header">
                      <span className="os-flag">PRIMARY RUNTIME</span>
                      <span className="os-shell">/bin/bash · kernel 6.x</span>
                    </div>
                    <p className="os-desc">
                      Dedicated driver environment for ROS 2 galactic nodes, bash script automation, Python telemetry, and low-latency serial monitor feeds.
                    </p>
                    <div className="os-spec-pills">
                      <span className="spec-micro-tag">ROS 2 Daemon</span>
                      <span className="spec-micro-tag">SSH Automation</span>
                      <span className="spec-micro-tag">Git Agility</span>
                    </div>
                  </div>
                ) : (
                  <div className="os-info-block">
                    <div className="os-badge-header">
                      <span className="os-flag">TOOLCHAIN &amp; FLASH</span>
                      <span className="os-shell">PowerShell · MSVC</span>
                    </div>
                    <p className="os-desc">
                      Flashing firmware binaries, board driver recovery, PlatformIO hardware debuggers, circuit schematics, and productivity tools.
                    </p>
                    <div className="os-spec-pills">
                      <span className="spec-micro-tag">PlatformIO IDE</span>
                      <span className="spec-micro-tag">ESP-IDF</span>
                      <span className="spec-micro-tag">Hardware Recovery</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Tags */}
              <div className="bento-tags-row">
                <span className="neo-tag bento-tag"><span className="hash-cyan">#</span>Linux Mint</span>
                <span className="neo-tag bento-tag"><span className="hash-cyan">#</span>Windows 11</span>
                <span className="neo-tag bento-tag"><span className="hash-cyan">#</span>Bash</span>
                <span className="neo-tag bento-tag"><span className="hash-cyan">#</span>Git</span>
                <span className="neo-tag bento-tag"><span className="hash-cyan">#</span>VS Code</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Autonomous Robotics & LiDAR SLAM (5-Col Anchor) */}
          <motion.div
            className="neo-window bento-card bento-card-robotics"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="neo-titlebar bento-titlebar">
              <div className="neo-titlebar-left">
                <span className="neo-titlebar-dot dot-amber"></span>
                <span className="neo-titlebar-text">ros2_telemetry.exe</span>
              </div>
              <span className="bento-status-pill status-amber">
                <span className="status-live-dot"></span>
                <span>50Hz_ODOM</span>
              </span>
            </div>

            <div className="bento-card-content">
              <div className="bento-card-meta">
                <span className="bento-domain-tag tag-amber">ROBOTICS &amp; AUTOMATION</span>
                <h3 className="bento-card-title">Autonomous Mobile Nodes &amp; LiDAR SLAM</h3>
                <p className="bento-card-desc">
                  Building modular robot controllers with 2D LiDAR distance scanning, vector coordinate transforms, and kinematic differential drive motors.
                </p>
              </div>

              {/* Telemetry Architecture Pipeline */}
              <div className="robotics-pipeline-box">
                <div className="pipe-step">
                  <span className="pipe-num">01</span>
                  <span className="pipe-name">2D LiDAR Scan</span>
                  <span className="pipe-sub">360° point distance</span>
                </div>
                <div className="pipe-arrow">→</div>
                <div className="pipe-step">
                  <span className="pipe-num">02</span>
                  <span className="pipe-name">ROS2 Node</span>
                  <span className="pipe-sub">TF: map → odom</span>
                </div>
                <div className="pipe-arrow">→</div>
                <div className="pipe-step">
                  <span className="pipe-num">03</span>
                  <span className="pipe-name">Motor PWM</span>
                  <span className="pipe-sub">Kinematic Drive</span>
                </div>
              </div>

              {/* Tags */}
              <div className="bento-tags-row">
                <span className="neo-tag bento-tag"><span className="hash-amber">#</span>ROS 2</span>
                <span className="neo-tag bento-tag"><span className="hash-amber">#</span>Python</span>
                <span className="neo-tag bento-tag"><span className="hash-amber">#</span>2D LiDAR</span>
                <span className="neo-tag bento-tag"><span className="hash-amber">#</span>SLAM</span>
                <span className="neo-tag bento-tag"><span className="hash-amber">#</span>Linux</span>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Reactive Web & Systems Architecture (Wide 7-Col Anchor) */}
          <motion.div
            className="neo-window bento-card bento-card-software"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="neo-titlebar bento-titlebar">
              <div className="neo-titlebar-left">
                <span className="neo-titlebar-dot dot-teal"></span>
                <span className="neo-titlebar-text">reactor_core.dll</span>
              </div>
              <span className="bento-status-pill status-teal">
                <span className="status-live-dot"></span>
                <span>VITE_60FPS</span>
              </span>
            </div>

            <div className="bento-card-content">
              <div className="bento-card-meta">
                <span className="bento-domain-tag tag-teal">SOFTWARE &amp; WEB ARCHITECTURE</span>
                <h3 className="bento-card-title">Reactive Interfaces &amp; Systems Engineering</h3>
                <p className="bento-card-desc">
                  Architecting snappy web applications and hardware management dashboards using clean React component trees, custom CSS design systems, and rapid build pipelines.
                </p>
              </div>

              {/* Metric & Protocol Specs */}
              <div className="software-metrics-grid">
                <div className="software-spec-box">
                  <div className="spec-icon">⚡</div>
                  <div className="spec-text-group">
                    <span className="spec-head">React 19 &amp; Vite HMR</span>
                    <span className="spec-sub">Sub-millisecond state updates &amp; zero runtime bloat</span>
                  </div>
                </div>

                <div className="software-spec-box">
                  <div className="spec-icon">📐</div>
                  <div className="spec-text-group">
                    <span className="spec-head">Systematic Vanilla CSS</span>
                    <span className="spec-sub">Bespoke neo-brutalist tokens &amp; responsive layout grids</span>
                  </div>
                </div>

                <div className="software-spec-box">
                  <div className="spec-icon">🌐</div>
                  <div className="spec-text-group">
                    <span className="spec-head">REST &amp; WebSockets</span>
                    <span className="spec-sub">Real-time bi-directional telemetry streaming</span>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="bento-tags-row">
                <span className="neo-tag bento-tag"><span className="hash-teal">#</span>React 19</span>
                <span className="neo-tag bento-tag"><span className="hash-teal">#</span>JavaScript</span>
                <span className="neo-tag bento-tag"><span className="hash-teal">#</span>Modern CSS</span>
                <span className="neo-tag bento-tag"><span className="hash-teal">#</span>Vite</span>
                <span className="neo-tag bento-tag"><span className="hash-teal">#</span>Node.js</span>
                <span className="neo-tag bento-tag"><span className="hash-teal">#</span>REST APIs</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;
