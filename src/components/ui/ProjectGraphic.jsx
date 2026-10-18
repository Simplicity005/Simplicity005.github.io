function ProjectGraphic({ domain = "software", title = "" }) {
  const d = domain.toLowerCase();

  if (d.includes("robot")) {
    return (
      <div className="card-graphic-banner graphic-robotics" aria-hidden="true">
        <svg viewBox="0 0 400 200" className="graphic-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Radar Background Grid */}
          <circle cx="200" cy="100" r="85" stroke="rgba(245, 158, 11, 0.15)" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="200" cy="100" r="55" stroke="rgba(245, 158, 11, 0.25)" strokeWidth="1" />
          <circle cx="200" cy="100" r="25" stroke="rgba(245, 158, 11, 0.4)" strokeWidth="1.2" />
          
          {/* Crosshairs & Vectors */}
          <line x1="100" y1="100" x2="300" y2="100" stroke="rgba(245, 158, 11, 0.2)" strokeWidth="1" />
          <line x1="200" y1="10" x2="200" y2="190" stroke="rgba(245, 158, 11, 0.2)" strokeWidth="1" />
          <line x1="200" y1="100" x2="270" y2="40" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 2" />

          {/* Telemetry Obstacles / LiDAR Points */}
          <circle cx="240" cy="65" r="3" fill="#fbbf24" />
          <circle cx="265" cy="80" r="2.5" fill="#f59e0b" />
          <circle cx="160" cy="70" r="3" fill="#f59e0b" />
          <circle cx="145" cy="130" r="2" fill="#fbbf24" />
          <circle cx="225" cy="140" r="3.5" fill="#f59e0b" />
          <circle cx="200" cy="100" r="4" fill="#fbbf24" />

          {/* Coordinate Frame Arrows */}
          <path d="M200 100 L200 80 M197 84 L200 78 L203 84" stroke="#fbbf24" strokeWidth="1.5" />
          <path d="M200 100 L220 100 M216 97 L222 100 L216 103" stroke="#f59e0b" strokeWidth="1.5" />

          {/* HUD Tech Overlay */}
          <text x="18" y="30" fill="#f59e0b" fontFamily="monospace" fontSize="9" fontWeight="700" letterSpacing="0.08em">SYS: ROS2_ODOM_NODE</text>
          <text x="18" y="44" fill="rgba(245, 158, 11, 0.6)" fontFamily="monospace" fontSize="8">RATE: 50Hz // LiDAR_2D</text>
          <text x="320" y="180" fill="rgba(245, 158, 11, 0.6)" fontFamily="monospace" fontSize="8" textAnchor="end">FRAME: BASE_LINK</text>
        </svg>
        <div className="graphic-badge badge-robotics">ROBOTICS TELEMETRY</div>
      </div>
    );
  }

  if (d.includes("embed") || d.includes("hardware") || d.includes("iot")) {
    return (
      <div className="card-graphic-banner graphic-embedded" aria-hidden="true">
        <svg viewBox="0 0 400 200" className="graphic-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Microcontroller IC Package */}
          <rect x="150" y="55" width="100" height="90" rx="3" fill="#131e18" stroke="#10b981" strokeWidth="1.5" />
          <circle cx="165" cy="70" r="3" fill="#10b981" />
          
          {/* Chip Label */}
          <text x="200" y="98" fill="#34d399" fontFamily="monospace" fontSize="10" fontWeight="700" textAnchor="middle">ESP32_MCU</text>
          <text x="200" y="114" fill="rgba(52, 211, 153, 0.7)" fontFamily="monospace" fontSize="7.5" textAnchor="middle">FREE_RTOS // 240MHz</text>

          {/* Pinout Traces Left */}
          <line x1="80" y1="70" x2="150" y2="70" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="1.2" />
          <circle cx="78" cy="70" r="2.5" fill="#10b981" />
          <line x1="80" y1="90" x2="150" y2="90" stroke="#10b981" strokeWidth="1.2" />
          <circle cx="78" cy="90" r="2.5" fill="#34d399" />
          <line x1="80" y1="110" x2="150" y2="110" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="1.2" />
          <circle cx="78" cy="110" r="2.5" fill="#10b981" />
          <line x1="80" y1="130" x2="150" y2="130" stroke="#10b981" strokeWidth="1.2" />
          <circle cx="78" cy="130" r="2.5" fill="#34d399" />

          {/* Pinout Traces Right */}
          <line x1="250" y1="70" x2="320" y2="70" stroke="#10b981" strokeWidth="1.2" />
          <circle cx="322" cy="70" r="2.5" fill="#34d399" />
          <line x1="250" y1="90" x2="320" y2="90" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="1.2" />
          <circle cx="322" cy="90" r="2.5" fill="#10b981" />
          <line x1="250" y1="110" x2="320" y2="110" stroke="#10b981" strokeWidth="1.2" />
          <circle cx="322" cy="110" r="2.5" fill="#34d399" />
          <line x1="250" y1="130" x2="320" y2="130" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="1.2" />
          <circle cx="322" cy="130" r="2.5" fill="#10b981" />

          {/* Circuit Grid Details */}
          <text x="18" y="30" fill="#10b981" fontFamily="monospace" fontSize="9" fontWeight="700" letterSpacing="0.08em">BUS: SPI / I2C / MQTT</text>
          <text x="18" y="44" fill="rgba(16, 185, 129, 0.6)" fontFamily="monospace" fontSize="8">INTERRUPT: IRAM_ATTR</text>
          <text x="382" y="180" fill="rgba(16, 185, 129, 0.6)" fontFamily="monospace" fontSize="8" textAnchor="end">SYS_CLOCK: 40MHz_XTAL</text>
        </svg>
        <div className="graphic-badge badge-embedded">HARDWARE CIRCUIT</div>
      </div>
    );
  }

  if (d.includes("ai") || d.includes("ml") || d.includes("learning")) {
    return (
      <div className="card-graphic-banner graphic-ai" aria-hidden="true">
        <svg viewBox="0 0 400 200" className="graphic-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Neural / Network Mesh */}
          <line x1="120" y1="70" x2="200" y2="50" stroke="rgba(167, 139, 250, 0.25)" strokeWidth="1" />
          <line x1="120" y1="70" x2="200" y2="100" stroke="rgba(139, 92, 246, 0.35)" strokeWidth="1" />
          <line x1="120" y1="70" x2="200" y2="150" stroke="rgba(167, 139, 250, 0.2)" strokeWidth="1" />

          <line x1="120" y1="130" x2="200" y2="50" stroke="rgba(167, 139, 250, 0.2)" strokeWidth="1" />
          <line x1="120" y1="130" x2="200" y2="100" stroke="rgba(139, 92, 246, 0.35)" strokeWidth="1" />
          <line x1="120" y1="130" x2="200" y2="150" stroke="rgba(167, 139, 250, 0.25)" strokeWidth="1" />

          <line x1="200" y1="50" x2="280" y2="80" stroke="rgba(167, 139, 250, 0.35)" strokeWidth="1.2" />
          <line x1="200" y1="100" x2="280" y2="80" stroke="#a78bfa" strokeWidth="1.5" />
          <line x1="200" y1="100" x2="280" y2="130" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1" />
          <line x1="200" y1="150" x2="280" y2="130" stroke="#8b5cf6" strokeWidth="1.2" />

          {/* Input Layer Nodes */}
          <circle cx="120" cy="70" r="5" fill="#8b5cf6" />
          <circle cx="120" cy="130" r="5" fill="#a78bfa" />

          {/* Hidden Layer Nodes */}
          <circle cx="200" cy="50" r="5" fill="#a78bfa" />
          <circle cx="200" cy="100" r="6" fill="#c4b5fd" />
          <circle cx="200" cy="150" r="5" fill="#8b5cf6" />

          {/* Output Layer Nodes */}
          <circle cx="280" cy="80" r="6" fill="#c4b5fd" />
          <circle cx="280" cy="130" r="5" fill="#a78bfa" />

          {/* Pulse Waves */}
          <circle cx="200" cy="100" r="14" stroke="rgba(196, 181, 253, 0.35)" strokeWidth="1" strokeDasharray="2 2" />

          {/* Math & Simulation Annotations */}
          <text x="18" y="30" fill="#a78bfa" fontFamily="monospace" fontSize="9" fontWeight="700" letterSpacing="0.08em">MODEL: NETWORK_SIMULATION</text>
          <text x="18" y="44" fill="rgba(167, 139, 250, 0.6)" fontFamily="monospace" fontSize="8">LOSS: 0.0014 // P-VALUE: &lt;0.01</text>
          <text x="382" y="180" fill="rgba(167, 139, 250, 0.6)" fontFamily="monospace" fontSize="8" textAnchor="end">ALGO: BARABÁSI_ALBERT</text>
        </svg>
        <div className="graphic-badge badge-ai">MACHINE INTELLIGENCE</div>
      </div>
    );
  }

  // Default: Software & Systems
  return (
    <div className="card-graphic-banner graphic-software" aria-hidden="true">
      <svg viewBox="0 0 400 200" className="graphic-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Wireframe UI Blocks */}
        <rect x="80" y="45" width="240" height="110" rx="4" fill="#0f1923" stroke="#38bdf8" strokeWidth="1.2" />
        <line x1="80" y1="65" x2="320" y2="65" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1" />
        
        {/* Window controls */}
        <circle cx="95" cy="55" r="3" fill="#38bdf8" />
        <circle cx="106" cy="55" r="3" fill="rgba(56, 189, 248, 0.5)" />
        <circle cx="117" cy="55" r="3" fill="rgba(56, 189, 248, 0.3)" />

        {/* Code Blocks / Wireframe Elements */}
        <rect x="95" y="80" width="70" height="22" rx="2" fill="rgba(56, 189, 248, 0.12)" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1" />
        <rect x="175" y="80" width="130" height="22" rx="2" fill="rgba(56, 189, 248, 0.08)" stroke="rgba(56, 189, 248, 0.25)" strokeWidth="1" />
        <rect x="95" y="112" width="210" height="30" rx="2" fill="rgba(56, 189, 248, 0.06)" stroke="rgba(56, 189, 248, 0.2)" strokeWidth="1" />

        {/* Dynamic Syntax Accents */}
        <text x="18" y="30" fill="#38bdf8" fontFamily="monospace" fontSize="9" fontWeight="700" letterSpacing="0.08em">ARCH: REACT_REACTIVE_VITE</text>
        <text x="18" y="44" fill="rgba(56, 189, 248, 0.6)" fontFamily="monospace" fontSize="8">PROTOCOL: NEXT_SUPABASE</text>
        <text x="382" y="180" fill="rgba(56, 189, 248, 0.6)" fontFamily="monospace" fontSize="8" textAnchor="end">LATENCY: &lt;16ms (60FPS)</text>
      </svg>
      <div className="graphic-badge badge-software">SYSTEM ARCHITECTURE</div>
    </div>
  );
}

export default ProjectGraphic;
