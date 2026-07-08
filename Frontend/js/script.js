document.addEventListener("DOMContentLoaded", () => {
  const interBubble = document.querySelector(".interactive");
  let curX = 0;
  let curY = 0;
  let tgX = 0;
  let tgY = 0;

  window.addEventListener("mousemove", (event) => {
    tgX = event.clientX;
    tgY = event.clientY;
  });

  function move() {
    curX += (tgX - curX) / 80;
    curY += (tgY - curY) / 80;

    interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;

    requestAnimationFrame(() => {
      move();
    });
  }

  move();
});
