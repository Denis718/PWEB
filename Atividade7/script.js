var a = Number(prompt(
    "Digite o 1º valor: "
  ))

var b = Number(prompt(
    "Digite o 2º valor: "
))

var c = Number(prompt(
    "Digite o 3º valor: "
))

var maior1 = 0

function maior(x, y, z){
    maior1 = Math.max(a, b, c)
    return maior1
}

alert(`O maior valor é ${maior(a, b, c)}`)


var aluno = new Object();
aluno.RA = "0030481823025";
aluno.Nome = "Denis de Carvalho Silva"

alert(`RA: ${aluno.RA}, Nome: ${aluno.Nome}`)

var aluno = {};
aluno.RA = "0030481823025";
aluno.Nome = "Denis de Carvalho Silva"

alert(`RA: ${aluno.RA}, Nome: ${aluno.Nome}`)

var aluno = {
    RA : "0030481823025",
    Nome : "Denis de Carvalho Silva"
}

alert(`RA: ${aluno.RA}, Nome: ${aluno.Nome}`)