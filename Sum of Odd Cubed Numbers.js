function cubeOdd(arr) {
  return arr.every(e => Number.isInteger(e)) ? arr.map(m => Math.pow(m, 3)).reduce((acc, el) => el % 2 !== 0 ? acc + el : acc, 0) : undefined
}

console.log(cubeOdd([1, 2, 3, 4]));