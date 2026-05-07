document.addEventListener('mousemove', (e) => {
    const bg = document.getElementById('bg-pattern');
    
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