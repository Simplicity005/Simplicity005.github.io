import { useEffect, useRef } from "react";
export function useScrollReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0) scale(1)";
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) {
      ref.current.style.opacity = 0;
      ref.current.style.transform = "translateY(30px) scale(0.98)";
      ref.current.style.transition = "all 1s cubic-bezier(0.22, 1, 0.36, 1)";
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);
  return ref;
}
