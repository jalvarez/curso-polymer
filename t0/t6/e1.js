var elementos = new Set();
elementos.add(2);
elementos.add("Hola");
elementos.add("12");
elementos.add("Item");
console.log(elementos);
console.log(elementos.size);

console.log(elementos.has("Hola"));
console.log(elementos.has(12));
console.log(elementos.has(2));

elementos.clear();
console.log(elementos);
console.log(elementos.size);
