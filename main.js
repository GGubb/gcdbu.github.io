// --- Navegación por secciones ---
document.querySelectorAll('[data-section]').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const target = e.target.getAttribute('data-section');

    if (target === "inicio") {
      // Volvemos al inicio con scroll
      document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
      document.getElementById("inicio").style.display = "block";
    } else {
      // Ocultamos inicio y mostramos solo la sección pedida
      document.getElementById("inicio").style.display = "none";
      document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
      document.getElementById(target).classList.add('active');
    }
  });
});

// --- Carrusel con flechas ---
document.querySelectorAll('.carousel-wrapper').forEach(wrapper => {
  const carousel = wrapper.querySelector('.carousel');
  const prevBtn = wrapper.querySelector('.prev');
  const nextBtn = wrapper.querySelector('.next');
  const scrollAmount = 300; // píxeles a desplazar por click

  // Botón anterior
  prevBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  // Botón siguiente
  nextBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
});

// --- Modal de imágenes ---
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");
const spanClose = document.querySelector(".modal .close");

// Abrir modal al hacer click en una imagen
document.querySelectorAll('.carousel img').forEach(img => {
  img.addEventListener('click', () => {
    modal.classList.add("show");
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
  });
});

// Cerrar modal con la X
spanClose.addEventListener('click', () => {
  modal.classList.remove("show");
});

// Cerrar modal haciendo click fuera de la imagen
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});

// Cerrar modal con la tecla Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("show")) {
    modal.classList.remove("show");
  }
});

