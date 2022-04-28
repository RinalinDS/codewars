function findOdd(arr) {
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] += 1
    } else {
      obj[arr[i]] = 1
    }
  }
  let result;
  for (let key in obj) {
    if (obj[key] % 2 !== 0) result = key
  }
  return +result
}

// function findOdd1(A) {
//   return A.reduce((l, r) => l ^ r);
// }


console.log(findOdd([0, 1, 0, 1, 0]));
console.log(findOdd1([0, 1, 0, 1, 0]));