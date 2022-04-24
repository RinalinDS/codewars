function adjacentElementsProduct(array) {
    let max = array[0] * array[1]
    for (let i = 0; i < array.length ; i++) {
        if(max < array[i] * array[i+1]) max = array[i] * array[i+1]
    }
    return max
}

console.log(adjacentElementsProduct(([5, 1, 2, 3, 1, 4])));