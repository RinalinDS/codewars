function highestRank(arr) {
  const obj = arr.reduce((acc, el) => {
    acc[el] ? acc[el] += 1 : acc[el] = 1
    return acc
  }, {})
  let max = 0
  let result = 0
  for (let objKey in obj) {
    if (obj[objKey] > max ) {
      max = obj[objKey]
      result = objKey
    }
    if (obj[objKey] === max && result < objKey) result = objKey
  }
  return result.toString()
}

console.log(highestRank([12, 13, 8, 12, 7, 6, 4, 13, 13, 10, 12]))