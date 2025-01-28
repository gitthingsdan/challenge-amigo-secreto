// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(params) {
	let entrada = document.getElementById("amigo");
	let amigo = entrada.value;
	if (!amigo) {
		alert("Por favor, inserte un nombre.");
	} else if (amigo.match(/\w+/)) {
		amigos.push(amigo);
		console.log(amigos);
		entrada.value = ""; // Porque si uso la variable "amigo", no funcionará
		entrada.focus(); // Opcional: Para seleccionar la entrada de nuevo y poder escribir continuamente
	}
}