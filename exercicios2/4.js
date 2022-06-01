function nomeDoMes(numero) {
  if (numero<1 || numero>12) {
    console.log('número inválido!')
  } else{

    switch (numero) {
      case 1:
        return 'janeiro'
        break
      case 2:
        return 'fevereiro'
        break
      case 3:
        return 'março'
        break
      case 4:
        return 'abril'
        break
        case 5:
        return 'maio'
        break
      case 6:
        return 'junho'
        break
      case 7:
        return 'julho'
        break
      case 8:
        return 'agosto'
        break
        case 9:
        return 'setembro'
        break
      case 10:
        return 'outubro'
        break
      case 11:
        return 'novembro'
        break
      case 12:
        return 'dezembro'
        break
        default:
          return 'Insira um número'
    }
  }
}

console.log(nomeDoMes(7))


function nomeDoMes2(numero) {
  if (numero < 1 || numero > 12) {
    return 'número inválido'
  } else {
    const meses = [
      'janeiro',
      'fevereiro',
      'março',
      'abril',
      'maio',
      'junho',
      'julho',
      'agosto',
      'setembro',
      'outubro',
      'novembro',
      'dezembro'
    ]
    return meses[--numero]
  }
}
console.log(nomeDoMes2(12))