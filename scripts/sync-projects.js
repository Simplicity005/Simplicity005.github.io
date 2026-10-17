import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const GITHUB_USERNAME = "Simplicity005";

// Default known repositories list
const KNOWN_REPOSITORIES = [
  "3-10-30-rule-experiment",
  "Assignment-ML-24204",
  "cv-guided-esp32-robot",
  "daily-ui-archive",
  "first-contributions",
  "iisc-final-project-automated-car",
  "minimal-calendar",
  "modular-home-security",
  "SimpleMindedMoron",
  "UID-Project",
  "Simplicity005.github.io"
];

// Helper to parse key-value about.txt format
function parseAboutText(rawText) {
  const result = {
    title: "",
    domain: "",
    tags: [],
    year: "2024",
    about: ""
  };

  const lines = rawText.split(/\r?\n/);
  let currentKey = null;
  let aboutLines = [];

  for (let line of lines) {
    const trimmed = line.trim();
    const titleMatch = trimmed.match(/^title:\s*(.*)$/i);
    const domainMatch = trimmed.match(/^domain:\s*(.*)$/i);
    const tagsMatch = trimmed.match(/^tags:\s*(.*)$/i);
    const yearMatch = trimmed.match(/^year:\s*(.*)$/i);
    const aboutMatch = trimmed.match(/^about:\s*(.*)$/i);

    if (titleMatch) {
      result.title = titleMatch[1].trim();
      currentKey = "title";
    } else if (domainMatch) {
      result.domain = domainMatch[1].trim();
      currentKey = "domain";
    } else if (tagsMatch) {
      result.tags = tagsMatch[1]
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);
      currentKey = "tags";
    } else if (yearMatch) {
      result.year = yearMatch[1].trim();
      currentKey = "year";
    } else if (aboutMatch) {
      currentKey = "about";
      if (aboutMatch[1].trim()) {
        aboutLines.push(aboutMatch[1].trim());
      }
    } else if (currentKey === "about" && trimmed.length > 0) {
      aboutLines.push(trimmed);
    }
  }

  result.about = aboutLines.join(" ").trim();
  return result;
}

// Map domain string to category ID for filter tabs
function deriveCategory(domain = "") {
  const d = domain.toLowerCase();
  if (d.includes("robot") || d.includes("embed") || d.includes("hardware") || d.includes("iot")) {
    return "robotics";
  }
  if (d.includes("ai") || d.includes("ml") || d.includes("machine") || d.includes("simulation")) {
    return "ai";
  }
  return "software";
}

// Pick fallback image key based on domain
function getFallbackImage(domain = "") {
  const cat = deriveCategory(domain);
  if (cat === "robotics") return "robotics";
  return "optimization";
}

async function fetchFile(url) {
  try {
    const res = await fetch(url);
    if (res.ok) {
      return await res.text();
    }
  } catch (err) {
    // Ignore fetch error
  }
  return null;
}

async function downloadImage(url, destPath) {
  try {
    const res = await fetch(url);
    if (res.ok) {
      const buffer = await res.arrayBuffer();
      fs.writeFileSync(destPath, Buffer.from(buffer));
      return true;
    }
  } catch (err) {
    // Ignore download error
  }
  return false;
}

async function syncProjects() {
  console.log(`\n========================================`);
  console.log(`   SYNCING PROJECTS FOR @${GITHUB_USERNAME}`);
  console.log(`========================================\n`);

  let repoList = [...KNOWN_REPOSITORIES];

  // Try fetching public repositories from GitHub API if token or limit allows
  try {
    const headers = { "User-Agent": "Portfolio-Sync-Script" };
    if (process.env.GITHUB_TOKEN) {
      headers["Authorization"] = `token ${process.env.GITHUB_TOKEN}`;
    }
    const apiRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`, { headers });
    if (apiRes.ok) {
      const repos = await apiRes.json();
      if (Array.isArray(repos)) {
        const fetchedNames = repos.map((r) => r.name);
        for (const name of fetchedNames) {
          if (!repoList.includes(name)) {
            repoList.push(name);
          }
        }
        console.log(`Discovered ${fetchedNames.length} repos from GitHub API.`);
      }
    }
  } catch (e) {
    console.log("GitHub API request skipped, using repository manifest.");
  }

  const projectsDir = path.join(rootDir, "public", "projects");
  if (!fs.existsSync(projectsDir)) {
    fs.mkdirSync(projectsDir, { recursive: true });
  }

  const syncedProjects = [];
  const imageExtensions = ["png", "jpg", "jpeg", "webp", "svg"];
  const imageFilenames = [
    "cover",
    "preview",
    "image",
    "thumbnail",
    "banner",
    "About",
    "about"
  ];

  for (let i = 0; i < repoList.length; i++) {
    const repo = repoList[i];
    process.stdout.write(`Scanning [${repo}]... `);

    let rawAboutText = null;

    // Check if this is the current local portfolio repo
    if (repo.toLowerCase() === "simplicity005.github.io" || repo.toLowerCase() === "simplemindedmoron.github.io") {
      const localAboutPath = path.join(rootDir, "About", "about.txt");
      if (fs.existsSync(localAboutPath)) {
        rawAboutText = fs.readFileSync(localAboutPath, "utf8");
      }
    }

    // Try fetching from raw.githubusercontent for main and master branches
    if (!rawAboutText) {
      const branches = ["main", "master"];
      const filenames = ["About/about.txt", "About/About.txt", "about/about.txt"];

      for (const branch of branches) {
        for (const fn of filenames) {
          const url = `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repo}/${branch}/${fn}`;
          const text = await fetchFile(url);
          if (text) {
            rawAboutText = text;
            break;
          }
        }
        if (rawAboutText) break;
      }
    }

    if (
      (repo.toLowerCase() === "simplemindedmoron.github.io" && syncedProjects.some((p) => p.repo.toLowerCase() === "simplicity005.github.io")) ||
      (repo.toLowerCase() === "simplicity005.github.io" && syncedProjects.some((p) => p.repo.toLowerCase() === "simplemindedmoron.github.io"))
    ) {
      console.log(`[SKIPPED - Duplicate portfolio repo]`);
      continue;
    }

    if (!rawAboutText) {
      console.log(`[SKIPPED - No About/about.txt found]`);
      continue;
    }

    const parsed = parseAboutText(rawAboutText);
    if (!parsed.title) {
      parsed.title = repo.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    }

    // Check for images in About folder
    let localImagePath = null;
    for (const name of imageFilenames) {
      for (const ext of imageExtensions) {
        const remoteImgUrl = `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repo}/main/About/${name}.${ext}`;
        const destFile = path.join(projectsDir, `${repo}.${ext}`);

        const downloaded = await downloadImage(remoteImgUrl, destFile);
        if (downloaded) {
          localImagePath = `/projects/${repo}.${ext}`;
          break;
        }
      }
      if (localImagePath) break;
    }

    const domain = parsed.domain || "Software";
    const category = deriveCategory(domain);
    const fallbackImage = getFallbackImage(domain);

    const projectEntry = {
      id: syncedProjects.length + 1,
      repo,
      title: parsed.title,
      domain: domain,
      category: category,
      description: parsed.about || "Explore architecture and code repository on GitHub.",
      about: parsed.about,
      tags: parsed.tags.length > 0 ? parsed.tags : [domain, "GitHub"],
      year: parsed.year || "2024",
      image: localImagePath,
      fallbackImage: fallbackImage,
      github: `https://github.com/${GITHUB_USERNAME}/${repo}`,
    };

    syncedProjects.push(projectEntry);
    console.log(`✓ SYNCED ("${parsed.title}" [${domain}])`);
  }

  // Save to src/data/projectsData.json
  const outputPath = path.join(rootDir, "src", "data", "projectsData.json");
  fs.writeFileSync(outputPath, JSON.stringify(syncedProjects, null, 2), "utf8");

  console.log(`\n========================================`);
  console.log(`Successfully synced ${syncedProjects.length} projects!`);
  console.log(`Saved output to ${path.relative(rootDir, outputPath)}`);
  console.log(`========================================\n`);
}

syncProjects().catch((err) => {
  console.error("Sync error:", err);
  process.exit(1);
});
