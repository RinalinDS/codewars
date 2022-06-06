function chunkArrayInGroups(arr, size) {
  const resultArr = []
  for (let i = 0; i < arr.length; i+=size) {
    resultArr.push(arr.slice(i, i+size))
  }
  return resultArr
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));