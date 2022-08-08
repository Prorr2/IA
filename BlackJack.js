const brain = require('brain.js');
const jugada = new brain.NeuralNetwork();
//crupier, yo-> decision de de pedir o no 
var crupier = 0;
var nosotros = 0;
var decision =  2;
var cont = 0;
jugada.train([
    { input: [13], output: [1]}, 
    { input: [8], output: [1]}, 
    { input: [18], output: [0]}, 
]);
function main(){
    decision =  2;
    cont++;
    crupier = Math.floor(Math.random() * 10) + 1;
    nosotros = Math.floor(Math.random() * 9) + 2;
    nosotros = nosotros + Math.floor(Math.random() * 9) + 1;
  // console.log("Crupier: " + crupier)
  if(cont > 300){
    console.log("IA: " + nosotros)
  }
    var nopidio = true;
    var acabado = true;
    while(decision > 0){
        decision = jugada.run([nosotros])[0] - 0.5;
        if(cont > 300){
    console.log(decision)
        }
    if(decision > 0){
        nosotros = nosotros + Math.floor(Math.random() * 9) + 1;
        if(cont > 3000){
        console.log("IA: " + nosotros)
        }
        if(nosotros > 21){
        //    console.log("Entrenada: " + crupier +" " + nosotros + " = 0")
            jugada.train([
                { input: [nosotros], output: [0]}
            ])
        } else{
         //   console.log("Entrenada: " + crupier +" " + nosotros + " = 1")
            jugada.train([
                { input: [nosotros], output: [1]}
            ])
        }
        nopidio = false;
    } 
    if(cont > 300){
        cont = 0
    }
    //
    if(nosotros > 21){
    //    console.log("Has perdido");
        acabado = false;
        decision = 0;
    }
    if(nosotros == 21){
    //    console.log("tienes Black jack, Has ganado");
        acabado = false;
        decision = 0;
    }
    //
}
var nunca = true;
if(acabado){
while(crupier < 21){
    if(crupier < 21 && crupier > nosotros){
        if(nopidio){
          //  console.log("Entrenada: " + crupier +" " + nosotros + " = 1")
            jugada.train([
                { input: [nosotros], output: [1]}
            ])
        }
      //  console.log("Has perdido");
        nunca = false;
        crupier = 50;
    } else{
        crupier = crupier + Math.floor(Math.random() * 9) + 1;
 //   console.log("Crupier: " + crupier)
    }
}
if(nunca){
  //  console.log("Has ganado");
}
}
}
setInterval(function() {main()}, 1);
