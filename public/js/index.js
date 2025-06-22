document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("background-audio");
  const botonMusica = document.getElementById("activar-musica");
  const botonSobre = document.getElementById("boton-sobre");

  // Detectar si es un dispositivo móvil
  const esMovil = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  // Mostrar botón solo si es móvil y no queremos usar el sobre como activador
  // botonMusica.style.display = esMovil ? "block" : "none";

  // Si se hace clic en el sobre, iniciar la música también
  if (botonSobre) {
    botonSobre.addEventListener("click", () => {
      audio.play().catch(err => console.log("Error al reproducir audio desde el botón sobre:", err));
    });
  }

  // Opción adicional si quieres dejar también el botón manual
  botonMusica.addEventListener("click", () => {
    audio.play().then(() => {
      botonMusica.style.display = "none";
    }).catch(err => {
      console.log("Error al reproducir desde botón manual:", err);
    });
  });

  // En escritorio, intenta reproducir automáticamente
  if (!esMovil) {
    audio.play().catch(err => console.log("Autoplay bloqueado en escritorio:", err));
  }
});
