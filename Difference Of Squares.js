function differenceOfSquares(n){
  const arr = Array.from({length: n}, (_, i) => i + 1)
  return Math.pow(arr.reduce((acc,el) => acc + el, 0), 2) - arr.reduce((acc,el) => acc + Math.pow(el,2), 0)
}

console.log(differenceOfSquares(10))