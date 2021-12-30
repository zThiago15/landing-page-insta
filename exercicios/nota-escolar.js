/**
 * ## Transformar notas escolares
 * 
 * Crie um algoritmo que transforme as notas do sistema
 * numérico para sistema de notas em caracteres tipo A B C
 * 
 * - De 90 pra cima A
 * - De 80-89  B
 * - De 70-79 - C
 * - De 60-69 D
 * - Menor que 60 E
 */

// MINHA LÓGICA! ESTA CERTO! ^-^

function notaEscolar(nota){

    let notaFinal;

    if(nota >= 90){
        notaFinal = "A";

    } else if(nota >= 80){
        notaFinal = "B";

    } else if(nota >= 70){
        notaFinal = "C";

    } else if(nota >= 60){
        notaFinal = "D";

    } else if(nota >= 0 && nota < 60) {
        notaFinal = "E";
    }

    console.log(notaFinal);
}





















/*

function notaEscolar(){
    let nota = window.prompt("Qual sua nota numérica?(0-100)");

    if(nota >= 90){
        nota = "A";
    
    } else if(nota >= 80) {
        nota = "B";
    
    } else if(nota >= 70) {
        nota = "C";
    
    } else if(nota >= 60){
        nota = "D";
    
    } else if(nota >= 0 && nota < 60){
        nota = "F";
    } else {
        nota = "Nota inválida";
    }
    
    console.log(`Sua nota final é: ${nota}`);
}

notaEscolar();



// Lógica do Maikão
/*
let score = 50;
let scoreA = score >= 90 && score <= 100;
let scoreB = score >= 80 && score <= 89;
let scoreC = score >= 70 && score <= 79;
let scoreD = score >= 60 && score <= 69;
let scoreF = score >= 0 && score < 60

if(scoreA){
    console.log("Nota A");

} else if(scoreB){
    console.log("Nota B");

} else if(scoreC){
    console.log("Nota C");

} else if(scoreD){
    console.log("Nota D");

} else if(scoreF){
    console.log("Nota F")
} else {
    console.log("Nota inválida");
}
*/