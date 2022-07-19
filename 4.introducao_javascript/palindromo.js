//Solução 1
function verificaPalindromo(string){
    if (!string) return 'String inexistente';

    return string.split("").reverse("").join("") === string;
    //método string.split: separa a string por letras
    //método string.reverse: inverte a ordem das letras
    //método string.join: une todas as partes em uma string
}

//console.log(verificaPalindromo("roda"));

//Solução 2
/*EXEMPLIFICANDO
STRING: OMO     LENGTH: OMO
        012             123
 
 COMPARAÇÃO: PRIMEIRO CARACTER COM O ÚLTIMO CARACTER
            1ºPASSO: sting[0] === string[3-1-0=2]          
            2ºPASSO: string[1] === string[3-1-1=1]*/

function verificaPalindromo1(string){
    if(!string) return 'String inexistente!';

    for(let i=0; i < string.length/2;i++){
        if(string[i] !== string[string.length -1 -i]){
            return false;
        }
    }
    return true;
}
console.log(verificaPalindromo1("mizim"));