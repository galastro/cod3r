function algoritmo(codAluno,n1, n2, n3){
    let media = 0
    if (n1 >= n2 && n1 >= n3) {
        media = (n1*4 + n2*3 + n3*3)/10

    } else if (n2 >= n1 && n2 >= n3) {
        media = (n1*3 + n2*4 + n3*3)/10

    }else {
        media = (n1*3 + n2*3 + n3*4)/10
    }
    if (media < 5) {
    console.log(`Código do aluno: ${codAluno}. nota1: ${n1}, nota2: ${n2}, nota3: ${n3}. Média: ${media}. REPROVADO!`)
    } else {
        console.log(`Código do aluno: ${codAluno}. nota1: ${n1}, nota2: ${n2}, nota3: ${n3}. Média: ${media}. APROVADO!`)
    }

}
algoritmo(001,7,5,4)