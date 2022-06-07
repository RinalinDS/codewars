function twosDifference(input){
  let array = []
  input.sort((a,b ) => a-b)
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      if(input[i] -2 === input[j]) {
        array.push([input[j], input[i]])
      }
    }
  }
  return array
}

console.log(twosDifference([4, 3, 1, 5, 6]))

//
// [1, 2, 3, 4]  should return [[1, 3], [2, 4]]
//
//   [4, 1, 2, 3]  should also return [[1, 3], [2, 4]]
//
//   [1, 23, 3, 4, 7] should return [[1, 3]]
//
//   // [4, 3, 1, 5, 6] should return [[1, 3], [3, 5], [4, 6]]