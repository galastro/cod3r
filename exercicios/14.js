function availableFruits(fruit) {
    switch (fruit){
        case 'maçã':
            return 'Não vendemos esta fruta aqui'
        case 'kiwi':
            return 'Estamos com escassez de kiwis'
        case 'melancia':
            return 'Aqui está, são 3 reais o quilo'
        default:
            return 'Error'
    }
    

}

console.log(availableFruits('kiwi'))