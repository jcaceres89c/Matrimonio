document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("background-audio");
  const boton = document.getElementById("activar-musica");

  // Mostrar botón solo en dispositivos móviles
  const esMovil = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (esMovil) {
    boton.style.display = "block";
  } else {
    // En computadoras intenta reproducir automáticamente
    audio.play().catch(err => console.log("Autoplay bloqueado en escritorio:", err));
  }

  // Función para iniciar la música
  function iniciarMusica() {
    audio.play().then(() => {
      boton.style.display = "none";
      document.removeEventListener("click", iniciarMusica);
      document.removeEventListener("touchstart", iniciarMusica);
    }).catch(err => {
      console.log("Error al reproducir el audio:", err);
    });
  }

  boton.addEventListener("click", iniciarMusica);
  document.addEventListener("click", iniciarMusica);
  document.addEventListener("touchstart", iniciarMusica);
});
