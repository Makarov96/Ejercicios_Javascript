'use strict'
/*
console.log(window.innerHeight);
console.log(window.innerWidth);
esto es para medir la pantalla en si 
*/

function getBom() {
    console.log(screen.width);
    console.log(screen.height);
    console.log(window.location);
}
//con esta funcion redireccion o cambia la pagina actual
function redirect(link){

 window.location.href = link;
}

//en esta funcion abre una nueva ventada con un espacio determinado o mejor dicho con un tamaño determinado
function abrirventana(link){
window.open(link,"","width=400, hight=400");
}



getBom();