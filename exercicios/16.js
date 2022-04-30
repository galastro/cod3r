function calculadora(num1, operador, num2) {
    switch(operador) {
        case '+':
            return num1+num2.toFixed(2)
        case '-':
            return num1-num2.toFixed(2)
        case '*':
            return (num1*num2).toFixed(2)
        case '/':
            return (num1/num2).toFixed(2)
        default:
            return 'Operador inválido!'
    }
}
console.log(calculadora(7, '/', 3))