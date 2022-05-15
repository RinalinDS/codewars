var numbers = [1, 2, 3, 4, 5];
Array.prototype.square = function () {
  return this.map(m => m ** 2)
}
Array.prototype.cube = function () {
  return this.map(m => m ** 3)
}
Array.prototype.average = function () {
  return this.length ? (this.reduce((acc, el) => acc + el, 0) / this.length) : NaN
}
Array.prototype.sum = function () {
  return this.reduce((acc, el) => acc + el, 0)
}
Array.prototype.even = function () {
  return this.filter(f => f % 2 === 0)
}
Array.prototype.odd = function () {
  return this.filter(f => f % 2 !== 0)
}

console.log(numbers.square());
// must return [1, 4, 9, 16, 25]
console.log(numbers.cube());
// must return [1, 8, 27, 64, 125]
console.log(numbers.average());
// must return 3
console.log(numbers.sum());
// must return 15
console.log(numbers.even());
// must return [2, 4]
console.log(numbers.odd());
// must return [1, 3, 5]

// square() must return a copy of the array, containing all values squared
// cube() must return a copy of the array, containing all values cubed
// average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
// sum() must return the sum of all array values
// even() must return an array of all even numbers
// odd() must return an array of all odd numbers




