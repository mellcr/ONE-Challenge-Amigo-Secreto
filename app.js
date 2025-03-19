// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
document.addEventListener("DOMContentLoaded", function () { 
    // Array para almacenar los nombres ingresados
    let nombres = [];

    // Función para agregar un nombre a la lista
    function agregarAmigo() {
        let input = document.getElementById("amigo");
        let nombre = input.value.trim(); // Elimina espacios en blanco al inicio y al final

        if (nombre === "") {
            alert("Por favor, ingrese un nombre válido.");
            return;
        }

        nombres.push(nombre); // Agrega el nombre al array
        mostrarLista(); // Actualiza la lista en la interfaz
        input.value = ""; // Limpia el campo de entrada
    }

    // Función para mostrar la lista de amigos en pantalla
    function mostrarLista() {
        let lista = document.getElementById("listaAmigos");
        lista.innerHTML = ""; // Limpia la lista antes de actualizarla

        // Recorre el array y crea un elemento <li> por cada nombre
        nombres.forEach(nombre => {
            let li = document.createElement("li");
            li.textContent = nombre;
            lista.appendChild(li);
        });
    }

    // Función para actualizar la lista de amigos (opcional, si se necesita modificarla)
    function actualizarLista(nuevosNombres) {
        nombres = nuevosNombres; // Actualiza el array con una nueva lista de nombres
        mostrarLista(); // Refresca la lista en pantalla
    }

    // Función para sortear aleatoriamente un amigo de la lista
    function sortearAmigo() {
        if (nombres.length === 0) {
            alert("La lista está vacía. Agregue nombres antes de sortear.");
            return;
        }

        let indiceAleatorio = Math.floor(Math.random() * nombres.length);
        let amigoSecreto = nombres[indiceAleatorio];

        // Muestra el resultado en la página
        document.getElementById("resultado").innerHTML = "Amigo Secreto: " + amigoSecreto;
    }

    // Asigna eventos a los botones
    document.querySelector(".button-add").addEventListener("click", agregarAmigo);
    document.querySelector(".button-draw").addEventListener("click", sortearAmigo);
});
