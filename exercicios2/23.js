const contarPalavras = (string) => string.split(" ").length


console.log(contarPalavras("Sou uma frase"))
console.log(contarPalavras("Me divirto aprendendo a programar"))

// Solução declarativa?
// const contarPalavras = (string) => {
//   const palavras = frase.split(" ")
//   return palavras.length
// }