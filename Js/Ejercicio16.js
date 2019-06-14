'use strict'

/*

que diga que si un numero es pra o impar
ventana que pida el numero---> promp
si un numero no es valido que pida de nuevo el numero
muestra si numero es par o impar

*/



var number = parseInt(prompt('Ingrese un numero',0));

while(isNaN(number)){

  number = parseInt(prompt('Ingrese un numero',0));

}

if(number%2 ==0){
       
    alert('numero es par');

  }else if(number%3 == 0){


    alert('su numero es impart');

  }





