// Trabalho individual de: Rafael Martínez.

// Grupo 8 - Rafael Martínez, Vinícius Felce, Viníciud Marques, Vinícius Sesma, Felipe Godoy.

// - Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

console.log("Microondas Super veloz inicializado! \n")
console.log("Comidas e tempo padrão: \n pipoca = 10s \n macarrao = 8s \n carne = 15s  \n feijao = 12s  \n brigadeiro = 8s");
console.log(" ");

function microondas (comida, tempo) {

    console.log("Você escolheu " + comida + " e o tempo de " + tempo + " segundos!"); // Exibe seleção do usuário

    let tempoPadrao = undefined // Definindo o tempo padrão de cada comida com if else

    if (comida == "pipoca"){
         tempoPadrao = 10
    } 

    else if (comida == "macarrao"){
         tempoPadrao = 8
    } 

    else if (comida == "carne"){
         tempoPadrao = 15
    } 

    else if (comida == "feijao"){
         tempoPadrao = 12
    } 

    else if (comida == "brigadeiro"){
         tempoPadrao = 8
    } 

    else {
        return console.log("Prato inexistente");
    }

    // Calculando se a comida que o usuário selecionou está pronta ou queimou, observando se está de acordo com o tempo padrão.

    if (tempo == tempoPadrao) {
        console.log("Prato pronto, bom apetite!!!");
        }
    
    else if(tempo < tempoPadrao) {
        console.log("Tempo insuficiente!\n Prato pronto, bom apetite!!!");
    }
    
    else if(tempo >= tempoPadrao*2  && tempo < tempoPadrao*3) {
        console.log("Sua comida QUEIMOU\n Prato pronto, bom apetite!!!");
    }
    
    else if(tempo >= tempoPadrao*3) {
        console.log("KaBUMMMM! Sua comida explodiu. \n Prato pronto, bom apetite!!!");
    }

    else{
        console.log("Prato pronto, bom apetite!!!")
    }

}

microondas ("pipoca", 30);