import { useState } from "react";
import { motion } from "motion/react";
import ProjectGraphic from "./ProjectGraphic";

function getDomainMeta(domain = "", category = "") {
  const d = (domain + " " + category).toLowerCase();
  if (d.includes("robot")) {
    return {
      label: "ROBOTICS",
      pillClass: "pill-yellow",
    };
  }
  if (d.includes("embed") || d.includes("hardware") || d.includes("iot")) {
    return {
      label: "EMBEDDED",
      pillClass: "pill-mint",
    };
  }
  if (d.includes("ai") || d.includes("ml") || d.includes("learning")) {
    return {
      label: "AI & ML",
      pillClass: "pill-lilac",
    };
  }
  return {
    label: "SOFTWARE",
    pillClass: "pill-sky",
  };
}

function ProjectCard({ project, index }) {
  const [imgError, setImgError] = useState(false);
  const prjNumber = `PRJ_${index + 1}`;
  const githubUrl = project.github || "https://github.com/Simplicity005";
  const domainMeta = getDomainMeta(project.domain, project.category);
  const hasImage = project.image && !imgError;

  return (
    <motion.a
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="neo-project-card"
      title={`View ${project.title} on GitHub`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{
        duration: 0.45,
        delay: (index % 3) * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* Thumbnail or Schematic Banner */}
      <div className="project-card-banner">
        {hasImage ? (
          <img
            src={project.image}
            alt={project.title}
            className="card-project-img"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <ProjectGraphic domain={project.domain} title={project.title} />
        )}
      </div>

      {/* Card Content Body */}
      <div className="project-card-body">
        <div className="card-top-row">
          <span className={`neo-pill ${domainMeta.pillClass}`}>
            {domainMeta.label}
          </span>
          <span className="micro-tech-tag">{prjNumber}</span>
        </div>

        <h3 className="card-title">{project.title}</h3>
        <p className="card-summary">{project.description}</p>

        {/* Tech tags */}
        {project.tags && (
          <div className="card-tags-list">
            {project.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="micro-tech-tag">#{tag}</span>
            ))}
          </div>
        )}

        <div className="card-action-bar">
          <span>View Repository</span>
          <span className="action-cta-arrow">↗</span>
        </div>
      </div>
    </motion.a>
  );
}

export default ProjectCard;
