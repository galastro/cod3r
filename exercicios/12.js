function fatorial(num) {
    if (num < 0) {
        return 'inválido'
    }else if (num == 0){
        return 1
    } else {
        for (let fat=num-1;fat>0;fat--){
            num *=fat
        }  
    }
    return num
}

console.log(fatorial(10))