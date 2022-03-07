function arithmetic(a, b, operator){
    switch (operator) {
        case "add":
            return  a + b
        case "subtract":
            return  a - b
        case "divide":
            return a / b
        case "multiply":
            return a* b
        default:
            return undefined
    }
}

console.log(arithmetic(5, 2, 'add'));