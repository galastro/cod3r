const receberSomenteOsParesDeIndicesPares = array => 
  array.filter((numero, indice) => numero%2===0 && indice%2===0)




 console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43, 70]))


// modo mais declarativo: 
// function receberSomenteOsParesDeIndicesPares(numeros) {
//   return numeros.filter((numero, indice) => {
//   const numeroPar = numero % 2 === 0
//   const indicePar = indice % 2 === 0
//   return numeroPar && indicePar
//   })

// --------------

// Alternativa: laço for com iterador sendo acrescido de 2 em 2 enquanto atender a condicional.
// for(let i = 0; i < array.length; i += 2)
