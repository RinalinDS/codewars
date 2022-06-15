function sumEvenNumbers(input) {
  return input.reduce((acc,el) => el % 2 === 0 ? acc + el : acc, 0  )
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// 30,
