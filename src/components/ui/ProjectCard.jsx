import { motion } from "motion/react";
import ProjectGraphic from "./ProjectGraphic";

function getDomainMeta(domain = "", category = "") {
  const d = (domain + " " + category).toLowerCase();
  if (d.includes("robot")) {
    return {
      type: "robotics",
      accent: "#f59e0b",
      accentRgb: "245, 158, 11",
      badgeClass: "badge-robotics",
    };
  }
  if (d.includes("embed") || d.includes("hardware") || d.includes("iot")) {
    return {
      type: "embedded",
      accent: "#10b981",
      accentRgb: "16, 185, 129",
      badgeClass: "badge-embedded",
    };
  }
  if (d.includes("ai") || d.includes("ml") || d.includes("learning")) {
    return {
      type: "ai",
      accent: "#8b5cf6",
      accentRgb: "139, 92, 246",
      badgeClass: "badge-ai",
    };
  }
  return {
    type: "software",
    accent: "#38bdf8",
    accentRgb: "56, 189, 248",
    badgeClass: "badge-software",
  };
}

function ProjectCard({ project, index }) {
  const prjNumber = `PRJ_${index + 1}`;
  const githubUrl = project.github || "https://github.com/Simplicity005";
  const domainMeta = getDomainMeta(project.domain, project.category);

  return (
    <motion.a
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`neo-window interactive-project-card project-card-link card-${domainMeta.type}`}
      style={{
        "--domain-accent": domainMeta.accent,
        "--domain-accent-rgb": domainMeta.accentRgb,
      }}
      title={`Inspect ${project.title} on GitHub`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{
        duration: 0.45,
        delay: (index % 3) * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* Titlebar with automatic PRJ_ index and semantic domain badge */}
      <div className="neo-titlebar project-card-titlebar">
        <div className="neo-titlebar-left">
          <span className="neo-titlebar-dot"></span>
          <span className="neo-titlebar-text prj-index-text">{prjNumber}</span>
        </div>
        <span className={`card-cat-badge-simple ${domainMeta.badgeClass}`}>
          {project.domain || project.category}
        </span>
      </div>

      {/* Card Image Thumbnail OR Rich Domain Graphic */}
      <div className="card-image-wrap">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="card-project-img"
            loading="lazy"
          />
        ) : (
          <ProjectGraphic domain={project.domain} title={project.title} />
        )}
      </div>

      {/* Card Content Body */}
      <div className="card-content-body">
        <h3 className="card-heading">{project.title}</h3>
        <p className="card-summary">{project.description}</p>

        {/* Clean Tech Badges with # prefix */}
        {project.tags && (
          <div className="card-tags-list">
            {project.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="neo-tag card-tag-pill">
                <span className="tag-hash">#</span>{tag}
              </span>
            ))}
          </div>
        )}

        <div className="card-action-bar">
          <span className="card-cta-label">Inspect Architecture</span>
          <span className="card-cta-arrow">↗</span>
        </div>
      </div>
    </motion.a>
  );
}

export default ProjectCard;
