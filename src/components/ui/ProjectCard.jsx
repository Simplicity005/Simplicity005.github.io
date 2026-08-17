function ProjectCard({ project, index, isActive, onClick }) {
  const formattedIndex = String(index + 1).padStart(2, "0");
  return (
    <div className={`card ${isActive ? "active" : ""}`} onClick={onClick}>
      <div
        className="card-bg"
        style={{ backgroundImage: `url(${project.image})` }}
      ></div>
      <div className="card-content">
        <div className="text-content">
          <span className="card-index">N° {formattedIndex}</span>
          <h2 className="card-title">{project.title}</h2>
          <p className="card-details">{project.description}</p>
          {project.tags && (
            <div className="card-tags">
              {project.tags.map((tag) => (
                <span className="card-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;
