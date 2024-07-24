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
