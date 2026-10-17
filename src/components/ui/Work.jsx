import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { projects, categories } from "../../data/projectsData";
import ProjectCard from "./ProjectCard";

function Work({ isPreview = false }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    if (isPreview) {
      return projects.slice(0, 3);
    }
    return projects.filter((p) => {
      const pCat = (p.category || "").toLowerCase();
      const pDomain = (p.domain || "").toLowerCase();
      const matchesCategory =
        selectedCategory === "all" ||
        pCat === selectedCategory.toLowerCase() ||
        pDomain.includes(selectedCategory.toLowerCase());
      const matchesSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.description || p.about || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.tags && p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesCategory && matchesSearch;
    });
  }, [isPreview, selectedCategory, searchQuery]);

  return (
    <section className={`work-section ${isPreview ? "work-preview-mode" : "work-full-page"}`} id="work">
      <div className="work-container">
        {/* Back navigation button when in full page mode */}
        {!isPreview && (
          <motion.div
            className="projects-back-bar"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link to="/" className="projects-back-link">
              <span className="back-arrow">←</span>
              <span>RETURN TO HOME</span>
            </Link>
            <span className="neo-tag neo-tag-teal">[ARCHIVE: {projects.length} PROJECTS]</span>
          </motion.div>
        )}

        {/* Section Header */}
        <motion.div
          className="section-header-block"
          initial={{ opacity: 0, y: isPreview ? 24 : 14 }}
          animate={!isPreview ? { opacity: 1, y: 0 } : undefined}
          whileInView={isPreview ? { opacity: 1, y: 0 } : undefined}
          viewport={isPreview ? { once: true, margin: "-40px" } : undefined}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-kicker">
            {isPreview ? "02 // PROJECTS" : "02 // REPOSITORY ARCHIVE"}
          </span>
          <h2 className="section-heading">
            {isPreview ? (
              <>
                Featured Projects &amp; <span>Systems.</span>
              </>
            ) : (
              <>
                All Projects &amp; <span>Systems.</span>
              </>
            )}
          </h2>
          {!isPreview && (
            <p className="projects-catalog-desc">
              Complete catalog of open-source architectures, embedded nodes, AI experiments, and web tools deployed across GitHub.
            </p>
          )}
        </motion.div>

        {/* Filter & Search Controls (Rendered on Full Page, or if not preview) */}
        {!isPreview && (
          <motion.div
            className="work-controls-strip"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="work-filter-tabs">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    className={`neo-filter-btn ${isActive ? "active" : ""}`}
                    onClick={() => setSelectedCategory(cat.id)}
                  >
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="work-search-wrapper">
              <input
                type="text"
                className="neo-input work-search-input"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Filter projects"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="search-clear-btn"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </motion.div>
        )}

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
            />
          ))}
        </div>

        {/* Empty state for search on full page */}
        {!isPreview && filteredProjects.length === 0 && (
          <div className="neo-window empty-results-window">
            <div className="empty-state-content">
              <span className="neo-tag">[EMPTY_QUERY]</span>
              <h3 className="empty-title">No matching projects</h3>
              <p className="empty-desc">
                No systems found matching "{searchQuery}".
              </p>
              <button
                type="button"
                className="neo-btn neo-btn-teal"
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
              >
                Reset Filters
              </button>
            </div>
          </div>
        )}

        {/* View More Action Strip on Homepage Preview */}
        {isPreview && (
          <motion.div
            className="work-view-more-container"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="view-more-banner">
              <div className="view-more-info">
                <div className="view-more-meta-pill">
                  <span className="meta-pulse-dot"></span>
                  <span className="meta-label">SHOWING 3 OF {projects.length} PROJECTS</span>
                </div>
                <h3 className="view-more-title">Looking for more architectures?</h3>
                <p className="view-more-summary">
                  Explore all {projects.length} repositories across robotics, machine learning, embedded firmware, and tools.
                </p>
              </div>

              <Link to="/projects" className="neo-btn neo-btn-teal view-more-cta-btn">
                <span>VIEW ALL PROJECTS ({projects.length})</span>
                <span className="btn-arrow">→</span>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default Work;
