function step(g, m, n) {
  console.log(g,m,n)
  const array = []
  for (let i = m; i <= n; i++) {
    array.push(i)
  }

  const primeArray = []
  const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
      if(num % i === 0) return false;
    return num > 1;
  }
  array.forEach(e => {
    isPrime(e) && primeArray.push(e)
  })



  let resultDuo = []
  for (let i = 0; i < primeArray.length; i++) {
    if (primeArray.find(f => f === primeArray[i] + g)) {
      resultDuo = [primeArray[i], primeArray.find(f => f === primeArray[i] + g)]
      return resultDuo
    }

  }
  return resultDuo.length > 1 ? resultDuo : null
}


console.log(step(2, 100, 103))