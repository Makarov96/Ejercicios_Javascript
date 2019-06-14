'use stric'



/*
hacer un prorgama que muestre todos los numeros que 
son divisibles entre dos ingresados por teclado
*/



var numero1 = parseInt(prompt('Ingrese los numeros',0));
var numero2 = parseInt(prompt('Ingrese los numeros',0));



document.write("<h1>De: "+numero1 +" A: "+ numero2 +" kEstan estos numeros: </h1>")
for(var i = numero1; i<= numero2; i++ ){

document.writeln(i +"</br>")


}





