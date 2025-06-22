document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("background-audio");
  const botonSobre = document.getElementById("boton-sobre");

  botonSobre.addEventListener("click", (e) => {
    e.preventDefault(); // Prevenir navegación inmediata

    // Iniciar la música
    audio.play()
      .then(() => {
        // Esperar un pequeño momento antes de redirigir
        setTimeout(() => {
          window.location.href = botonSobre.getAttribute("href");
        }, 100); // 100ms para asegurar que se dispare el audio
      })
      .catch(err => {
        console.log("Error al reproducir audio:", err);
        window.location.href = botonSobre.getAttribute("href"); // Redirigir de todas formas
      });
  });
});
