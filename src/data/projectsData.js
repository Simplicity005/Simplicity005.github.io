import syncedProjects from "./projectsData.json";

export const categories = [
  { id: "all", label: "All Projects" },
  { id: "robotics", label: "Robotics & Embedded" },
  { id: "ai", label: "AI & ML" },
  { id: "software", label: "Software & Systems" },
];

const resolveImagePath = (imgPath) => {
  if (!imgPath) return null;
  if (imgPath.startsWith("http://") || imgPath.startsWith("https://")) return imgPath;
  const base = import.meta.env.BASE_URL || "./";
  const cleanBase = base.endsWith("/") ? base : `${base}/`;
  const cleanPath = imgPath.startsWith("/") ? imgPath.slice(1) : imgPath;
  return `${cleanBase}${cleanPath}`;
};

export const projects = syncedProjects.map((p, idx) => {
  return {
    ...p,
    id: p.id || idx + 1,
    image: p.image ? resolveImagePath(p.image) : null,
    category: p.category || "software",
    domain: p.domain || "Software",
    title: p.title,
    description: p.about || p.description,
    tags: p.tags || [],
    github: p.github || `https://github.com/Simplicity005/${p.repo || ""}`,
    year: p.year || "2024",
  };
});
