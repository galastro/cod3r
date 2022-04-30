function planoTrabalho(salario, plano) {
    switch(plano){
        case 'A':
            return salario+= (salario*0.1)
        case 'B':
           return salario+= (salario*0.15)
        case 'C':
            return salario+= (salario*0.2)
        default:
            return 'Plano inválido.'
         
    }

}
console.log(planoTrabalho(1000, 'D'))