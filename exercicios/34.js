
function compara(str1, str2) {
    let estaContido = true
    for (let i = 0; i<str1.length;i++){
        let caractereString1 = str1.charAt(i).toLowerCase()
        for (j=0; j<str2.length;j++){
            let caractereString2 = str2.charAt(j).toLowerCase()
            if (caractereString1 == caractereString2){
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        if(!estaContido) {
            return estaContido
        }
    }
    return estaContido
    
}
console.log(compara('abc','cba'))
// incompleto > só avalia se frase 1 está contida na 2. Elementos a mais na 2 apontam para true.