function capitalize(s) {
    let firstElement = '';
    let secondElement = '';
    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0) {
            firstElement += s[i].toUpperCase()
            secondElement += s[i].toLowerCase()
        } else {
            firstElement += s[i].toLowerCase()
            secondElement += s[i].toUpperCase()
        }
    }

    return [firstElement, secondElement]
}


console.log(capitalize('abcdef'));