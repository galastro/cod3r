function segundoMaior(array) {
  const res = array.sort((x,y) => x-y )
  return res[res.length-2]
}




console.log(segundoMaior([12, 16, 1, 5]))
console.log(segundoMaior([8, 4, 5, 6]))

