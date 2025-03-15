let amigos = [];

function agregarAmigo() {
  const nombreAmigo = document.getElementById("amigo").value.trim();

  if (!nombreAmigo) {
    alert("Por favor, inserte un nombre.");
    return;
  }

  amigos.push(nombreAmigo);
  actualizarListaAmigos();
  document.getElementById("amigo").value = "";
}

function actualizarListaAmigos() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos en la lista para sortear.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}