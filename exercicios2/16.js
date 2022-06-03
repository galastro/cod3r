function checarAnoBissexto(ano) {
  if (ano % 100 === 0 && ano % 400 !== 0) {
    return false
  } else {
    return ano%4===0
  }
}

console.log(checarAnoBissexto(2020))
console.log(checarAnoBissexto(2100))
console.log(checarAnoBissexto(2400))