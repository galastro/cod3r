function pAritmetica(n, a1, r) {
    const res = [a1]
    let soma = a1
    for (i=1;i<n;i++){
        res.push(a1+r*i)
        soma+= res[res.length-1]
    }
    console.log(`Progressão: ${res}`)
    console.log(`Soma: ${soma}`)
} 
pAritmetica(10,2,3)

function pGeometrica(n,a1,r) {
    const res = [a1]
    let soma = a1
    for (i=1;i<n;i++){
        res.push((res[res.length-1])*r)
        soma+= res[res.length-1]
    }
    console.log(`Progressão: ${res}`)
    console.log(`Soma: ${soma}`)
}
pGeometrica(10,2,3)