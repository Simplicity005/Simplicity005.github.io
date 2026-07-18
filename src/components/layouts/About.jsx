import React from "react";

function About() {
  return (
    <section className="about-container" id="about">
      <div className="about-inner" id="about-inner">
        <h1 className="section-title about-title">
          About
          <br />
          Me
        </h1>
        <div className="about-content">
          <div className="about-text-side">
            <p className="about-para">
              I'm Arjun, a developer who enjoys building clean, functional
              things on the web. I like turning ideas into interactive
              experiences, whether that's a slick UI, a fun side project, or
              solving a tricky problem with code. When I'm not building, I'm
              probably exploring something new to learn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
