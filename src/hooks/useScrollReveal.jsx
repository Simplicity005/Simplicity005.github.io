import { useEffect, useRef } from "react";
export function useScrollReveal({ once = true } = {}) {
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("in-view");
          if (once) observer.unobserve(node);
        } else if (!once) {
          node.classList.remove("in-view");
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);
  return ref;
}
