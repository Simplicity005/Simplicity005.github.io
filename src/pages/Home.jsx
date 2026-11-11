import Navbar from "../components/layouts/Navbar";
import Hero from "../components/layouts/Hero";
import Work from "../components/ui/Work";
import Contact from "../components/layouts/Contact";
import Footer from "../components/layouts/Footer";

function Home() {
  return (
    <div className="portfolio-app-root">
      <Navbar />
      <Hero />
      <Work isPreview={true} />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
