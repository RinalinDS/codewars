function sumOfN(n) {
  let arr = []
  let count = 0
  if (n > 0) {
    for (let i = 0; i < n; i++) {
      count += i
      arr.push(i)
    }
  } else {
    for (let i = 0; i > n; i--) {
      count += i
      arr.push(i)
    }
  }
  return arr
}