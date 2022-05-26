function foldArray(array, runs = 1) {
  let copy = [...array]
  for (let i = 0; i < runs; i++) {

    let arr1 = copy.slice(0, Math.ceil(copy.length / 2))
    let arr2 = copy.slice(Math.ceil(copy.length / 2), copy.length).reverse()

    copy = []
    for (let j = 0; j < arr1.length; j++) {
      if (arr2[j]) {
        copy.push(arr1[j] + arr2[j])
      } else {
        copy.push(arr1[j])
      }
    }
  }
  return copy
}

var input = [1, 2, 3, 4, 5];
console.log(foldArray(input, 2));

