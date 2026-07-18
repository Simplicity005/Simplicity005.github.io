import React from "react";

function ProjectCard({ project, isActive, onClick }) {
  return (
    <div className={`card ${isActive ? "active" : ""}`} onClick={onClick}>
      <div
        className="card-bg"
        style={{ backgroundImage: `url(${project.image})` }}
      ></div>
      <div className="card-content">
        <img className="card-img" src={project.image} alt={project.title} />
        <div className="text-content">
          <h2 className="card-title">{project.title}</h2>
          <p className="card-details">{project.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
