document.addEventListener("DOMContentLoaded", function() {
    const carouselUsuariosItems = document.querySelectorAll(".carousel-usuarios .carousel-item");
    const carouselCreadoresItems = document.querySelectorAll(".carousel-creadores .carousel-item");
    const controlUsuarios = document.querySelector(".control-usuarios");
    const controlCreadores = document.querySelector(".control-creadores");

    let currentUsuariosIndex = 0;
    let currentCreadoresIndex = 0;
    let usuariosInterval;
    let creadoresInterval;

    function showNextUsuariosItem() {
        carouselUsuariosItems[currentUsuariosIndex].style.display = "none";
        currentUsuariosIndex = (currentUsuariosIndex + 1) % carouselUsuariosItems.length;
        carouselUsuariosItems[currentUsuariosIndex].style.display = "block";
    }

    function showNextCreadoresItem() {
        carouselCreadoresItems[currentCreadoresIndex].style.display = "none";
        currentCreadoresIndex = (currentCreadoresIndex + 1) % carouselCreadoresItems.length;
        carouselCreadoresItems[currentCreadoresIndex].style.display = "block";
    }

    function startUsuariosCarousel() {
        clearInterval(creadoresInterval);
        carouselCreadoresItems.forEach(item => item.style.display = "none");
        carouselUsuariosItems[currentUsuariosIndex].style.display = "block";
        usuariosInterval = setInterval(showNextUsuariosItem, 10000);
    }

    function startCreadoresCarousel() {
        clearInterval(usuariosInterval);
        carouselUsuariosItems.forEach(item => item.style.display = "none");
        carouselCreadoresItems[currentCreadoresIndex].style.display = "block";
        creadoresInterval = setInterval(showNextCreadoresItem, 10000);
    }

    // Iniciar carrusel de usuarios por defecto
    startUsuariosCarousel();

    // Control de botones
    controlUsuarios.addEventListener("click", startUsuariosCarousel);
    controlCreadores.addEventListener("click", startCreadoresCarousel);
});
