function solution(digits){
    let maxDigit = digits.slice(0,5)
    for (let i = 1; i <digits.length - 4 ; i++) {
        if (digits.slice(i,i+5) >  maxDigit) {
            maxDigit = digits.slice(i,i+5)
        }

    }
    return +maxDigit
}

console.log(solution('1234567898765'));