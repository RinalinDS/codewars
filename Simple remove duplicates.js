function solve(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i]) ) {
      delete arr[i]
    }
  }
  return arr.filter(f => f)
}


console.log(solve([3, 4, 4, 3, 6, 3]))