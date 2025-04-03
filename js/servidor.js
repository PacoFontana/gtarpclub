document.addEventListener('DOMContentLoaded', () => {
    // Ejemplo de funcionalidad click-and-drag para el carrusel de videos (si se desea)
    const videoCarousel = document.querySelector('.video-carousel');
    let isDown = false;
    let startX;
    let scrollLeft;
  
    videoCarousel.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - videoCarousel.offsetLeft;
      scrollLeft = videoCarousel.scrollLeft;
    });
  
    videoCarousel.addEventListener('mouseleave', () => {
      isDown = false;
    });
  
    videoCarousel.addEventListener('mouseup', () => {
      isDown = false;
    });
  
    videoCarousel.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - videoCarousel.offsetLeft;
      const walk = (x - startX) * 1.5;
      videoCarousel.scrollLeft = scrollLeft - walk;
    });
  });
  