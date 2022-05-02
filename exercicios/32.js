function media(vetor){
    let soma = 0
    let media
    for (i in vetor){
        soma += vetor[i]
    }
    media = soma/vetor.length
    return media
}

lista = [1, 2, 3, 4, 5]
console.log(media(lista))