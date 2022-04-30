'use strict'
// 01)​ Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.
console.log('01)')

function operacoes(num1, num2) {
    console.log(`soma: ${num1+num2}`)
    console.log(`subtração: ${num1-num2}`)
    console.log(`multiplicação: ${num1*num2}`)
    console.log(`divisão: ${num1/num2}`)
}

operacoes(4,2)
console.log('----------')

// 02)​ Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).
console.log('02)')

function classificacaoTriangulo(a,b,c) {
    if (a===b && a===c) {
        console.log('Equilátero!')
    } else if (a!== b && a!== c) {
        console.log('Escaleno')         
    } else {
        console.log('Isóceles')
    }
}

classificacaoTriangulo(2,3,4)
console.log('----------')

//03)​ Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
let potencia = (a,b) => a**b;
console.log(potencia(2,3))
console.log('----------')

// 04) ​ Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
//e o resto da divisão destes dois valores.

function divisao(a,b) {
    console.log(`resultado:${a/b}, resto:${a%b}`)
}
divisao(4,2)