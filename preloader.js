// Create the overlay and SVG elements
const overlay = document.createElement('div');
overlay.id = 'loader';
overlay.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 999;
`;

const svgImage = document.createElement('img');
svgImage.id = 'svgImage';
// ⚡ Ajout d’un paramètre anti-cache pour relancer l’anim à chaque refresh
svgImage.src = 'https://cdn.jsdelivr.net/gh/okid-app/preloader/preload.svg?v=' + Date.now();

// ⚡ Style responsive (corrigé pour mobile)
svgImage.style.cssText = `
    width: 80vw;       /* prend 80% de la largeur de l’écran */
    max-width: 400px;  /* limite max sur desktop */
    height: auto;      /* conserve les proportions */
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
svgImage.style.display = 'none';

// Append the elements to the body
document.body.appendChild(overlay);
document.body.appendChild(svgImage);

// Function to hide the overlay and display the SVG
function hideOverlay() {
    overlay.style.display = 'none';
    svgImage.style.display = 'block';
}

// Add an event listener to hide the overlay when all external JS files are loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(hideOverlay, 100); // Replace with your actual loading code.
});

// Fallback: If all external resources are loaded and the DOMContentLoaded event doesn't fire,
// we'll still hide the overlay when the window's load event is triggered.
window.addEventListener('load', hideOverlay);
