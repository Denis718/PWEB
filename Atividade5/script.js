
var nome = window.prompt('Nome do aluno: ')
var n1 = parseFloat(window.prompt('Nota 1: '))
var n2 = parseFloat(window.prompt('Nota 2: '))
var n3 = parseFloat(window.prompt('Nota 3: '))
var resultado = (n1 + n2 + n3)/3
confirm(`O aluno ${nome} teve média = ${resultado}`)
