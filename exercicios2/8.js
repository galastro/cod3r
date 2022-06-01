// function multiplicador(n1,n2){
//   if(n1<0 || n2<0) {
//     return 'Insira apenas números inteiros não negativos!'
//   } else {
//     let res = []
//     for(let i = 0; i<n2; i++){
//       res.push(n1)
//     }
//     res = res.reduce((acumulador, atual)=> acumulador+atual)
//     return res
//   }
  
// }

function multiplicador(n1,n2) {
  if(n1<0 || n2<0 ){
    return 'Insira apenas números inteiros não negativos!'
  } else {
    let res =0
    for(let i=0; i<n2; i++){
      res+=n1
    }
    return res
  }
}

console.log(multiplicador(2,7))