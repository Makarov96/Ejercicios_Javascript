'use strict'




/*
Tranformacion de cadenas
*/


var numero = 444;
var texto1 = "Bienvenido al curso de javascript de victor robles";
var texto2 = "Es muy buen curso";

numero.toString();
// mayuscules y minusculas
var dato = texto1.toUpperCase();// convierte el texto en mayusculas
    dato = texto2.toLowerCase();// convierte el texto en minusculas


console.log(dato);


// calcular longitud

var nombre = "";
    nombre = ["Hola","Hola"];

var dato2 = nombre.length;
console.log(dato2);


//concatenar unir textos

//var texto_total = texto1+" "+texto2;
var texto_total = texto1.concat(" "+texto2);


console.log(texto_total);

