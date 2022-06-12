function minimumNumber(numbers) {
  const sum = numbers.reduce((acc, el) => acc + el, 0)
  const isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
      if (num % i === 0) return false;
    return num > 1;
  }
  for (let i = sum; i > 0 ; i++) {
    if (isPrime(i)) return i - sum
  }
}

console.log(minimumNumber([2,12,8,4,6]))