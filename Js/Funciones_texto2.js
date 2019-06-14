'Use strict'




var numero = 444;
var texto = "Bievenidos de JavaScript de Victor Robles";
var texto2 = "es curso muy buen curso";



var busqueda = texto2.lastIndexOf("curso");//busca la palabra en espesifico
    busqueda = texto2.search("curso");// una opcion mas
    busqueda = texto2.match("curso");//busqueda palabra en espeficio
    busqueda = texto2.match(/curso/g);//varias busquedas
    busqueda = texto2.substr(18,5);// extraer palabras en base a un parametro
    busqueda = texto2.charAt(13);// obtiene una letra concreta 
    busqueda = texto2.startsWith("es");// busca al inicio
    busqueda = texto2.endsWith("curso");//busca al final
    busqueda = texto2.includes("muy");// busca en toda la cadena 
console.log(busqueda);

