'use strict'


/**
 * hacer un programa que pida 6 numeros por pantalla y los meta en un array.
 * Tiene que mostrar el array entero todos sus elementos en el cuerpo de la pagina y la consola
 * Tiene que sacar el array ordenado y mostrarlo invertir su orden y mostrarlo
 * Mostrar cuantos elementos tiene el array
 * Busqueda de un valor introducido por el usuario y que diga si esta en el array y su posicion
 */


function mostrar(elemento, textoCustom = "") {
    document.write("<h1>Contenido del array " + textoCustom + "</h1>");
    document.write("<ul>");

    array.forEach((elemento, index) => {
        document.write("<li>" + elemento + "</li>");
    })
    document.write("</ul>");
}

var array = [];

for (var i = 0; i <= 5; i++) {
    array.push(parseInt(prompt("ingrese el dato: " + i, 0)));
}


//por consola
console.log(array);
//por el cuerpo del texto


//Ordenar y mostrarlo
array.sort(function (a, b) { return a - b });
mostrar(array, "Ordenador");
//invertir el arreglo
array.reverse();
mostrar(array, "Inverso");
//cuantos elementos tiene un array
var datos = array.length;
document.write("<h1>El array tiene: " + datos + "</h1>");


//Que el usuario ingrese un numero y ver si se encuentra en el array :v 
var buscar = parseInt(prompt("Ingrese su dato a buscar", 0));
var posicion = array.findIndex(numero => numero == buscar);

    if (posicion && posicion != -1) {
       document.write("<h1>Si se encuentra</h1></br>");
       document.write("<h1>Esta en la posicion: </h1>"+posicion);
    } else {
      document.write("No se encuentra");
    }
