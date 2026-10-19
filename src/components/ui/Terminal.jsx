import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";

const INITIAL_LINES = [
  { type: "system", text: "ARJUN SANESH // SYSTEM COMMAND SHELL v2.0" },
  { type: "hint", text: "Type 'help' or click shortcuts below to query system:" },
];

const SUGGESTED_COMMANDS = ["whoami", "skills", "hardware", "projects", "clear"];

function Terminal() {
  const [history, setHistory] = useState(INITIAL_LINES);
  const [inputVal, setInputVal] = useState("");
  const terminalBodyRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const runCommand = (rawCmd) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    const newEntries = [{ type: "prompt", text: `arjun@portfolio:~$ ${rawCmd}` }];

    switch (cmd) {
      case "help":
        newEntries.push({
          type: "output",
          text: `Commands:
  • whoami    - About Arjun Sanesh & background
  • skills    - Technical toolkit & language stack
  • hardware  - Microcontrollers, sensors & robotics
  • projects  - Software applications & hardware builds
  • contact   - Profiles & communication channels
  • clear     - Clear terminal buffer`,
        });
        break;

      case "whoami":
        newEntries.push({
          type: "output",
          text: `Arjun Sanesh (@Simplemindedmoron)
Hardware and Software Developer.
Specializing in embedded firmware, robotics, and full-stack software.`,
        });
        break;

      case "skills":
        newEntries.push({
          type: "output",
          text: `Languages:  C++, Python, JavaScript (ES6+), Modern CSS, HTML5, Bash
Frameworks: React 19, Vite, Node.js, ROS 2, FreeRTOS
Hardware:   ESP32 (WROOM-32), Arduino Uno/Nano, Sensors, Relays
Buses:      I2C, SPI, UART, MQTT, REST APIs`,
        });
        break;

      case "hardware":
        newEntries.push({
          type: "output",
          text: `ESP32 dual-core IoT circuits, laser security tripwire,
sensor ADC conversions, and differential-drive ROS 2 robotics chassis.`,
        });
        break;

      case "projects":
        newEntries.push({
          type: "output",
          text: `1. CV-Guided ESP32 Robot (ESP32 / Camera / Vision / ROS)
2. Modular Smart Security (ESP32 / MQTT / IoT / Relays)
3. ROS2 Core Orchestrator (ROS 2 / LiDAR / Differential Drive)
4. Fact-Checking 3/10/30 Rule (Python / Network Science)`,
        });
        break;

      case "contact":
        newEntries.push({
          type: "output",
          text: `LinkedIn: linkedin.com/in/arjun-sanesh/
GitHub:   github.com/Simplemindedmoron`,
        });
        break;

      case "clear":
      case "cls":
        setHistory([]);
        setInputVal("");
        return;

      default:
        newEntries.push({
          type: "error",
          text: `bash: command not found: ${rawCmd}. Type 'help' for available commands.`,
        });
    }

    setHistory((prev) => [...prev, ...newEntries]);
    setInputVal("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      runCommand(inputVal);
    }
  };

  return (
    <section className="terminal-section" id="terminal">
      <motion.div
        className="section-header-block"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="section-kicker">02 // TERMINAL</span>
        <h2 className="section-heading">
          Interactive Command <span>Shell.</span>
        </h2>
        <p className="section-desc">
          Query my background, hardware builds, and language stack directly from this simulated terminal.
        </p>
      </motion.div>

      <motion.div
        className="terminal-neo-card"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Terminal Header */}
        <div className="terminal-titlebar">
          <div className="terminal-dots-row">
            <span className="term-dot dot-red"></span>
            <span className="term-dot dot-yellow"></span>
            <span className="term-dot dot-green"></span>
          </div>
          <span className="terminal-title-text">arjun@portfolio: ~/terminal.sh</span>
          <span className="neo-pill pill-white" style={{ fontSize: "0.6rem", padding: "2px 8px" }}>BASH 5.2</span>
        </div>

        {/* Terminal Screen Body */}
        <div
          className="terminal-body"
          ref={terminalBodyRef}
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((line, idx) => (
            <div key={idx} className="term-line">
              {line.type === "system" && <span style={{ color: "#FFE566", fontWeight: "bold" }}>{line.text}</span>}
              {line.type === "hint" && <span style={{ color: "#9CA3AF" }}>{line.text}</span>}
              {line.type === "prompt" && <span className="term-prompt">{line.text}</span>}
              {line.type === "output" && <pre style={{ whiteSpace: "pre-wrap", fontFamily: "inherit" }}>{line.text}</pre>}
              {line.type === "error" && <span style={{ color: "#FF6B6B" }}>{line.text}</span>}
            </div>
          ))}

          {/* Active Input Line */}
          <div className="term-input-row">
            <span className="term-prompt">arjun@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              className="term-input-field"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus={false}
              aria-label="Terminal command input"
            />
          </div>
        </div>

        {/* Clickable Shortcuts Strip */}
        <div className="terminal-shortcuts-strip">
          <span className="shortcuts-label">QUICK COMMANDS:</span>
          {SUGGESTED_COMMANDS.map((cmd) => (
            <button
              key={cmd}
              type="button"
              className="cmd-pill-btn"
              onClick={() => runCommand(cmd)}
            >
              {cmd}
            </button>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Terminal;
