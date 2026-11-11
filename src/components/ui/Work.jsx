import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { projects, categories } from "../../data/projectsData";
import ProjectCard from "./ProjectCard";

// Assign 12-column Bento span classes so every row fills the wide grid cleanly
function getBentoSpanClass(index, total, isPreview) {
  if (isPreview) {
    // 5 Featured Projects: Row 1 = 7 + 5, Row 2 = 4 + 4 + 4
    const previewSpans = [
      "bento-span-7 bento-featured-horizontal",
      "bento-span-5",
      "bento-span-4",
      "bento-span-4",
      "bento-span-4",
    ];
    return previewSpans[index] || "bento-span-4";
  }

  // Full Archive: adaptive 12-column Bento packing without orphan gaps
  if (total === 7) {
    const archive7Spans = [
      "bento-span-6",
      "bento-span-6",
      "bento-span-4",
      "bento-span-4",
      "bento-span-4",
      "bento-span-6",
      "bento-span-6",
    ];
    return archive7Spans[index];
  }
  if (total === 1) return "bento-span-12";
  if (total === 2) return "bento-span-6";
  if (total === 4) return "bento-span-6";
  return "bento-span-4";
}

function Work({ isPreview = false }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    if (isPreview) {
      const previewRepos = [
        "cv-guided-esp32-robot",
        "iisc-final-project-automated-car",
        "modular-home-security",
        "minimal-calendar",
        "3-10-30-rule-experiment",
      ];
      const previewSelection = previewRepos
        .map((repo) => projects.find((p) => p.repo === repo))
        .filter(Boolean);
      return previewSelection.length === 5 ? previewSelection : projects.slice(0, 5);
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
        {!isPreview && (
          <motion.div
            className="projects-back-bar"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to="/" className="back-link">
              <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12.5 8H3.5M3.5 8L7.5 4M3.5 8L7.5 12" />
              </svg>
              <span>Return Home</span>
            </Link>
          </motion.div>
        )}

        <motion.div
          className="bento-section-header"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="section-header-left">
            <span className="bento-index">
              {isPreview ? "02 // SELECTED WORK" : "01 // REPOSITORY ARCHIVE"}
            </span>
            <h2 className="section-heading">
              {isPreview ? "Featured Systems & Builds" : "All Repositories"}
            </h2>
          </div>

          {isPreview && (
            <Link to="/projects" className="btn-outline-mono">
              <span>View All ({projects.length})</span>
              <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12" />
              </svg>
            </Link>
          )}
        </motion.div>

        {!isPreview && (
          <motion.div
            className="projects-filter-bento"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="filter-tabs" role="tablist" aria-label="Project categories">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`filter-tab-btn ${isActive ? "active" : ""}`}
                    onClick={() => setSelectedCategory(cat.id)}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            <input
              type="search"
              className="filter-search-input"
              placeholder="Search repositories..."
              aria-label="Search repositories"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </motion.div>
        )}

        <div className="projects-bento-grid">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              spanClass={getBentoSpanClass(idx, filteredProjects.length, isPreview)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
