function imprimeParImpar(vetor) {
    let pares = 0
    let impares = 0
    for (let i in vetor){
        if (vetor[i]%2==0){
            pares++
        } else {
            impares++
        }
    }
    console.log(`Pares: ${pares}, impares: ${impares}`)
}

lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
imprimeParImpar(lista)