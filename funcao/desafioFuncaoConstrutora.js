function Pessoa(nome, altura, idade) {
    this.nome = nome
    this.altura = altura+'cm'
    this.idade = idade
    this.falar = function() {
        console.log(`Olá!, meu nome é ${this.nome}, tenho ${this.altura} de altura e tenho ${this.idade} anos.`)
    }
}

const dFeld = new Pessoa('Dart', 179, 24)
console.log(dFeld)
dFeld.falar()