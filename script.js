// Custom cursor
const cursor = document.getElementById('cursor');
let mouseX = 0, mouseY = 0;
let idleTimer;

document.addEventListener('mousemove', (e) => {
    // Update cursor position
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
    
    // Reset idle timer
    clearTimeout(idleTimer);
    document.body.classList.remove('idle');
    
    // Start idle timer (5 seconds)
    idleTimer = setTimeout(() => {
        document.body.classList.add('idle');
        cursor.textContent = '⚡️'; // Flash when idle
    }, 5000);
});

// Smooth cursor trail effect
function animateCursor() {
    cursor.style.transform = `translate(${mouseX / 20}px, ${mouseY / 20}px) scale(1)`;
    requestAnimationFrame(animateCursor);
}
animateCursor();

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
