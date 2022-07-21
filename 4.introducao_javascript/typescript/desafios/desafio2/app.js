"use strict";
var Trabalho;
(function (Trabalho) {
    Trabalho[Trabalho["Atriz"] = 0] = "Atriz";
    Trabalho[Trabalho["Padeiro"] = 1] = "Padeiro";
})(Trabalho || (Trabalho = {}));
const pessoa1 = {
    nome: 'Maria',
    idade: 29,
    profissao: Trabalho.Atriz
};
const pessoa2 = {
    nome: 'Roberto',
    idade: 19,
    profissao: Trabalho.Padeiro
};
const pessoa3 = {
    nome: 'Laura',
    idade: 32,
    profissao: Trabalho.Atriz
};
const pessoa4 = {
    nome: 'Carlos',
    idade: 19,
    profissao: Trabalho.Padeiro
};
