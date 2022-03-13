function solve(s) {
    let counter = s.split('').reduce((acc, el) => el === el.toLowerCase() ? acc+1: acc-1, 0)
    if (counter >= 0) {
        return s.toLowerCase()
    } else {
        return s.toUpperCase()
    }
}


console.log(solve('COde'));