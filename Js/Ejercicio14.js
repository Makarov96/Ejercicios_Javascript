'use strict'

/* mostrar numeros impares
introducidos por el usuario

*/



var numer1 = parseInt(prompt('Introduce un numero',0));
var numer2 = parseInt(prompt('Introduce un numero',0));



for(var i = numer1; i<numer2; i++){

if(i%2 != 0){


    document.write("<h1> Estos son los numeros: "+i+" </h1>");

}


}