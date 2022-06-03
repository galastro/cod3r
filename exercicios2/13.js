// function filtrarNumeros(array) {
//   return (array.filter(function(e){
//     return (typeof e === "number")
//   }))
// }

const filtrarNumeros = array => 
array.filter(e => (typeof e === "number"))


console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20]))