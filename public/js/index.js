document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("background-audio");

  function iniciarAudio() {
    if (audio.paused) {
      audio.play().catch((e) => {
        console.log("Error al reproducir audio:", e);
      });
    }
    // Eliminar listeners una vez activado
    document.removeEventListener("click", iniciarAudio);
    document.removeEventListener("touchstart", iniciarAudio);
  }

  document.addEventListener("click", iniciarAudio);
  document.addEventListener("touchstart", iniciarAudio);
});
