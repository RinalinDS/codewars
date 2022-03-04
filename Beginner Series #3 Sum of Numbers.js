function getSum( a,b ) {
    let c = 0
    if (a > b) {
        c = b
        b = a
        a = c
    }
    let sum = 0
    for (let i = a; i <= b; i++) {
        debugger
        sum += i

    }
    return sum

}

console.log(getSum(578, 285))