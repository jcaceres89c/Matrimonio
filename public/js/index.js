const myAudio = document.getElementById("background-audio");

function iniciarAudio() {
  myAudio.play().catch(e => console.log("Error al intentar reproducir el audio:", e));
  document.removeEventListener("click", iniciarAudio);
  document.removeEventListener("touchstart", iniciarAudio);
}

document.addEventListener("click", iniciarAudio);
document.addEventListener("touchstart", iniciarAudio);
