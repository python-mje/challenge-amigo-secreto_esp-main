// Declarando el arreglo 
let amigos = [];

function agregarAmigo() {
  const nombreAmigo = document.getElementById("amigo").value.trim();

  // Valida si el campo está vacío
  if (!nombreAmigo) {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // Agrega el nombre al arreglo amigos
  amigos.push(nombreAmigo);
  actualizarListaAmigos();
  document.getElementById("amigo").value = "";
}

// Recorre el arreglo amigos
function actualizarListaAmigos() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

//Funcion Principal
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos en la lista para sortear.");
    return;
  }
  // Genera un índice aleatorio entre 0 y la longitud del arreglo 'amigos'
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  // Selecciona un amigo aleatorio del arreglo 'amigos'
  const amigoSorteado = amigos[indiceAleatorio];
  // Obtiene el elemento con el id "resultado" en el HTML
  const resultado = document.getElementById("resultado");
  // Inserta el nombre del amigo sorteado en el elemento con id "resultado"
  resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}