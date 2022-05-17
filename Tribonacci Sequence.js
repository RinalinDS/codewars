function tribonacci(signature, n) {
  if (n === 1) return [signature[2]]
  if (n === 0) return []
  let sum;
  for (let i = 2; i < n - 1; i++) {
    if (!isNaN(signature[i])) {
      sum = signature[i] + signature[i - 1] + signature[i - 2]
      signature.push(sum)
    }
  }
  return signature
}

console.log(tribonacci([1, 1, 1], 10))