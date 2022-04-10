function reverseNumber(n) {
    if (n < 0) {
        n = n * -1
        n= n.toString().split('').reverse().join('') * -1
    } else {
        n  = n.toString().split('').reverse().join('')
    }

    return +n
}

console.log(reverseNumber(-1000));