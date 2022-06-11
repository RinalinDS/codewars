function findNumber(array) {
  let sum = ((1 + array.length + 1) * (array.length + 1)) /2
  return sum - array.reduce((acc, el) => acc + el , 0)
}

console.log(findNumber([1,2,4,5]))