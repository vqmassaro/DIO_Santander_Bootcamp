let valorAny: any;
valorAny = 3;
valorAny = 'Olá';
valorAny = true;

//VALOR ATUAL DA VARIÁVEL 'valorAny = true'
let valorString: string = 'teste';
//valorString = 3;
//valorString = true;
valorString = valorAny; // valorAny recebe qlq valor inclusive 'STRING' por isso não deu erro
let valorString2: string = 'testao'
valorString2 = valorAny;

function somarString(string1: string, string2: string) {
    console.log(string1 + string2);
}

somarString(valorString, valorString2);
somarString('olá', ' como vai?');