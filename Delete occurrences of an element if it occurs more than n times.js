function deleteNth(arr, n) {
  const obj = {}
  const array = []
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      console.log(obj[arr[i]], 'if')
      obj[arr[i]] = 1
    } else {
      console.log(obj[arr[i]], 'else')
      obj[arr[i]]++
    }
    if (obj[arr[i]] <= n) {
      array.push(arr[i])
    }
  }
  return array
}

console.log(deleteNth([20, 37, 20, 21], 1));
// [20,37,21])