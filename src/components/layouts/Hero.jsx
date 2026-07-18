import React from "react";
import Socials from "../ui/Socials";

function Hero() {
  return (
    <main className="hero-container" id="hero">
      <div className="text-side">
        <h3 id="top-text" className="load-anim item-1">
          Hi, I am
        </h3>
        <h1 id="name-center" className="load-anim item-2">
          Arjun Sanesh
        </h1>
        <div className="asterisk-socials load-anim item-3">
          <h5 id="asterisk-explanation">* Interesting fella</h5>
          <div className="socials">
            <Socials
              link="https://www.linkedin.com/in/arjun-sanesh/"
              imgURL="src/assets/images/linkedin.png"
              alt="linkedIn_Image"
            />
            <Socials
              link="https://www.instagram.com"
              imgURL="src/assets/images/instagram.png"
              alt="instagram_Image"
            />
          </div>
        </div>
      </div>
      <div className="image-side load-anim item-4">
        <h1 className="asterisk-big">*</h1>
        <div className="image-container" id="hero-photo-slot">
          <img src="../assets/images/1000027072 (1).png" alt="Arjun Sanesh" />
        </div>
      </div>
    </main>
  );
}

export default Hero;
