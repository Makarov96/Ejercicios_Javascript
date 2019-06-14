'use strict'
//eventos del raton



//Manera sucia de hacer codigo 

function cambiarColor(){
var bg = boton.style.background;

    if(bg == "green"){

        boton.style.background="red";
    }else{
        boton.style.background="green";
    }
}

var boton = document.querySelector("#boton");
boton.addEventListener('click', function(){
    cambiarColor();
});