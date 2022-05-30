Array.prototype.forEach2 = function(callback) {
  for (let i = 0; i < this.length; i++)
  callback(this[i], i, this)
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice) { // pode ter 3 parâmetros: nome , indice e array
  console.log(`${indice+1}) ${nome}`)
})