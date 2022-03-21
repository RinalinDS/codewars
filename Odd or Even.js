function oddOrEven(array) {
    return array.reduce(( el, acc) => el + acc, 0) % 2 === 0 ? 'even' : 'odd'
}

console.log(oddOrEven([1, 4, 9]));

// Input: [0]
// Output: "even"
//
// Input: [0, 1, 4]
// Output: "odd"
//
// Input: [0, -1, -5]
// Output: "even"