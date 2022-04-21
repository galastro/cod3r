// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa // extraindo variáveis
console.log(nome, idade)

const {nome: n, idade: i} = pessoa // extraindo variáveis e atribuindo valores à novos nomes.
console.log(n, i)

const {sobrenome, bemHumorada = true } = pessoa // Output: undefined, porém, na segunda variável, esta é uma forma de gerar um valor padrão caso não esteja definido dentro do objeto em referência.
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)
