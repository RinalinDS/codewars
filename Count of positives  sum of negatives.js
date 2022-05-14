function countPositivesSumNegatives(input) {

  return input?.length?  input.reduce((acc, el) => el > 0? [acc[0] + 1, acc[1]] : [acc[0], acc[1] + el], [0,0]) : []

}

console.log(countPositivesSumNegatives([1]))