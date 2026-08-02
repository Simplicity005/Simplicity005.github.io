import { useEffect, useRef } from "react";

export function useScrollReveal() {
  const ref = useRef(null);

  useEffect(() => {
    let ticking = false;

    const updateScrollEffects = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const startFade = windowHeight * 0.9;
        const endFade = windowHeight * 0.3;

        let progress = (startFade - rect.top) / (startFade - endFade);
        progress = Math.min(Math.max(progress, 0), 1);

        const scale = 0.85 + 0.15 * progress;

        ref.current.style.opacity = progress;
        ref.current.style.transform = `scale(${scale})`;
      }
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateScrollEffects();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateScrollEffects);

    setTimeout(updateScrollEffects, 100);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateScrollEffects);
    };
  }, []);

  return ref;
}
