document.addEventListener("mousemove", (e) => {
  const bg = document.getElementById("bg-pattern");

  // Get mouse position
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  // Calculate how far the mouse is from the center of the screen
  // We divide by 50 to make the movement subtle (lower = more movement)
  const moveX = (window.innerWidth / 2 - mouseX) / 50;
  const moveY = (window.innerHeight / 2 - mouseY) / 50;

  // Apply the transformation
  bg.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  const scrollPosition = window.scrollY;

  // The distance (in pixels) over which the navbar becomes fully opaque.
  // 300px means it starts at 0% opacity at the top, and hits 100% opacity 300px down.
  const maxScroll = 300;

  // Calculate alpha ratio between 0 and 1
  let alpha = scrollPosition / maxScroll;

  // Cap the alpha value at 1 so it doesn't break when scrolling deep down
  if (alpha > 1) {
    alpha = 1;
  }

  // Apply the calculated opacity directly to your #081c15 green color (8, 28, 21 in RGB)
  navCenter.style.backgroundColor = `rgb(244, 241, 222)`;

  // Dynamic shadow: only fade in the shadow tracking the opacity level
  if (alpha > 0.1) {
    navbar.style.borderBottom = `3px solid rgba(0, 0, 0, ${alpha * 3})`;
  } else {
    navbar.style.borderBottom = "none";
  }
});
