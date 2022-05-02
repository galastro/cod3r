function maiorEMenor(vetor){
    let maior
    let menor
    for (i in vetor){
        if (i == 0) {
            maior = vetor[i]
            menor = vetor[i]
        }else {
            if (vetor[i]> maior){
                maior = vetor[i]
            }if (vetor[i]<menor){
                menor = vetor[i]
            }

        }
        
    }
    console.log(`maior = ${maior} & menor = ${menor}`)

}
lista =  [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]

maiorEMenor(lista)