import { useState } from "react";
import { motion } from "motion/react";
import ProjectGraphic from "./ProjectGraphic";

function ProjectCard({ project, index, spanClass = "bento-span-4" }) {
  const [imgError, setImgError] = useState(false);
  const githubUrl = project.github || "https://github.com/Simplicity005";
  const hasImage = project.image && !imgError;
  const formattedIndex = String(index + 1).padStart(2, "0");

  return (
    <motion.a
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`bento-cell project-bento-card ${spanClass}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{
        duration: 0.45,
        delay: (index % 3) * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="project-card-media">
        {hasImage ? (
          <img
            src={project.image}
            alt={project.title}
            className="card-project-img"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <ProjectGraphic domain={project.domain} />
        )}
        <span className="card-index-badge">{formattedIndex}</span>
      </div>

      <div className="project-card-body">
        <div className="card-meta-row">
          <span className="card-domain">{project.domain}</span>
          <span className="card-year">{project.year || "2024"}</span>
        </div>

        <div className="card-title-row">
          <h3 className="card-title">{project.title}</h3>
          <span className="card-external-icon" aria-hidden="true">
            <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4.5 11.5L11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5" />
            </svg>
          </span>
        </div>

        <p className="card-summary">{project.description}</p>

        {project.tags && project.tags.length > 0 && (
          <div className="card-tags-list">
            {project.tags.slice(0, 4).map((tag) => (
              <span key={tag} className="tech-tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.a>
  );
}

export default ProjectCard;
