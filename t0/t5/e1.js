var palabra = "Ejercicio 1"
for (let cadena of palabra){
     console.log(cadena);
}

let coleccion= new Map([["a", 1], ["b", 2], ["c", 3]]);
//Mostrar par de valores
for (let entry of coleccion) {
  console.log(entry);
}
//Mostrar valores
for (let [key, value] of coleccion) {
  console.log(value);
}
