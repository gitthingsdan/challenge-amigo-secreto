// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(params) {
	const entrada = document.querySelector("input#amigo");
	const amigo = entrada.value;
	if (!amigo) {
		alert("Por favor, inserte un nombre.");
	} else if (amigo.match(/\w+/)) {
		amigos.push(amigo);
		actualizarListaAmigosHTML();
		entrada.value = ""; // Porque si uso la variable "amigo" (en lugar de "entrada.value"), no funcionará
		entrada.focus(); // Opcional: Para seleccionar la entrada de nuevo y poder escribir continuamente
	}
}

function actualizarListaAmigosHTML(params) {
	let lista = document.querySelector("ul#listaAmigos");
	lista.innerHTML = ""; // Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.
	amigos.forEach(el => {
		let elementoHTML = document.createElement("li");
		elementoHTML.textContent = el;
		lista.append(elementoHTML);
	});
}

function sortearAmigo(params) {
	if (amigos.length) { // Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.
		let indiceAleatorio = Math.floor(Math.random() * amigos.length)
		let amigoAleatorio = amigos[indiceAleatorio]
		let resultado = document.querySelector("ul#resultado")
		resultado.innerHTML = amigoAleatorio
	}
}