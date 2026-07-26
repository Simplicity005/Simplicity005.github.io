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
        <div className="asterisk-big">
          <svg
            version="1.1"
            id="svg2"
            xmlns:dc="http://purl.org/dc/elements/1.1/"
            xmlns:cc="http://creativecommons.org/ns#"
            xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
            xmlns:svg="http://www.w3.org/2000/svg"
            xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
            xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
            sodipodi:docname="asterisk.svg"
            inkscape:version="0.48.4 r9939"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="256px"
            height="256px"
            viewBox="0 0 1200.00 1200.00"
            enable-background="new 0 0 1200 1200"
            xml:space="preserve"
            fill="#00adb5"
            stroke="#00adb5"
            transform="rotate(0)"
            stroke-width="0.012"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke="#000000"
              stroke-width="21.6"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <sodipodi:namedview
                inkscape:cy="448"
                inkscape:cx="-67.796606"
                inkscape:zoom="0.26339286"
                showgrid="false"
                id="namedview3175"
                guidetolerance="10"
                gridtolerance="10"
                objecttolerance="10"
                borderopacity="1"
                bordercolor="#666666"
                pagecolor="#ffffff"
                inkscape:current-layer="svg2"
                inkscape:window-maximized="1"
                inkscape:window-y="24"
                inkscape:window-height="876"
                inkscape:window-width="1535"
                inkscape:pageshadow="2"
                inkscape:pageopacity="0"
                inkscape:window-x="65"
              >
                {" "}
              </sodipodi:namedview>{" "}
              <path
                id="path3756"
                inkscape:connector-curvature="0"
                d="M489.838,29.354v443.603L68.032,335.894L0,545.285l421.829,137.086 l-260.743,358.876l178.219,129.398L600.048,811.84l260.673,358.806l178.146-129.398L778.101,682.465L1200,545.379l-68.032-209.403 l-421.899,137.07V29.443H489.84L489.838,29.354z"
              ></path>{" "}
            </g>
          </svg>
        </div>
        <div className="image-container" id="hero-photo-slot">
          <img src="src/assets/images/1000027072 (1).png" alt="Arjun Sanesh" />
        </div>
      </div>
    </main>
  );
}

export default Hero;
