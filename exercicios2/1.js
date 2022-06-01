const concatena = text => `Olá, ${text}!`
console.log(concatena('Pedro'))

// Utilizando concat
const cumprimentar = (nome) => {
  const saudacao = "Olá"
  return [saudacao, nome].join(', ').concat("!")
  }

  console.log(cumprimentar('João'))