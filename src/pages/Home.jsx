import React from "react";
import Navbar from "../components/layout/Navbar";
import Background from "../components/layout/Background";
import Hero from "../components/ui/Hero";
import About from "../components/ui/About";
import Work from "../components/ui/Work";

const Home = () => {
  return (
    <>
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Work />
    </>
  );
};

export default Home;
