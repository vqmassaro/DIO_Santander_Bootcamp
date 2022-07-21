"use strict";
function printaValoresNumericos(num1, num2) {
    return num1 + num2;
}
function somarValoresNumericosTratar(numero1, numero2, callback) {
    let resultado = numero1 + numero2;
    return callback(resultado); //retorna a função callback sendo seu parâmetro a variável resultado
}
function aoQuadrado(numero) {
    return numero * numero;
}
function dividirPorEleMesmo(numero) {
    return numero / numero;
}
console.log(somarValoresNumericosTratar(1, 3, aoQuadrado));
console.log(somarValoresNumericosTratar(1, 3, dividirPorEleMesmo));
//seguindo 
