function planoDeSaude(idade) {
    if (idade<0 || idade > 120) {
        return 'Idade inválida!'
    }else if (idade>= 0 && idade< 10) {
        return 180
    } else if (idade >=10 && idade <=30) {
        return 150
    } else if (idade >30 && idade <=60){
        return 195
    } else {
        return 230
    }
}

console.log(planoDeSaude(84))