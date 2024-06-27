document.addEventListener("DOMContentLoaded", function() {
    const leyendaImages = document.querySelectorAll('.leyenda-img');

    leyendaImages.forEach(img => {
        img.addEventListener('click', () => {
            alert('Imagen de leyenda');
        });
    });
});
