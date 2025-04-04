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
  
// Testeo en linea
const guildID = '1356324389326426286'; // Reemplaza con el ID real de tu servidor

fetch(`https://discord.com/api/guilds/${guildID}/widget.json`)
  .then(response => response.json())
  .then(data => {
    // Muestra el número de usuarios online
    document.getElementById('online-count2').textContent = data.presence_count;0
    // Puedes extraer otros datos y mostrarlos según tu necesidad
  })
  .catch(error => {
    console.error('Error al cargar el widget de Discord:', error);
    document.getElementById('online-count2').textContent = 'Error';
  });
// Testeo en linea