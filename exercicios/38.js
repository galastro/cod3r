function a(inicio=0,fim=100){
    if (inicio>fim){
        inicio = inicio+fim
        fim = inicio - fim
        inicio = inicio - fim
    }

    const res = []
    for (i=inicio;i<=fim;i++){
        if (i%2!=0){
            res.push(i)
        }
    }
    return res
}

console.log(a())
