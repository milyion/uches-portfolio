// Optional: You can add functionality for a lightbox effect when clicking on images
const images = document.querySelectorAll('.gallery-image');

images.forEach(image => {
    image.addEventListener('click', () => {
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        const img = document.createElement('img');
        img.src = image.src;
        overlay.appendChild(img);
        document.body.appendChild(overlay);

        overlay.addEventListener('click', () => {
            document.body.removeChild(overlay);
        });
    });
});