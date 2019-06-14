'use strict'






var categorias = ['Accion', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran torino'];
var cine = [categorias, cine];

//peliculas.sort();//Ordena alfabeticamente
peliculas.reverse();// Como su nombre le dice este le da la inversa al array :v

console.log(peliculas);

// agregar y eliminar elemento de un array
/*
<------------------------------------------------------------------------------------------------>
var elemento = "";
do{

    elemento = prompt("Ingrese una nueva pelicula");

    peliculas.push(elemento);// la opcion push hace que se agreguen mas elemento al array

} while(elemento != "Acaba");


peliculas.pop();// con la opcion pop lo que se consigue es sacar el ultimo elemento de una lista de array

console.log(peliculas);
 */


// eliminar un dato en especifico de un array

/*
<-------------------------------------------------------------------------------------------->
var index = peliculas.indexOf("Gran torino");//busca el que uno le indique y lo elimina


if (index > -1) {

    peliculas.splice(index, 1);
}
//termina la eliminacio
console.log(peliculas);
*/

var peliculas_string=peliculas.join();

console.log(peliculas_string);// vuelve un array en un string



var cadena = "Texto1, Texto2, Texto3"


var cadena_array= cadena.split(", ");
console.log(cadena_array); 

