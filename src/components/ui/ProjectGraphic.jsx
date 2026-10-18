function ProjectGraphic({ domain = "software", title = "" }) {
  const d = domain.toLowerCase();

  if (d.includes("robot")) {
    return (
      <div className="card-graphic-banner" style={{ background: "#FEF9C3" }} aria-hidden="true">
        <svg viewBox="0 0 400 200" className="graphic-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Radar Background Grid */}
          <circle cx="200" cy="100" r="85" stroke="#000000" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.3" />
          <circle cx="200" cy="100" r="55" stroke="#000000" strokeWidth="1.5" opacity="0.4" />
          <circle cx="200" cy="100" r="25" stroke="#000000" strokeWidth="2" />
          
          {/* Crosshairs & Vectors */}
          <line x1="80" y1="100" x2="320" y2="100" stroke="#000000" strokeWidth="1.5" opacity="0.3" />
          <line x1="200" y1="15" x2="200" y2="185" stroke="#000000" strokeWidth="1.5" opacity="0.3" />
          <line x1="200" y1="100" x2="270" y2="45" stroke="#D97706" strokeWidth="2.5" strokeDasharray="5 3" />

          {/* Telemetry Obstacles / LiDAR Points */}
          <circle cx="240" cy="65" r="4.5" fill="#D97706" stroke="#000" strokeWidth="1.5" />
          <circle cx="265" cy="80" r="4" fill="#B45309" stroke="#000" strokeWidth="1.5" />
          <circle cx="160" cy="70" r="4.5" fill="#D97706" stroke="#000" strokeWidth="1.5" />
          <circle cx="145" cy="130" r="3.5" fill="#F59E0B" stroke="#000" strokeWidth="1.5" />
          <circle cx="225" cy="140" r="4.5" fill="#D97706" stroke="#000" strokeWidth="1.5" />
          <circle cx="200" cy="100" r="5" fill="#F59E0B" stroke="#000" strokeWidth="2" />

          {/* Coordinate Frame Arrows */}
          <path d="M200 100 L200 75 M196 80 L200 73 L204 80" stroke="#000000" strokeWidth="2" />
          <path d="M200 100 L225 100 M220 96 L227 100 L220 104" stroke="#000000" strokeWidth="2" />

          {/* HUD Tech Overlay */}
          <text x="20" y="32" fill="#000000" fontFamily="monospace" fontSize="10" fontWeight="800">SYS: ROS2_ODOM_NODE</text>
          <text x="20" y="48" fill="#4B5563" fontFamily="monospace" fontSize="9" fontWeight="700">RATE: 50Hz // LiDAR_2D</text>
          <text x="380" y="180" fill="#4B5563" fontFamily="monospace" fontSize="9" fontWeight="700" textAnchor="end">FRAME: BASE_LINK</text>
        </svg>
      </div>
    );
  }

  if (d.includes("embed") || d.includes("hardware") || d.includes("iot")) {
    return (
      <div className="card-graphic-banner" style={{ background: "#D1FAE5" }} aria-hidden="true">
        <svg viewBox="0 0 400 200" className="graphic-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Microcontroller IC Package */}
          <rect x="145" y="50" width="110" height="100" rx="6" fill="#FFFFFF" stroke="#000000" strokeWidth="2.5" />
          <circle cx="160" cy="65" r="4" fill="#059669" stroke="#000" strokeWidth="1.5" />
          
          {/* Chip Label */}
          <text x="200" y="96" fill="#000000" fontFamily="monospace" fontSize="11" fontWeight="800" textAnchor="middle">ESP32_MCU</text>
          <text x="200" y="114" fill="#059669" fontFamily="monospace" fontSize="9" fontWeight="700" textAnchor="middle">FREE_RTOS // 240MHz</text>

          {/* Pinout Traces Left */}
          <line x1="75" y1="65" x2="145" y2="65" stroke="#000000" strokeWidth="2" />
          <circle cx="75" cy="65" r="3.5" fill="#059669" stroke="#000" strokeWidth="1.5" />
          <line x1="75" y1="88" x2="145" y2="88" stroke="#000000" strokeWidth="2" />
          <circle cx="75" cy="88" r="3.5" fill="#10B981" stroke="#000" strokeWidth="1.5" />
          <line x1="75" y1="112" x2="145" y2="112" stroke="#000000" strokeWidth="2" />
          <circle cx="75" cy="112" r="3.5" fill="#059669" stroke="#000" strokeWidth="1.5" />
          <line x1="75" y1="135" x2="145" y2="135" stroke="#000000" strokeWidth="2" />
          <circle cx="75" cy="135" r="3.5" fill="#10B981" stroke="#000" strokeWidth="1.5" />

          {/* Pinout Traces Right */}
          <line x1="255" y1="65" x2="325" y2="65" stroke="#000000" strokeWidth="2" />
          <circle cx="325" cy="65" r="3.5" fill="#10B981" stroke="#000" strokeWidth="1.5" />
          <line x1="255" y1="88" x2="325" y2="88" stroke="#000000" strokeWidth="2" />
          <circle cx="325" cy="88" r="3.5" fill="#059669" stroke="#000" strokeWidth="1.5" />
          <line x1="255" y1="112" x2="325" y2="112" stroke="#000000" strokeWidth="2" />
          <circle cx="325" cy="112" r="3.5" fill="#10B981" stroke="#000" strokeWidth="1.5" />
          <line x1="255" y1="135" x2="325" y2="135" stroke="#000000" strokeWidth="2" />
          <circle cx="325" cy="135" r="3.5" fill="#059669" stroke="#000" strokeWidth="1.5" />

          {/* Circuit Grid Details */}
          <text x="20" y="32" fill="#000000" fontFamily="monospace" fontSize="10" fontWeight="800">BUS: SPI / I2C / MQTT</text>
          <text x="20" y="48" fill="#4B5563" fontFamily="monospace" fontSize="9" fontWeight="700">INTERRUPT: IRAM_ATTR</text>
          <text x="380" y="180" fill="#4B5563" fontFamily="monospace" fontSize="9" fontWeight="700" textAnchor="end">SYS_CLOCK: 40MHz_XTAL</text>
        </svg>
      </div>
    );
  }

  if (d.includes("ai") || d.includes("ml") || d.includes("learning")) {
    return (
      <div className="card-graphic-banner" style={{ background: "#EDE9FE" }} aria-hidden="true">
        <svg viewBox="0 0 400 200" className="graphic-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Neural Connections */}
          <line x1="120" y1="70" x2="200" y2="50" stroke="#000000" strokeWidth="1.5" opacity="0.3" />
          <line x1="120" y1="70" x2="200" y2="100" stroke="#000000" strokeWidth="1.5" opacity="0.4" />
          <line x1="120" y1="70" x2="200" y2="150" stroke="#000000" strokeWidth="1.5" opacity="0.3" />

          <line x1="120" y1="130" x2="200" y2="50" stroke="#000000" strokeWidth="1.5" opacity="0.3" />
          <line x1="120" y1="130" x2="200" y2="100" stroke="#000000" strokeWidth="1.5" opacity="0.4" />
          <line x1="120" y1="130" x2="200" y2="150" stroke="#000000" strokeWidth="1.5" opacity="0.3" />

          <line x1="200" y1="50" x2="280" y2="80" stroke="#000000" strokeWidth="2" />
          <line x1="200" y1="100" x2="280" y2="80" stroke="#7C3AED" strokeWidth="2.5" />
          <line x1="200" y1="100" x2="280" y2="130" stroke="#000000" strokeWidth="2" />
          <line x1="200" y1="150" x2="280" y2="130" stroke="#7C3AED" strokeWidth="2.5" />

          {/* Input Layer Nodes */}
          <circle cx="120" cy="70" r="7" fill="#A78BFA" stroke="#000000" strokeWidth="2" />
          <circle cx="120" cy="130" r="7" fill="#C4B5FD" stroke="#000000" strokeWidth="2" />

          {/* Hidden Layer Nodes */}
          <circle cx="200" cy="50" r="7" fill="#C4B5FD" stroke="#000000" strokeWidth="2" />
          <circle cx="200" cy="100" r="8" fill="#7C3AED" stroke="#000000" strokeWidth="2" />
          <circle cx="200" cy="150" r="7" fill="#A78BFA" stroke="#000000" strokeWidth="2" />

          {/* Output Layer Nodes */}
          <circle cx="280" cy="80" r="8" fill="#7C3AED" stroke="#000000" strokeWidth="2" />
          <circle cx="280" cy="130" r="7" fill="#C4B5FD" stroke="#000000" strokeWidth="2" />

          {/* Math & Simulation Annotations */}
          <text x="20" y="32" fill="#000000" fontFamily="monospace" fontSize="10" fontWeight="800">MODEL: NETWORK_SIMULATION</text>
          <text x="20" y="48" fill="#4B5563" fontFamily="monospace" fontSize="9" fontWeight="700">LOSS: 0.0014 // P-VALUE: &lt;0.01</text>
          <text x="380" y="180" fill="#4B5563" fontFamily="monospace" fontSize="9" fontWeight="700" textAnchor="end">ALGO: BARABÁSI_ALBERT</text>
        </svg>
      </div>
    );
  }

  // Default: Software & Systems
  return (
    <div className="card-graphic-banner" style={{ background: "#E0F2FE" }} aria-hidden="true">
      <svg viewBox="0 0 400 200" className="graphic-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Wireframe UI Blocks */}
        <rect x="75" y="40" width="250" height="120" rx="8" fill="#FFFFFF" stroke="#000000" strokeWidth="2.5" />
        <line x1="75" y1="65" x2="325" y2="65" stroke="#000000" strokeWidth="2" />
        
        {/* Window controls */}
        <circle cx="92" cy="52" r="3.5" fill="#EF4444" stroke="#000" strokeWidth="1" />
        <circle cx="104" cy="52" r="3.5" fill="#F59E0B" stroke="#000" strokeWidth="1" />
        <circle cx="116" cy="52" r="3.5" fill="#10B981" stroke="#000" strokeWidth="1" />

        {/* Code Blocks / Wireframe Elements */}
        <rect x="92" y="80" width="75" height="24" rx="4" fill="#BAE6FD" stroke="#000000" strokeWidth="1.5" />
        <rect x="177" y="80" width="132" height="24" rx="4" fill="#F1F5F9" stroke="#000000" strokeWidth="1.5" />
        <rect x="92" y="114" width="217" height="32" rx="4" fill="#F8FAFC" stroke="#000000" strokeWidth="1.5" />

        {/* Dynamic Syntax Accents */}
        <text x="20" y="32" fill="#000000" fontFamily="monospace" fontSize="10" fontWeight="800">ARCH: REACT_REACTIVE_VITE</text>
        <text x="20" y="48" fill="#4B5563" fontFamily="monospace" fontSize="9" fontWeight="700">PROTOCOL: NEXT_SUPABASE</text>
        <text x="380" y="180" fill="#4B5563" fontFamily="monospace" fontSize="9" fontWeight="700" textAnchor="end">LATENCY: &lt;16ms (60FPS)</text>
      </svg>
    </div>
  );
}

export default ProjectGraphic;
