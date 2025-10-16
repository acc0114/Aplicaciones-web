//document.write("Hola Mundo")
var parrafo = document.getElementById("texto");
//Elegir donde vamos a escribir por una id
parrafo.innerHTML = "Texto de JavaScript";
//Sustituir texto por otro texto
parrafo.style.color = "red";
//Para cambiar el color de los parrafo
var contenedor = document.getElementById("contenedor");
var nuevo = document.createElement("p");
//Crear un elemento HTML
var texto = document.createTextNode("Texto desde JavaScript");
//Crear un nodo de texto
contenedor.appendChild(nuevo);
//Crear el parrafo
nuevo.appendChild(texto);
//Meter texto en el parrafo
