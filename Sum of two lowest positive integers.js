function sumTwoSmallestNumbers(numbers) {

   return numbers.sort((a, b)=> a-b).slice(0,2).reduce((a,b)=> a+b)
}

console.log()
console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))
console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]))