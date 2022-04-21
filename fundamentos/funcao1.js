// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a+b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // 2+undefined.
imprimirSoma(2, 10, 4, 5, 6, 7, 8) // pega os 2 primeiros e ignora os outros, sem erro.
imprimirSoma('uepa', 'aopa') // concatena.

// Função com retorno
function soma(a, b=1) { // b=1 > definir default value
    return a+b
}

console.log(soma(2,3))
console.log(soma(2))