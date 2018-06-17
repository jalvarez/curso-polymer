let map = new Map()
.set(1, 'uno')
.set(2, 'dos')
.set(3, 'tres')
console.log(map);

let map2 = new Map([[3,'tres'],[2,'dos'],[1,'uno']])
console.log(map2);

for(let key of map2.keys()){
    if(key == 1) console.log("Clave "+key);
}
for(let value of map2.values()){
    if(value == "tres") console.log("valor "+value);
}

let map3 = new Map(
   [...map2]              	//Convertir map en array
   .filter(([k,v])=>k<3)    //Operar el array
);
console.log(map3);
