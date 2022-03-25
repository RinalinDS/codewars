function reverseLetter(str) {
    return str.match(/[a-z]/gi).reverse().join('')
}

console.log(reverseLetter("ultr53o?n"));