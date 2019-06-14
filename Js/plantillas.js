'use strict'



var nombre = prompt("Ingresa tu nombre");
var apellido = prompt("Ingresa tu apellido");



//var texto = "Tu nombre es: "+nombre+" tu apellido es: "+apellido;



var texto = 
`
<h1>Hola que tal</h1>
<h2>Mi nombre es: ${nombre}</h2>
<h2>Mi apellido es: ${apellido}</h2>
`


document.write(texto);



