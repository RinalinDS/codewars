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




