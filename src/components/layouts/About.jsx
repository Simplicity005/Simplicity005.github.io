import React from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const focusAreas = [
  "Software Engineering",
  "UI/UX Design",
  "IoT & Hardware",
  "Applied Mathematics",
];

function About() {
  const revealRef = useScrollReveal();
  return (
    <section className="about-container" id="about">
      <div className="about-inner reveal-zoom" ref={revealRef}>
        <svg
          className="about-deco-asterisk"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.7,17l6.2,8.4L21.5,27l-5.5-8.7L10.5,27l-2.3-1.6l6.2-8.4l-9.3-2.4L6,12l9.1,3.2L14.5,5h3L17,15.2l9-3.2l0.8,2.7 L17.7,17z" />
        </svg>
        <div className="about-title-wrap">
          <span className="section-kicker">N° 01 &mdash; Intro</span>
          <h1 className="section-title">
            Say
            <br />
            who?
          </h1>
        </div>
        <div className="about-content">
          <div className="about-text-side">
            <p className="about-para">
              I'm Arjun. I write code that occasionally behaves and design
              interfaces with a Michelin-star aesthetic. When I'm not wiring up
              ESP32s for hardware hacks or falling down Linux Mint customization
              rabbit holes, you can find me shooting hoops or taking photos.
              Basically, I build cool stuff and make it look incredibly posh
              while doing it.
            </p>
            <span className="about-tags-kicker">Currently focused on</span>
            <div className="about-tags">
              {focusAreas.map((area) => (
                <span className="about-tag" key={area}>
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
