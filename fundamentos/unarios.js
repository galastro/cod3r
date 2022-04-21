let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--) //true, pois o decremento é feito apenas após a comparação, pois está à direita de num2.