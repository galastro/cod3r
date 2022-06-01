// function estaEntre(numero,minimo,maximo,inclusivo = false){
//   if(inclusivo){
//     return numero>=minimo && numero<=maximo
//   } else {
//     return numero>minimo && numero<maximo
//   }
// }

// function estaEntre(numero, minimo, maximo, inclusivo = false) {
//   return inclusivo
//     ? numero >= minimo && numero <= maximo
//     : numero > minimo && numero < maximo
// }

const estaEntre = (numero, minimo, maximo, inclusivo = false) => 
inclusivo 
? numero >= minimo && numero <= maximo 
: numero > minimo && numero < maximo



console.log(estaEntre(10, 50, 100))
console.log(estaEntre(4, 3, 15))
console.log(estaEntre(22, 10, 55))
console.log(estaEntre(3, 3, 100))
console.log(estaEntre(3, 3, 100, true))

// false
// true
// true
// false
// true
