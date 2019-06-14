'use stric'


/*Variables 
rest spread */



function listadofrutas(fruta1,fruta2,...resto_de_frutas){
console.log("Fruta 1", fruta1);
console.log("Fruta 2", fruta2);
console.log("Resto  :", resto_de_frutas)

}




listadofrutas("Naranja","Manzana","Hola","Adios","Baibabaia");

var frutas = ["Naranja","Manzana"]
listadofrutas(...frutas,"Hola","Adios","Baibabaia");