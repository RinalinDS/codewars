function descendingOrder(n) {
    if (n === 0) return 0
    else {
        myFunc = (string) => Number(string)

        let array = Array.from(String(n), myFunc)
        let sortedArray = array.sort((a, b) => b - a)

        return Number(sortedArray.join(''))
    }
}


console.log(typeof(descendingOrder(1)))