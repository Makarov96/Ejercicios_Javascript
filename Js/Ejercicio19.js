'use strict'


/*
Funciones
*/

/*
function menu() {

    var datoinfo = parseInt(prompt("Opcion 1: Suma" + "\n" +
        "Opcion 2: Resta" + "\n" +
        "Opcion 3: Multiplicacion" + "\n" +
        "Opcion 4: Division" + "\n"
        + "Ingrese una opcion", 0
    ));

    return datoinfo;
}

function suma(dato1, dato2) {
    return dato1 + dato2;
}

function resta(dato1, dato2) {
    return dato1 - dato2;
}

function Multi(dato1, dato2) {
    return dato1 * dato2;
}

function divi(dato1, dato2) {
    return dato1 / dato2;
}

do {

    if (menu() == 1) {
        alert("Escogiste la opcion de suma :)");
        var dato1 = parseInt(prompt("Ingrese el dato numero 1:"));
        var dato2 = parseInt(prompt("Ingrese el dato numero 2:"));

        alert("Resultado:" + suma(dato1, dato2));

    } 
    if (menu() == 2) {
        alert("Escogiste la opcion de resta :)");
        var dato1 = parseInt(prompt("Ingrese el dato numero 1:"));
        var dato2 = parseInt(prompt("Ingrese el dato numero 2:"));

        alert("Resultado:" + resta(dato1, dato2));

    }
    if (menu() == 3) {
        alert("Escogiste la opcion de Multiplicacion :)");
        var dato1 = parseInt(prompt("Ingrese el dato numero 1:"));
        var dato2 = parseInt(prompt("Ingrese el dato numero 2:"));

        alert("Resultado:" + Multi(dato1, dato2));

    }
    if (menu() == 4) {
        alert("Escogiste la opcion de division :)");
        var dato1 = parseInt(prompt("Ingrese el dato numero 1:"));
        var dato2 = parseInt(prompt("Ingrese el dato numero 2:"));

        alert("Resultado:" + divi(dato1, dato2));

    }

    var opcionfin = prompt("¿Desea salir?" + "\n" +
        "Si su respuesta es Si ingrese 'SI'");


} while (opcionfin != "SI");
*/


/*
Manera corta
*/



function calculadora(num1, num2, mostrar = false) {

    Console.console.log("Suma " + (num1 + num2));
    Console.console.log("Resta" + (num1 - num2));
    Console.console.log("Multiplicacion" + (num1 * num2));
    Console.console.log("Division" + (num1 / num2));
    Console.log(mostrar); //aqui es la muestra de una parametro opcional
}


for(var i =0; i<=10 ; i++){
    Console.log(i);
    calculadora(i,8);

}