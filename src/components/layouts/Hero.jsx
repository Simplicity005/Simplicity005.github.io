import React, { useEffect, useRef } from "react";
import Socials from "../ui/Socials";
import Asterisk from "../ui/Asterisk";
import linkedinIcon from "../../assets/images/linkedin.png";
import instagramIcon from "../../assets/images/instagram.png";
import heroPhoto from "../../assets/images/1000027072 (1).png";
function Hero() {
  const heroRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      let heroOpacity = 1 - scrollY / (windowHeight * 0.6);
      if (heroRef.current) {
        heroRef.current.style.opacity = Math.max(heroOpacity, 0);
        heroRef.current.style.transform = `translateY(${scrollY * 0.15}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <main className="hero-container" id="hero" ref={heroRef}>
      <div className="text-side">
        <h3 id="top-text" className="load-anim item-1">
          Hi! I am
        </h3>
        <h1 id="name-center" className="load-anim item-2">
          Arjun Sanesh.
        </h1>
        <div className="asterisk-socials load-anim item-3">
          <h5 id="asterisk-explanation">* Interesting fella</h5>
          <div className="socials">
            <Socials
              link="https://www.linkedin.com/in/arjun-sanesh/"
              imgURL={linkedinIcon}
              alt="LinkedIn"
            />
            <Socials
              link="https://www.instagram.com"
              imgURL={instagramIcon}
              alt="Instagram"
            />
          </div>
        </div>
      </div>
      <div className="image-side load-anim item-4">
        <Asterisk />
        <div className="image-container" id="hero-photo-slot">
          <img src={heroPhoto} alt="Arjun Sanesh" />
        </div>
      </div>
    </main>
  );
}
export default Hero;
