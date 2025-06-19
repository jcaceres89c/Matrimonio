// js/confirmacion.js
document.addEventListener("DOMContentLoaded", async () => {
  const boton = document.querySelector(".boton-confirmar");
  const modal = document.getElementById("modal-nombre");
  const cancelar = document.getElementById("cancelar-modal");
  const enviar = document.getElementById("enviar-nombre");
  const input = document.getElementById("nombre-input");
  const error = document.getElementById("mensaje-error");

  let listaInvitados = [];

  try {
    const res = await fetch("../invitados/invitados.csv");
    const texto = await res.text();
    listaInvitados = texto.trim().split("\n").map(line => {
      const [nombre, pases] = line.split(",");
      return {
        nombre: normalizarTexto(nombre),
        pases: parseInt(pases)
      };
    });
  } catch (e) {
    console.error("Error al cargar el archivo CSV:", e);
  }

  function normalizarTexto(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

  boton.addEventListener("click", () => {
    modal.classList.remove("hidden");
    input.value = "";
    error.classList.add("hidden");
  });

  cancelar.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  enviar.addEventListener("click", () => {
    const nombreIngresado = normalizarTexto(input.value);
    const invitado = listaInvitados.find(i => normalizarTexto(i.nombre) === nombreIngresado);

    if (invitado) {
      const formularios = {
        1: "https://docs.google.com/forms/d/e/FORMULARIO_1/viewform?usp=pp_url&entry.123456=",
        2: "https://docs.google.com/forms/d/e/FORMULARIO_2/viewform?usp=pp_url&entry.123456=",
        3: "https://docs.google.com/forms/d/e/FORMULARIO_3/viewform?usp=pp_url&entry.123456=",
        4: "https://docs.google.com/forms/d/e/FORMULARIO_4/viewform?usp=pp_url&entry.123456="
      };

      const url = formularios[invitado.pases] + encodeURIComponent(input.value);
      window.location.href = url;
    } else {
      error.classList.remove("hidden");
    }
  });
});
