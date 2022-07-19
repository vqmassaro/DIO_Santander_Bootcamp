function comparaNumeros(num1,num2){
    if(!num1 || !num2) return 'Defina dois números!';
    const primeiraFrase = criaPrimeiraFrase(num1,num2);
    const segundaFrase = criaSegundaFrase(num1,num2);

    return `${primeiraFrase} ${segundaFrase}`
}

function criaPrimeiraFrase(num1,num2){
    let saoIguais = '';

    if (num1 !== num2){
        saoIguais = 'não';
    }

    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.` 
}

function criaSegundaFrase(num1,num2){
    const soma = num1 + num2;

    let resultado10 = 'menor que';
    let resultado20 = 'menor que';
    
    const compara10 = soma > 10;
    const compara20 = soma > 20;
    
    const igualdade10 = soma === 10; //
    const igualdade20 = soma === 20; //
                                     //     BLOCO ADICIONADO PARA CASOS   
    if (igualdade10){                //              DE IGUALDADE 
        resultado10 = 'igual a';       //   
    }                                //
                                     //
    if (igualdade20){                //
        resultado20 = 'igual a';       //
    }
    
    if (compara10){
        resultado10 = 'maior que';
    }

    if (compara20){
        resultado20 = 'maior que';
    }

    return `Sua soma é ${soma}. A soma é ${resultado10} 10 e ${resultado20} 20.`
}

console.log(comparaNumeros(1,9));