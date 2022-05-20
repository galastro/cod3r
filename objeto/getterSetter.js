const sequencia = {
  _valor: 1, // underscore: convenção de que não é pra se alterar o valor.
  get valor() { return this._valor++ },
  set valor(valor) { 
    if(valor > this._valor) {
      this._valor = valor
    }
  }
}

// O fato de ter o underscore na frente não significa que é privado. É apenas uma convenção.

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 // não funciona por conta da validação.
console.log(sequencia.valor, sequencia.valor)