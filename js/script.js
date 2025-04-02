document.addEventListener('DOMContentLoaded', () => {
  // Selecciona el contenedor del carrusel de noticias (si es que se necesita para alguna funcionalidad adicional)
  const newsCarousel = document.querySelector('.news-carousel');

  // Función para desplazar el carrusel a la derecha (ejemplo, en caso de agregar botones)
  function scrollRight() {
    newsCarousel.scrollBy({ left: 320, behavior: 'smooth' });
  }
  
  // Función para desplazar el carrusel a la izquierda
  function scrollLeft() {
    newsCarousel.scrollBy({ left: -320, behavior: 'smooth' });
  }

  // Eventos para botones se pueden agregar si se desean:
  // document.querySelector('.btn-right').addEventListener('click', scrollRight);
  // document.querySelector('.btn-left').addEventListener('click', scrollLeft);
});
