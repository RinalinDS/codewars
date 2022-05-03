const countBits = function (n) {
  return !n.toString(2).match(/[1]/gi) ? 0 : n.toString(2).match(/[1]/gi).length
}

console.log(countBits(0))
