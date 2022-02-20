function XO(str) {
    return str.toLowerCase().split('').reduce((a,b) =>  {
    if (b === 'x') {
        return a + 1
    }
    else if (b === 'o') {
        return a -1
    } else {
        return a
    }
    } , 0) === 0
}

/*function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}*/

console.log(XO('xxxxooo'))