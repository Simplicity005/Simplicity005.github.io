document.addEventListener("DOMContentLoaded", () => {
  /* ---------- Interactive gradient blob (follows cursor) ---------- */
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

  /* ---------- Navbar translucency on scroll ---------- */
  const navbar = document.getElementById("navbar");

  function updateNavbar() {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  /* ---------- Hero photo -> About photo scroll transition ---------- */
  const heroSlot = document.getElementById("hero-photo-slot");
  const aboutSlot = document.getElementById("about-photo-slot");
  const floatingPhoto = document.getElementById("floatingPhoto");

  let startRect = null;
  let endRect = null;
  let progressEnd = 1;

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  // Measures where the two ghost slots sit in the DOCUMENT (not viewport),
  // so the math stays correct no matter where you've scrolled to.
  function measure() {
    const heroBox = heroSlot.getBoundingClientRect();
    const aboutBox = aboutSlot.getBoundingClientRect();
    const scrollY = window.scrollY;

    startRect = {
      top: heroBox.top + scrollY,
      left: heroBox.left,
      width: heroBox.width,
      height: heroBox.height,
    };

    endRect = {
      top: aboutBox.top + scrollY,
      left: aboutBox.left,
      width: aboutBox.width,
      height: aboutBox.height,
    };

    // The transition finishes a bit before the about photo would
    // naturally reach the top of the screen. Tweak 0.55 to taste
    // (higher = transition finishes earlier while scrolling).
    progressEnd = Math.max(endRect.top - window.innerHeight * 1, 1);
  }

  function updateFloatingPhoto() {
    const scrollY = window.scrollY;
    let progress = scrollY / progressEnd;
    progress = Math.min(Math.max(progress, 0), 1);

    // smoothstep easing for a nicer glide
    const eased = progress * progress * (3 - 2 * progress);

    const docTop = lerp(startRect.top, endRect.top, eased);
    const left = lerp(startRect.left, endRect.left, eased);
    const width = lerp(startRect.width, endRect.width, eased);
    const height = lerp(startRect.height, endRect.height, eased);

    floatingPhoto.style.top = docTop - scrollY + "px";
    floatingPhoto.style.left = left + "px";
    floatingPhoto.style.width = width + "px";
    floatingPhoto.style.height = height + "px";
  }

  let ticking = false;
  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateNavbar();
        updateFloatingPhoto();
        ticking = false;
      });
      ticking = true;
    }
  }

  function onResize() {
    measure();
    updateFloatingPhoto();
  }

  measure();
  updateNavbar();
  updateFloatingPhoto();

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onResize);
});
