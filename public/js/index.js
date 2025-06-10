// index.js

document.getElementById('confirm-form')?.addEventListener('submit', async function (e) {
  e.preventDefault();

  const input = document.getElementById('name-input');
  const error = document.getElementById('error-message');
  const name = input.value.trim().toLowerCase();

  if (!name) {
    error.textContent = 'Por favor, escribe tu nombre.';
    return;
  }

  try {
    const res = await fetch('/invitados.csv');
    const text = await res.text();
    const lines = text.split('\n').map(l => l.trim().toLowerCase());
    const match = lines.find(line => line === name);

    if (match) {
      window.location.href = `/savetheday.html?name=${encodeURIComponent(name)}`;
    } else {
      error.textContent = 'Nombre no encontrado. Intenta con el nombre tal como aparece en la invitación.';
    }
  } catch (err) {
    error.textContent = 'Error al validar el nombre. Intenta nuevamente más tarde.';
    console.error(err);
  }
});
