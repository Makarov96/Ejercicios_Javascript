'use strict'

function cambiacolor(color){
caja.style.color = color;

}

//conseguir elementos con un id especifico

//var caja = document.getElementById("miCaja");
var caja  = document.querySelector("#miCaja");
caja.innerHTML = "Texto en la caja desde Js";
caja.style.background = "red";
caja.style.padding = "20px"
//var introduce = prompt("Ingresa un color: ");
//cambiacolor(introduce);
caja.className = "Hola hola2";
console.log(caja);


//conseguir elemento por su etiqueta


var todoslosDivs = document.getElementsByTagName("div");
var content =todoslosDivs[2].textContent;
todoslosDivs[2].innerHTML = "Otro texto";
console.log(content);



//todoslosDivs.array.forEach((valor,indice) => {
var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");

var valor ;
for(valor in todoslosDivs){
    if(typeof todoslosDivs[valor].textContent == 'string' ){
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todoslosDivs[valor].textContent);
        parrafo.appendChild(texto);
        document.querySelector("#miseccion").prepend(parrafo);
        seccion.append(parrafo);

    }

}
seccion.append(hr);
//});


var divsRojos = document.getElementsByClassName("rojo");
var divsAmarillo = document.getElementsByClassName("amarillo");

for(var x =0; x<divsRojos.length; x++){
    divsRojos[x].style.background="red";
    divsAmarillo[0].style.background="blue";
}




var id = document.querySelector("#encabezado");
console.log(id);

console.log(divsRojos);


