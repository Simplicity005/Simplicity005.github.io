import syncedProjects from "./projectsData.json";

export const categories = [
  { id: "all", label: "All Projects" },
  { id: "robotics", label: "Robotics & Embedded" },
  { id: "ai", label: "AI & ML" },
  { id: "software", label: "Software & Systems" },
];

export const projects = syncedProjects.map((p, idx) => {
  return {
    ...p,
    id: p.id || idx + 1,
    image: p.image || null,
    category: p.category || "software",
    domain: p.domain || "Software",
    title: p.title,
    description: p.about || p.description,
    tags: p.tags || [],
    github: p.github || `https://github.com/Simplicity005/${p.repo || ""}`,
    year: p.year || "2024",
  };
});
