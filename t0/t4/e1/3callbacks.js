function miFuncion(numero,P1,P2,P3){
    var num1=numero*numero
    P1(num1);

    var num2=numero/num1
    P2(num2);
  
    var num3=num1+num2
    P3(num3);
}

miFuncion(5,
  function(info){
       console.log("Multiplicado por si mismo "+ info);
    },
          function(info){
       console.log("Dividido por el anterior "+ info);
    },
  function(info){
       console.log("Suma de los anteriores "+ info);
});
