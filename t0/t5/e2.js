function *generadorSimple(){
    yield 'manzanas';
    yield 'peras';
    yield 'plátanos';
}
let ejemplo = generadorSimple();
console.log(ejemplo.next().value);
console.log(ejemplo.next().value);
console.log(ejemplo.next().value);
console.log(ejemplo.next().value);
console.log(ejemplo.next().value);
