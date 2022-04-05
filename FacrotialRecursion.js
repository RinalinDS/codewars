function factorial(n){
    let sum = 1
    for (let i = 1; i <= n ; i++) {
        sum *=i
    }
    return sum


}

function f(n) {
    if (n <= 1) return n
    return factorial(n - 1) * n
}

console.log(factorial(17));