function multiples(m, n){
  const array = []
  for (let i = 1; i <= m; i++) {
    array.push(n * i)
  }
  return array
}

console.log(multiples(3, 5))