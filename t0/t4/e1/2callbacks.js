function hazDosCosas(callback1, callback2){
    //hacemos algo y ejecutamos la función callback avisando que
    //hemos terminado el trabajo
    console.log("Hacemos algo");
    callback1("fue lo primero por hacer");
    callback2("A descansar campeón!");
}

hazDosCosas(function(queHacesDespues) {
   console.log(' tarea primera '+queHacesDespues);
}, 
function(queHacesDespues){
   console.log('terminamos el trabajo! '+queHacesDespues);
});
