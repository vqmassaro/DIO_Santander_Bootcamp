let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;

let stringTeste: string = 'verificar';
stringTeste = anyEstaDeVolta;

let unknownValor: unknown;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'vai sim';

let stringTeste2: string = 'agora vai';
//stringTeste2 = unknownValor;

//Para alocar um unknown em uma variável é necessário antes fazer verificações para saber se ele possui o mesmo tipo da variável que irá receber seu valor
if(typeof unknownValor === 'string') {
    stringTeste2 = unknownValor;     
}

function jogaErro(erro: string, codigo: number): never { //interrompe o código,
    throw {error: erro, code: codigo};
}

jogaErro('deu erro', 500);