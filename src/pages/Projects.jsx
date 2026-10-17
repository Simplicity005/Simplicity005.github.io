import { useEffect } from "react";
import Navbar from "../components/layouts/Navbar";
import Work from "../components/ui/Work";
import Footer from "../components/layouts/Footer";

function Projects() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <div className="portfolio-app-root projects-page-root">
      <Navbar />
      <main className="projects-page-main">
        <Work isPreview={false} />
      </main>
      <Footer />
    </div>
  );
}

export default Projects;
