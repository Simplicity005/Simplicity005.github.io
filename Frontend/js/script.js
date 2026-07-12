document.addEventListener("DOMContentLoaded", () => {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  window.scrollTo(0, 0);

  const interBubble = document.querySelector(".interactive");
  let curX = 0;
  let curY = 0;
  let tgX = 0;
  let tgY = 0;

  window.addEventListener("mousemove", (event) => {
    tgX = event.clientX;
    tgY = event.clientY;
  });

  function moveBlob() {
    curX += (tgX - curX) / 80;
    curY += (tgY - curY) / 80;
    interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
    requestAnimationFrame(moveBlob);
  }
  moveBlob();

  const navbar = document.getElementById("navbar");
  const hero = document.getElementById("hero");
  const aboutInner = document.getElementById("about-inner");

  function updateScrollEffects() {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    if (scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    let heroOpacity = 1 - scrollY / (windowHeight * 0.6);
    hero.style.opacity = Math.max(heroOpacity, 0);
    hero.style.transform = `translateY(${scrollY * 0.25}px)`;

    if (aboutInner) {
      const aboutRect = aboutInner.getBoundingClientRect();
      const aboutStartFade = windowHeight * 0.9;
      const aboutEndFade = windowHeight * 0.3;

      let aboutProgress =
        (aboutStartFade - aboutRect.top) / (aboutStartFade - aboutEndFade);
      aboutProgress = Math.min(Math.max(aboutProgress, 0), 1);

      const aboutScale = 0.85 + 0.15 * aboutProgress;

      aboutInner.style.opacity = aboutProgress;
      aboutInner.style.transform = `scale(${aboutScale})`;
    }
  }

  let ticking = false;

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateScrollEffects();
        ticking = false;
      });
      ticking = true;
    }
  }

  function onResize() {
    updateScrollEffects();
  }

  setTimeout(() => {
    updateScrollEffects();
  }, 100);

  window.addEventListener("load", () => {
    updateScrollEffects();
  });

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onResize);
});
