// script.js

document.addEventListener('DOMContentLoaded', () => {
  console.log('Banvier Tech está listo.');

  // Puedes agregar más funcionalidades aquí
  const wspButton = document.querySelector('.boton-wsp');
  wspButton.addEventListener('click', () => {
    console.log('Abriendo WhatsApp...');


  });
});


// Opiniones dinámicas
function agregarOpinion() {
  const texto = document.getElementById("nueva-opinion").value;
  if (texto.trim() === "") return;

  const contenedor = document.getElementById("lista-opiniones");
  const bloque = document.createElement("blockquote");
  bloque.textContent = texto;

  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "🗑️";
  btnEliminar.onclick = () => bloque.remove();

  const btnEditar = document.createElement("button");
  btnEditar.textContent = "✏️";
  btnEditar.onclick = () => {
    const nuevoTexto = prompt("Edita tu opinión:", bloque.textContent);
    if (nuevoTexto) bloque.textContent = nuevoTexto;
    bloque.appendChild(btnEditar);
    bloque.appendChild(btnEliminar);
  };

  bloque.appendChild(btnEditar);
  bloque.appendChild(btnEliminar);
  contenedor.appendChild(bloque);

  document.getElementById("nueva-opinion").value = "";
}

// Galería dinámica
function subirImagen() {
  const input = document.getElementById("imagen-input");
  const file = input.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    const contenedor = document.getElementById("galeria-imagenes");

    const div = document.createElement("div");
    const img = document.createElement("img");
    img.src = e.target.result;
    img.alt = "Imagen subida";
    img.style.width = "200px";

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "🗑️";
    btnEliminar.onclick = () => div.remove();

    div.appendChild(img);
    div.appendChild(btnEliminar);
    contenedor.appendChild(div);
  };
  reader.readAsDataURL(file);
}

