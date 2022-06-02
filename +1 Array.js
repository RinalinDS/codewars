function upArray(arr) {
  if (arr.every(e => Number.isInteger(e) && e.toString().length === 1) && arr.length) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === 9) {
        if (i === 0 && arr[i] === 9) {
          arr[0] = 0
          arr.unshift(1)
          break
        }
        arr[i] = 0
      } else {
        arr[i] = arr[i] + 1
        break
      }
    }
    return arr
  }
  return null
}

console.log(upArray([9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 7]));
