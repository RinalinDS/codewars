function isSortedAndHow(arr) {
    const x = (arr.every(function (el, i) {
        return i === 0 || el >= arr[i - 1]
    }))
    const y = (arr.every(function (el, i) {
        return i === 0 || el <= arr[i - 1]
    }))

    if (x) return 'yes, ascending'
    if (y) return 'yes, descending'
    if (!x && !y) return 'no'
}

console.log(isSortedAndHow([1, 2]));
// 'yes, ascending')
console.log(isSortedAndHow([15, 7, 3, -8]));
// 'yes, descending'
console.log(isSortedAndHow([4, 2, 30]))

