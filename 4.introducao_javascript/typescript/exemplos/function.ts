function printaValoresNumericos(num1: number, num2: number):number{
    return num1 + num2;
}

function somarValoresNumericosTratar(numero1: number, numero2: number, callback: (numero: number) => number): number{
    let resultado = numero1 + numero2;
    return callback(resultado);//retorna a função callback sendo seu parâmetro a variável resultado
    }

function aoQuadrado(numero: number): number {
    return numero * numero;
}
function dividirPorEleMesmo(numero: number): number {
    return numero / numero;
}

console.log(somarValoresNumericosTratar(1, 3, aoQuadrado))
console.log(somarValoresNumericosTratar(1, 3, dividirPorEleMesmo))

//seguindo 