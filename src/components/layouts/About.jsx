import { useScrollReveal } from "../../hooks/useScrollReveal";

const focusAreas = [
  "Full Stack Web Development",
  "UI/UX Design",
  "IoT & Hardware",
  "Machine Learning and AI",
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
              I'm Arjun (Simplicity or Simple Minded Moron) .I'm just a guy who
              loves design and loves to code. I don't have a degree in designing
              but I do love to try out new designs. I love working with hardware
              and software. I have worked with ESP32s, Arduinos and more. I love
              working with software too and I like to make it look good while I
              work on it. Currently a dual booter using Linux Mint and Windows.
              Open to try and learn new softwares or hardwares.
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
