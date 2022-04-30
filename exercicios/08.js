function jogosPedro(anotacao) {
    let listaJogos = anotacao.split(" ")
    let recordes = -1
    let menor = 999
    let res = []
    for (let i in listaJogos){
        if (listaJogos[i] > listaJogos[i-1]) {
            recordes++
        } else if(listaJogos[i]< menor) {
            menor = listaJogos[i]
          }
    }
    
    res.push(recordes)
    res.push(listaJogos.indexOf(menor)+1)
    return res
}

console.log(jogosPedro("10 20 20 8 25 3 0 30 1"))
