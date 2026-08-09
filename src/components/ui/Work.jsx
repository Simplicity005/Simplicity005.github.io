import React, { useState } from "react";
import { projects } from "../../data/projectsData";
import ProjectCard from "./ProjectCard";
import { useScrollReveal } from "../../hooks/useScrollReveal";

function Work() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const revealRef = useScrollReveal();

  const goTo = (nextIndex, dir) => {
    const wrapped = (nextIndex + projects.length) % projects.length;
    setDirection(dir);
    setActiveIndex(wrapped);
  };

  const activeProject = projects[activeIndex];

  return (
    <section className="project-container" id="work">
      <div className="project-inner reveal-zoom" ref={revealRef}>
        <div className="project-title-row">
          <h1 className="project-title">Selected Works.</h1>
          {/* Will link through to a dedicated projects page once it exists */}
          <button
            type="button"
            className="project-title-arrow"
            aria-label="View all projects"
            title="Projects page — coming soon"
          >
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Desktop: full carousel, click any card to expand it */}
        <div className="carousel">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isActive={index === activeIndex}
              onClick={() => goTo(index, index > activeIndex ? "next" : "prev")}
            />
          ))}
        </div>

        {/* Mobile: one project at a time, slides in on prev/next */}
        <div className="carousel-mobile">
          <div
            className={`carousel-mobile-track slide-${direction}`}
            key={activeProject.id}
          >
            <ProjectCard
              project={activeProject}
              index={activeIndex}
              isActive={true}
              onClick={() => {}}
            />
          </div>
        </div>

        <div className="carousel-nav">
          <button
            type="button"
            className="carousel-nav-btn"
            onClick={() => goTo(activeIndex - 1, "prev")}
            aria-label="Previous project"
          >
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M15 6l-6 6 6 6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <span className="carousel-nav-count">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </span>
          <button
            type="button"
            className="carousel-nav-btn"
            onClick={() => goTo(activeIndex + 1, "next")}
            aria-label="Next project"
          >
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M9 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
export default Work;
