function sortArray(array) {
  const arrayForSort = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      arrayForSort.push(array[i])
      delete array[i]
    }
  }

  arrayForSort.sort((a, b) => a - b)
  let count = 0
  for (let i = 0; i < array.length; i++) {
    if (!array[i] && array[i] !== 0) {

      array[i] = arrayForSort[count]
      count += 1
    }


  }
  return array
}

console.log(sortArray([5, 3, 1, 8, 0]))

//
// [7, 1]  =>  [1, 7]
//   [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
//   [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]