function isPowerOfTwo(n) {
  if (n < 1) return false
  while (n > 1) {
    if (n % 2 === 0) {
      n = n / 2
    } else {
      return false
    }

  }
  return true
}
console.log(isPowerOfTwo(4096))