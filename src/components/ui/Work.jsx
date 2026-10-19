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
      const previewRepos = [
        "cv-guided-esp32-robot",
        "3-10-30-rule-experiment",
        "modular-home-security",
      ];
      const previewSelection = previewRepos
        .map((repo) => projects.find((p) => p.repo === repo))
        .filter(Boolean);
      return previewSelection.length === 3 ? previewSelection : projects.slice(0, 3);
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
    <section className="work-section" id="work">
      <div className="work-container">
        {/* Back navigation button when in full page mode */}
        {!isPreview && (
          <motion.div
            className="projects-back-bar"
            style={{ marginBottom: "24px", display: "flex", alignItems: "center", gap: "12px" }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link to="/" className="neo-btn neo-btn-sm neo-btn-white">
              <span>← RETURN TO HOME</span>
            </Link>
            <span className="neo-pill pill-yellow">{projects.length} REPOSITORIES ARCHIVED</span>
          </motion.div>
        )}

        {/* Section Header */}
        <motion.div
          className="section-header-block"
          initial={{ opacity: 0, y: isPreview ? 24 : 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-kicker">
            {isPreview ? "01 // PROJECTS" : "01 // REPOSITORY ARCHIVE"}
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
          <p className="section-desc">
            {isPreview
              ? "Open-source architectures, embedded firmware, and robotics built across GitHub."
              : "Complete archive of software and hardware repositories."}
          </p>
        </motion.div>

        {/* Filter Controls (Full page only) */}
        {!isPreview && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "32px", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    className={`neo-pill ${isActive ? "pill-yellow" : "pill-white"}`}
                    style={{ cursor: "pointer", padding: "6px 14px", fontSize: "0.78rem" }}
                    onClick={() => setSelectedCategory(cat.id)}
                  >
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            <input
              type="text"
              className="neo-input-box"
              style={{ width: "240px", padding: "8px 12px", fontSize: "0.82rem" }}
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
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

        {/* View More Callout Banner on Homepage Preview */}
        {isPreview && (
          <motion.div
            className="work-view-more-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="view-more-banner">
              <div>
                <h3 className="view-more-title">Looking for more systems?</h3>
                <p className="view-more-summary">
                  Explore all {projects.length} open-source repositories across robotics, microcontrollers, and web platforms.
                </p>
              </div>

              <Link to="/projects" className="neo-btn neo-btn-white">
                <span>VIEW ALL PROJECTS ({projects.length}) →</span>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default Work;
