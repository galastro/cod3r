function funcaoDaSorte(chute) {
  const aleatorio = Math.floor(Math.random()*10)+1
  if (chute === aleatorio) {
    return `Parabéns! O número sorteado foi o ${chute}`
  } else {
    return `Que pena! O número sorteado foi o ${aleatorio}`
  }
}

console.log(funcaoDaSorte(7))