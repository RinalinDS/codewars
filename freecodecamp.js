function sumAll(arr) {
   arr.sort((a,b) => a - b)
  let sum = 0
  for (let i = arr[0]; i <= arr[1]; i++) {
    sum += i
  }
  return sum
}

console.log(sumAll([1, 4]));
console.log([4, 1].sort((a, b) => a - b));