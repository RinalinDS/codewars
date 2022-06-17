function solve(arr){
  return arr.reduce((acc, el) => arr.indexOf(-el) === -1 ? el : acc, null)
}

console.log(solve([1,-1,2,-2,3]))