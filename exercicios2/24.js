const contarCaractere = (caractere, string) => [...string]
.filter((c) => c === caractere)
.length

// function contarCaractere(caractere, string) {
//   const caractereIgual = c => c === caractere

//   return [...string]
//   .filter(caractereIgual)
//   .length
// }





console.log(contarCaractere("r", "A sorte favorece os audazes"))
console.log(contarCaractere("c", "Conhece-te a ti mesmo"))