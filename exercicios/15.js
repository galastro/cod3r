function tipoVeiculo(tipo) {
    switch(tipo) {
        case 'hatch':
            return 'Compra efetuada com sucesso'
        case 'sedan':
        case 'motocicleta':
        case 'caminhonete':
            return 'Tem certeza que não prefere este modelo?'
        default:
            return 'Não trabalhamos com este tipo de automovel aqui'
    }
}
console.log(tipoVeiculo('motocicleta'))