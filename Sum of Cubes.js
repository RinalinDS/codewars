function sumCubes(n){
  const array = []
  for (let i = 1; i <= n; i++) {
    array.push(i)
  }
  return array.reduce((acc,el) => acc + el **3, 0)
}


console.log(sumCubes(3))