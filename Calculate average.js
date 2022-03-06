function find_average(array) {
    if (array.length > 0) {
        return (array.reduce((a, b) => a + b, 0)) / array.length
    }
    return 0;
}

console.log(find_average([1,2,3,4]))