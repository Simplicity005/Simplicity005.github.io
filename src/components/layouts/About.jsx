import React from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
function About() {
  const revealRef = useScrollReveal();
  return (
    <section className="about-container" id="about">
      <div className="about-inner" ref={revealRef}>
        <h1 className="section-title">
          Say<br />
          who?
        </h1>
        <div className="about-content">
          <div className="about-text-side">
            <p className="about-para">
              I'm Arjun. I write code that occasionally behaves and design interfaces with a Michelin-star aesthetic. When I'm not wiring up ESP32s for hardware hacks or falling down Linux Mint customization rabbit holes, you can find me shooting hoops or taking photos. Basically, I build cool stuff and make it look incredibly posh while doing it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
