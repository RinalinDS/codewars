function deleteDigit(n) {
  const array = []
  for (let i = 0; i < n.toString().length; i++) {
    let tempArr = n.toString().split('')
    tempArr.splice(i, 1)
    array.push(+tempArr.join(''))
  }
  return Math.max(...array)
}

console.log(deleteDigit(152))