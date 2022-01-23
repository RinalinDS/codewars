function getAverage(marks) {

    return marks.length && Math.floor((marks.reduce((a, b) => a + b, 0)) / marks.length)
}

console.log(getAverage([1,2,3,3]))