<script>
  document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("background-audio");
    const boton = document.getElementById("activar-musica");

    // Mostrar el botón SOLO si es móvil
    if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      boton.style.display = "block";
    } else {
      // En computadoras reproducir directamente
      audio.play().catch(err => console.log("No se pudo reproducir automáticamente:", err));
    }

    // Función para reproducir el audio cuando se toca
    function iniciarMusica() {
      audio.play().then(() => {
        boton.style.display = "none";
        document.removeEventListener("click", iniciarMusica);
        document.removeEventListener("touchstart", iniciarMusica);
      }).catch((e) => {
        console.log("Error al reproducir música:", e);
      });
    }

    boton.addEventListener("click", iniciarMusica);
    document.addEventListener("click", iniciarMusica);
    document.addEventListener("touchstart", iniciarMusica);
  });
</script>
