"use strict";
//MUITO GRANDE ABAIXO É APRESENTADA UMA SOLUÇÃO
//
// function somarValores(input1: number | string, input2: number | string){
//     if (typeof input1 === 'string' || typeof input2 === 'string'){
//         return input1.toString() + input2.toString();//.toString se torna uma boa prática pois caso qlq um dos inputs seja diferente de uma 'string' esse valor será convertido.
//     } else {
//         return input1 + input2;
//     }
function somarValores(input1, input2) {
    if (typeof input1 === 'string' || typeof input2 === 'string') {
        return input1.toString() + input2.toString(); //.toString se torna uma boa prática pois caso qlq um dos inputs seja diferente de uma 'string' esse valor será convertido.
    }
    else {
        return input1 + input2;
    }
}
console.log(somarValores(1, 5));
console.log(somarValores('olá', ', tudo bem?'));
console.log(somarValores('que dia é hoje? ', 5));
function somaValoresNumericos(num1, num2) {
    return num1 + num2;
}
console.log(somaValoresNumericos(1, 4));
//funções que não retornam nenhum valor são do tipo void exemplo console.log()
// function printarValoresNumericos(num1: number, num2: number){
//     console.log(num1+num2);
// }
