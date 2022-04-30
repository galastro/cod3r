function bhaskara(a,b,c) {
    let res = []
    let delta = (b**2) - (4*a*c)
    if (delta<0) {
        return 'Delta é negativo'
    } else {
        x1 = (-b + Math.sqrt(delta))/(2*a)
        x2 = (-b - Math.sqrt(delta))/(2*a)
        res.push(x1)
        res.push(x2)
        return res
    }
}
console.log(bhaskara(1, 3, 2))
console.log(bhaskara(3, 1, 2))