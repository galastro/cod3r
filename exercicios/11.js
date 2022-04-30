function anoBissexto(ano) {
    if (ano % 400 == 0) {
        return true
    } else if (ano%100==0){
        return false
    } else if (ano%4==0) {
        return true
    }   
}
console.log(anoBissexto(8))

// Na correção, há validação para < 0, porém, a meu ver, partindo do pressuposto que o enunciado da questão não contempla uma validação para tal, existe a possíbilidade de inserir números negativos, caso se tome como referência anos a.C.