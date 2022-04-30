function numeroMinimoDeNotas(valor) {
    let res = ``
    let quantidade100 = 0
    let quantidade50 = 0
    let quantidade10 = 0
    let quantidade5 = 0
    let quantidade1 = 0
   if (valor>=100) {
       quantidade100 = Math.floor(valor/100)
       valor = valor%100
       res += console.log(`${quantidade100} nota(s) de 100 reais, `)

   } else if (valor>=50) {
       quantidade50 = Math.floor(valor/50)
        valor = valor%50
        res += `${quantidade50} nota(s) de 50 reais, `

    } else if (valor>=10) {
        quantidade10 = Math.floor(valor/10)
        valor = valor%10
        res += `${quantidade10} nota(s) de 10 reais, `

    } else if (valor>=5) {
        quantidade5 = Math.floor(valor/5)
        valor = valor%5
        res += `${quantidade5} nota(s) de 5 reais, `

    }else if (valor>=1) {
        quantidade1 = Math.floor(valor/1)
        res += `${quantidade1} nota(s) de 1 real, `
        
    }
    return res
}
console.log(numeroMinimoDeNotas(151))