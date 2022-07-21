const pessoa = {
    nome: "Mariana",
    idade: 28,
    profissao: "desenvolvedora"
}

pessoa.idade = 29;

const andre: {nome: string, idade: number, profissao: string} = {
    nome: "André",
    idade: 25,
    profissao: 'pintor'
}

const paula: {nome: string, idade: number, profissao: string} = {
    nome: "Paula",
    idade: 25,
    profissao: 'Desenvolvedora'
}

enum Profissao { //enum basicamente é um grupo de constantes
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao // ? 
}

interface Estudante extends Pessoa {
    materias: string[], 
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const maria: Pessoa = {
    nome: 'Maria',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const jessica: Estudante = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matemática discreta','Programação']
}

const monica: Estudante = {
    nome: 'Mônica',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matemática discreta','Programação']
}

function listar(lista: string[]) {
    for (const item of lista) {
        console.log('- ',item);
    }
}

listar(monica.materias)