var numeros= [651, 132, 546, 4, 6, 1, 73, 1569, 741, 11];
var numPares = [];
var iter = numeros[Symbol.iterator]();

for (var i = 0; i < numeros.length; i++){
 	if(iter.next().value%2 == 0){
      	numPares.push(numeros[i]);
 	}
}

console.log(numPares);
