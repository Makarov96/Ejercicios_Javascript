'use strict'



var nombre = "Steven Colocho";

var lenguajes = ["Python", "Pascal", "JavaScript", "C#", "ASP.net"];




//recorres por medio del forech

document.write("<h1> Lenguajes de programacion </h1>");
document.write("<ul>");
/*
lenguajes.forEach((elemento, index, arr) => {// aqui se hace con un foreach

    document.write("<li>" + index + "-" + elemento + "</li>");
    console.log(arr);
});
*/
for (let lenguaje in lenguajes) {
    document.write("<li>" + lenguajes[lenguaje] + "</li>");
}

document.write("</ul>");


//var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "Pascal");//finindex busca lo que es la posicion de lo que se busco
//console.log(busqueda);


var precios = [10,20,30,60,80];
var busqueda = precios.some(precio => precio >= 79);// busca algun tipo de informacion y devulve un false o un true
console.log(busqueda);



