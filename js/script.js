document.addEventListener('DOMContentLoaded', () => {
  // Cambio automático de texto en la sección Hero
  const texts = [
    "LA COMUNIDAD DEFINITIVA SOBRE GTARP EN CONSOLA",
    "CONTRIBUYE JUNTO A MAS DE 2500 USUARIOS",
    "APOYANDO ESTE NICHO DESDE 2023"
  ];
  let currentIndex = 0;
  const textElement = document.getElementById("changing-text");
  const dots = document.querySelectorAll("#text-dots .dot");

  // Función para actualizar el texto y los puntitos
  function updateText() {
    textElement.textContent = texts[currentIndex];
    dots.forEach((dot, index) => {
      dot.style.opacity = index === currentIndex ? "1" : "0.5";
    });
  }
  
  // Inicializa el primer estado
  updateText();
  
  setInterval(() => {
    currentIndex = (currentIndex + 1) % texts.length;
    updateText();
  }, 5000);

  // Carrusel de Noticias (funciones de ejemplo si se requieren botones)
  const newsCarousel = document.querySelector('.news-carousel');

  function scrollRight() {
    newsCarousel.scrollBy({ left: 320, behavior: 'smooth' });
  }
  
  function scrollLeft() {
    newsCarousel.scrollBy({ left: -320, behavior: 'smooth' });
  }

  // Eventos para botones se pueden agregar si se desean:
  // document.querySelector('.btn-right').addEventListener('click', scrollRight);
  // document.querySelector('.btn-left').addEventListener('click', scrollLeft);
});

// Funcionalidad de click-and-drag para el carrusel de "Nuestra Comunidad"
document.addEventListener('DOMContentLoaded', () => { 
  const slider = document.querySelector('.community-cards');
  let isDown = false;
  let startX;
  let scrollLeft;

  // Para evitar selección de texto, ya lo añadimos en CSS
  // y también se previene en el evento de movimiento.

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active'); // Opcional: para cambiar el cursor o estilo
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    e.preventDefault(); // Prevenir selección de texto
  });

  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    // Ajusta el multiplicador a 1.5 para suavizar el movimiento
    const walk = (x - startX) * 1.5;
    slider.scrollLeft = scrollLeft - walk;
  });

  // Funcionalidad touch para móviles
  slider.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('touchend', () => {
    isDown = false;
  });

  slider.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5;
    slider.scrollLeft = scrollLeft - walk;
  });
});
