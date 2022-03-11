function sumDigits(number) {
    number = Math.abs(number).toString().split('')
    let sum = 0
    for (let i = 0; i < number.length; i++) {
             sum+= +number[i]
    }
    return sum
}


console.log(sumDigits(-32));