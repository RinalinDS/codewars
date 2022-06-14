function alternate(n, firstValue, secondValue){
  const arr = []
  for (let i = 0; i < n; i++) {
    i % 2 === 0 ? arr.push(firstValue) : arr.push(secondValue)
  }
  return arr
}

console.log(alternate(5, true, false))