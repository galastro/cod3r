const nums = [1, 2, 3, 4, 5]

let resultado = nums.map(function(e){
  return e*2
})

console.log(resultado)

const soma10 = e => e +10
const triplo = e => e*3
const paraDInheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums
.map(soma10)
.map(triplo)
.map(paraDInheiro)

console.log(resultado)

/* Minha solução:
const res = []
for ( let i in nums ) {
  res.push(nums[i]*2)
}
console.log(res)
*/
