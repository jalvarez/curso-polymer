const Autor = new WeakMap();
const Edad = {};
const Ciudad = {};

Autor.set(Edad, 30);
Autor.set(Ciudad, 'Valencia');

console.log(Autor.has(Ciudad));
console.log(Autor);

Autor.delete(Edad);
console.log(Autor);
