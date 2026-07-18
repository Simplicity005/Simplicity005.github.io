import React, { useState } from "react";
import { projects } from "../../data/projectsData";
import ProjectCard from "./ProjectCard";

function Work() {
  const [activeId, setActiveId] = useState(projects[0].id);

  return (
    <section className="project-container" id="work">
      <div className="project-inner" id="project-inner">
        <h1 className="project-title">My Work</h1>
        <div className="carousel">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
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
