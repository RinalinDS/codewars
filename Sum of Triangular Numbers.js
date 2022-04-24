function sumTriangularNumbers(n) {
let sum = 0
if (n > 0) {
    for (let i = 0; i <= n ; i++) {
        console.log(sum)
        sum +=   (i/2)*(i+1)
    }
    return sum
}

return 0
}

console.log(sumTriangularNumbers(6))
