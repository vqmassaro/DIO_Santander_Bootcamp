// / Como podemos rodar isso em um arquivo .ts sem causar erros? 

// let employee = {};
// employee.code = 10;
// employee.name = "John";


//Duas maneiras em que estou familiarizado
let funcionario: {codigo: number, nome: string} = {
    codigo: 10,
    nome: 'John'
}

let funcionario2 ={
    codigo: 30,
    nome: 'Lucas'
}

//UTILIZANDO INTERFACE
interface Funcionario {
    codigo: number,
    nome:string
}

let funcionario3: Funcionario = {
    codigo: 1,
    nome: 'Pedro'
}
