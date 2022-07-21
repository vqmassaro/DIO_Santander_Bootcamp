"use strict";
let valorAny;
valorAny = 3;
valorAny = 'Olá';
valorAny = true;
//VALOR ATUAL DA VARIÁVEL 'valorAny = true'
let valorString = 'teste';
//valorString = 3;
//valorString = true;
valorString = valorAny; // valorAny recebe qlq valor inclusive 'STRING' por isso não deu erro
let valorString2 = 'testao';
valorString2 = valorAny;
function somarString(string1, string2) {
    console.log(string1 + string2);
}
somarString(valorString, valorString2);
somarString('olá', ' como vai?');
