import React, { useState } from "react";
import { projects } from "../../data/projectsData";
import ProjectCard from "./ProjectCard";
import { useScrollReveal } from "../../hooks/useScrollReveal";
function Work() {
  const [activeId, setActiveId] = useState(projects[0].id);
  const revealRef = useScrollReveal();
  return (
    <section className="project-container" id="work">
      <div className="project-inner" ref={revealRef}>
        <h1 className="project-title">Selected Works.</h1>
        <div className="carousel">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isActive={activeId === project.id}
              onClick={() => setActiveId(project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Work;
