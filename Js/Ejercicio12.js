'Use strict'
/*

*/

var suma =0;
var contador =0;
var media =0;

do {
    var numero = parseInt(prompt('Introduce numeros positivos ',0));

    if(isNaN(numero)){
   
        numero = 0;
    }else if (numero >= 0){


        suma +=  numero;

        contador++;
    }


}while(numero >= 0)


media = suma/contador;

alert('La suma de todos los numeros es: '+ suma);
alert('La media de todos los numeros es: '+ media);