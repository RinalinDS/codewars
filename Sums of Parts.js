// function partsSums(ls) {
//   let resultArray = []
//   const length = ls.length
//   for (let i = 0; i <= length; i++) {
//     resultArray.push(ls.slice(i).reduce((acc, el) => acc+ el, 0 ))
//   }
//   return resultArray
// }

function partsSums(ls) {
  let sum = ls.reduce((acc, el) => acc+ el, 0 )
  const resultArray = [sum]
  const length = ls.length
  for (let i = 1; i <= length; i++) {
    sum = sum - ls[i - 1]
    resultArray.push(sum)
  }
  return resultArray
}

ls = [0, 1, 3, 6, 10]

console.log(partsSums(ls))