function consecutive(arr, a, b) {
  return Math.abs(arr.indexOf(b) - arr.indexOf(a)) === 1
}