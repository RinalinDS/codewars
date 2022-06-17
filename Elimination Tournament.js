const tourney = array => {
  const copy = [...array]
  const resultArray = [copy]
  while (array.length > 1) {
    let arr = []
  let length = array.length
    for (let i = 0; i < length; i = i + 2) {
      array[i + 1] ? arr.push(array[i] >= array[i + 1] ? array[i] : array[i + 1]) : arr.push(array[i])
    }
    resultArray.push(arr)
    array = arr

    if (length % 2 !== 0) {
      let removed = array.pop()
      array.unshift(removed)

    }
  }
  return resultArray
}

console.log(tourney([9, 5, 4, 7, 6, 3, 8]));
