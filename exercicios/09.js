function resultado(nota) {
    let notaUp = Math.ceil(nota/5)*5
    if (nota < 0 || nota >100) {
        return 'Nota Inválida.'
    }else if (nota < 38) {
        return 'Reprovado'
    }  else if (notaUp - nota < 3) {
        return notaUp
    } else {
        return nota
    }
}
console.log(resultado(49))