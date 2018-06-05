alert("Ejemplo Programación JS vs ES6");
var data = ["Elemento JS 1", "Elemento JS 2","Elemento JS 3","Elemento JS 4"];

data.forEach(function(elem){
	alert(elem);
});

data.forEach(elem => {
	alert(elem+" + ES6");
});
