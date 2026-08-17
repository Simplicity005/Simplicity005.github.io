import { useEffect, useRef } from "react";
import "../../styles/styles.css";

function Background() {
  const interBubbleRef = useRef(null);

  useEffect(() => {
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;
    let animationFrameId;

    const onMouseMove = (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };

    const moveBlob = () => {
      curX += (tgX - curX) / 80;
      curY += (tgY - curY) / 80;
      if (interBubbleRef.current) {
        interBubbleRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      }
      animationFrameId = requestAnimationFrame(moveBlob);
    };

    window.addEventListener("mousemove", onMouseMove);
    moveBlob();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="gradient-bg">
      <div className="gradients-container">
        <div className="g1"></div>
        <div className="g2"></div>
        <div className="g3"></div>
        <div className="g4"></div>
        <div className="g5"></div>
        <div className="interactive" ref={interBubbleRef}></div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default Background;
