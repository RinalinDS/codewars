function averages(numbers) {
  return numbers ? numbers.reduce((acc, el, i, arr) => Number.isInteger(arr[i + 1]) ? [...acc, ((el + arr[i + 1])) / 2] : acc, []) : []
}

console.log(averages([-6, -11, 18, 17, 4, -19, 3, -4, 13, 0, 4, 9, -11, 3, 3]))
// Input:  [ 1, 3, 5, 1, -10]
// Output:  [ 2, 4, 3, -4.5]
// If the array has 0 or 1 values or is null, your method should return an empty array.

  //
  // [-8.5, 3.5, 17.5, 10.5, -7.5, -8, -0.5, 4.5, 2, 6.5, -1, -4, 3]
  // [-8.5, 3.5, 17.5, 10.5, -7.5, -8, -0.5, 4.5, 6.5, 2, 6.5, -1, -4, 3]