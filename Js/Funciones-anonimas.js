'Use strict'



/*funciones-anonimas */


function sumame(numero1, numero2, mostrame, sumapordos) {

    var sumar = numero1 + numero2;
    mostrame(sumar);
    sumapordos(sumar);
    return sumar;
}


sumame(1, 2, (dato) => {

    console.log("La suma es: " + dato);

},
    (dato) => {
        var pordos = dato * 2;
        console.log("suma por dos es:" + pordos)
    });


