function inAscOrder(arr) {
    const newArr = [...arr].sort((a, b) => a - b)
    return newArr.reduce((acc, el, i) => {
        console.log(el, arr[i])
        if (el === arr[i]) {
            return acc
        } else {
            acc += 1
        }
    }, 0) >= 0
}

console.log(inAscOrder([1, 2, 4, 3, 19]));