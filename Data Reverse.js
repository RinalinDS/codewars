function dataReverse(data) {
  const length = data.length/8
  const array = []
  for (let i = 0; i < length ; i++) {
    array.push(data.splice(0, 8))
  }
  return array.reverse().flat()
}

console.log(dataReverse([0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1]))