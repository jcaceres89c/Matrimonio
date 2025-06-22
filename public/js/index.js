<script>
  document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("background-audio");
    const boton = document.getElementById("activar-musica");

    function reproducirAudio() {
      if (audio.paused) {
        audio.play().catch((e) => {
          console.warn("Error al reproducir el audio:", e);
        });
      }
      boton.style.display = "none";
      document.removeEventListener("click", reproducirAudio);
      document.removeEventListener("touchstart", reproducirAudio);
    }

    // Mostrar botón si el dispositivo es táctil
    if (/Android|iPhone|iPad/i.test(navigator.userAgent)) {
      boton.style.display = "block";
    }

    // Activar por clic o toque
    boton.addEventListener("click", reproducirAudio);
    document.addEventListener("click", reproducirAudio);
    document.addEventListener("touchstart", reproducirAudio);
  });
</script>
