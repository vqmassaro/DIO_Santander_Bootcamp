enum Trabalho {
	Atriz,
	Padeiro
}

interface Individuo {
	nome: string,
	idade: number,
	profissao: Trabalho
}

const pessoa1: Individuo = {
	nome: 'Maria',
	idade: 29,
	profissao: Trabalho.Atriz
}
	

const pessoa2: Individuo = {
	nome: 'Roberto',
	idade: 19,
	profissao: Trabalho.Padeiro
}

const pessoa3: Individuo = {
	nome: 'Laura',
	idade: 32,
	profissao: Trabalho.Atriz
}

const pessoa4: Individuo = {
	nome: 'Carlos',
	idade: 19,
	profissao: Trabalho.Padeiro
}