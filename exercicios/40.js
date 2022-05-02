function displayConceito(notas){
    for (i in notas){
        if (notas[i]>=0 && notas[i]<5){
            console.log(`${notas[i]} - conceito D`)
        }
        else if (notas[i]>=5 && notas[i]<7){
            console.log(`${notas[i]} - conceito C`)
        }else if (notas[i]>=7 && notas[i]<8.9){
            console.log(`${notas[i]} - conceito B`)
        }else if (notas[i]>=9 && notas[i]<=10){
            console.log(`${notas[i]} - conceito A`)
        }
    }
}

let notas = [10, 13, 9, 8.2, 2.5, 7.7, 6.8]
displayConceito(notas)