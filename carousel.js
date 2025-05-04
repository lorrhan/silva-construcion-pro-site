document.querySelectorAll('.carousel-image').forEach(img => {
    img.addEventListener('click', () => {
        img.scrollIntoView({ behavior: 'smooth', inline: 'center' });
    });
});
