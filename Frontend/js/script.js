document.addEventListener("DOMContentLoaded", () => {
  const interBubble = document.querySelector(".interactive");
  let curX = 0;
  let curY = 0;
  let tgX = 0;
  let tgY = 0;

  window.addEventListener("mousemove", (event) => {
    // Target positions are adjusted based on cursor position
    tgX = event.clientX;
    tgY = event.clientY;
  });

  function move() {
    // Easing calculations: 20 is the divider controlling the lagging fluidity
    curX += (tgX - curX) / 80;
    curY += (tgY - curY) / 80;

    // Apply transform coordinates to the interactive element
    interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;

    requestAnimationFrame(() => {
      move();
    });
  }

  move();
});
