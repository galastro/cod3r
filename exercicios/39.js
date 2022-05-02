function trocar(vetorA, vetorB){
    vetorA = vetorA.concat(vetorB)
    for (let i =0;i<vetorA.length/2;i++){
        vetorB.push(vetorA[i])
    }
    for (let j=0;i<vetorB.length/2+2;j++){
        vetorA.shift()
        vetorB.shift()
    }
    console.log(vetorA,vetorB)
}
let vetor1 = [1,2,3,4,5]
let vetor2 = [6,7,8,9,10]
trocar(vetor1,vetor2)

// no segundo for loop, não entendi pq só funcionou com +2.