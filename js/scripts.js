document.addEventListener('DOMContentLoaded', () => {
    // Inicialización de Google Maps
    const mapContainer = document.getElementById('map-container');
    const mapOptions = {
        center: { lat: -34.91823225801579, lng: -57.95464516308715 }, // Coordenadas de ejemplo
        zoom: 14
    };
    const map = new google.maps.Map(mapContainer, mapOptions);

    // Reseñas (puedes implementar más adelante si tienes una API)
    const reviewsContainer = document.getElementById('reviews-container');
    reviewsContainer.innerHTML = '<p>Aquí irán las reseñas del lugar.</p>';
});

document.addEventListener('DOMContentLoaded', () => {
    const headerHeight = document.querySelector('header').offsetHeight;

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - headerHeight,
                behavior: 'smooth'
            });
        });
    });
});
