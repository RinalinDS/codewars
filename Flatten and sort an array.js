function flattenAndSort(array) {
    return array.flat(Infinity).sort((a, b) => a - b)
}

function flattenAndSort1(array) {
    return [].concat(...array).sort((a, b) => a - b);
}

console.log((flattenAndSort([[3, 2,
    1], [7, 9, 8], [6, 4, 5]])))