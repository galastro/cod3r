function crescimento(altura1, crescimento1, altura2, crescimento2){
    let res = 0
    if (altura1<altura2 && crescimento1>crescimento2){
        return (altura2-altura1)/(crescimento1-crescimento2)
    } else if (altura2<altura1 && crescimento2>crescimento1){
        return (altura1-altura2)/(crescimento2-crescimento1)
    } else {
        return 'Ambas possuem a mesma altura, ou então é impossível ultrapassar.'
    }
}
console.log(crescimento(150,10,120,20)) 
console.log(crescimento(150,10,150,10))
console.log(crescimento(150,20,120,10))
console.log(crescimento(140,20,150,10)) 