import React from "react";
import Navbar from "../components/layouts/Navbar";
import Background from "../components/layouts/Background";
import Hero from "../components/layouts/Hero";
import About from "../components/layouts/About";
import Work from "../components/ui/Work";

function Home() {
  return (
    <>
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Work />
    </>
  );
}

export default Home;
