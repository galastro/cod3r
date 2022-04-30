function cardapio(codigo, quantidade = 1) {
    switch (codigo) {
        case 100:
            return (3 * quantidade)

        case 200:
            return (4 * quantidade)

        case 300:
            return (5.5 * quantidade)

        case 400:
            return (7.5 * quantidade)

        case 500:
            return (3.5 * quantidade)

        case 600:
            return (2.8 * quantidade)

        default:
            return 'Produto inexistente.'

    }
}
console.log(cardapio(600, 6).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}))
