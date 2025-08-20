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
