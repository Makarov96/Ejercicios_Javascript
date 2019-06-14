'use strict'



/*
tabla de multiplicar de un numero introducido por pantalla 
*/


var numero = parseInt(prompt('Ingresa un numero: ',0));



for(var i=0; i<=10; i++){

    document.write("Numero: "+numero+" X "+i+"Resultado: "+(numero*i)+"<br/>");

}

