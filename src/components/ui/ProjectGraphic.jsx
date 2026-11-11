function ProjectGraphic({ domain = "software" }) {
  const d = domain.toLowerCase();

  if (d.includes("robot") || d.includes("embed") || d.includes("hardware") || d.includes("iot")) {
    return (
      <div className="card-graphic-banner" aria-hidden="true">
        <svg viewBox="0 0 400 220" className="graphic-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="110" r="70" stroke="rgba(255,255,255,0.16)" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="200" cy="110" r="40" stroke="rgba(255,255,255,0.22)" strokeWidth="1" />
          <circle cx="200" cy="110" r="3" fill="#ffffff" />
          <line x1="110" y1="110" x2="290" y2="110" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <line x1="200" y1="25" x2="200" y2="195" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <line x1="200" y1="110" x2="250" y2="62" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" />
          <circle cx="250" cy="62" r="2.5" fill="#ffffff" />
        </svg>
      </div>
    );
  }

  return (
    <div className="card-graphic-banner" aria-hidden="true">
      <svg viewBox="0 0 400 220" className="graphic-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="110" y="55" width="180" height="110" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <line x1="110" y1="80" x2="290" y2="80" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
        <line x1="130" y1="105" x2="210" y2="105" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
        <line x1="130" y1="125" x2="255" y2="125" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
        <line x1="130" y1="142" x2="185" y2="142" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
      </svg>
    </div>
  );
}

export default ProjectGraphic;
