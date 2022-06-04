function frankenSplice(arr1, arr2, n) {
  const arr = [...arr1]
  arr.splice(n, 0, arr2)
  return arr.flat()
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));