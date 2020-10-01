let arIdade = []
let arSexo = []
let arOpiniao = []

var res = document.getElementById('res')

    let velho
    let novo
    let media = 0
    let pessimo = 0
    let porcentagem = 0
    let homem = 0
    let mulher = 0

for(var i = 0; i < 3; i++){
    arIdade[i] = Number(window.prompt('Qual a sua idade: '))
    arSexo[i] = window.prompt('Informe F ou M para sexo: ')
    arOpiniao[i] = Number(window.prompt('Informe sua opinião\n ótimo=4,\n bom=3, \n regular=2, \n péssimo=1: '))
    arSexo[i] = arSexo[i].toUpperCase()
}

    novo = arIdade[0]
    velho = arIdade[0]
    for(var pos in arIdade){
        novo = novo > arIdade[pos]? arIdade[pos]: novo
        velho = velho < arIdade[pos]? arIdade[pos]: velho
        media += arIdade[pos]

        switch (arSexo[pos]){
            case 'M':
                homem += 1
                break
            case 'F':
                mulher += 1
                break
            default:
                break
        }

        if(arOpiniao[pos] === 1){
            pessimo += 1
        }
        else if (arOpiniao[pos] === 4 || arOpiniao[pos] === 3){
            porcentagem += 1
        }
    }
    media = media/arIdade.length
    porcentagem = (porcentagem / arOpiniao.length) * 100
    res.innerHTML = `<p>A média das idades é igual a ${media.toFixed(2)}.</p>
    <p>A idade da pessoa mais velha é de ${velho} anos.</p>
    <p>A idade da pessoa mais nova é de ${novo} anos.</p>
    <p>A quantidade de pessoas que respoderam péssimo é de ${pessimo} pessoa(s).</p>
    <p>A porcentagem de pessoas que responderam ótimo e bom é de ${porcentagem.toFixed(2)}%</p>
    <p>O número de mulheres é de ${mulher} e de homens é de ${homem}.</p>`

