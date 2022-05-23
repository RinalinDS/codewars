function parse(data) {
  const resultArray = []
  let value = 0
  for (let i = 0; i <= data.length; i++) {
    switch (data[i]) {
      case 'i' :
        value ++
        break
      case 'd' :
        value--
        break
      case 's' :
        value = Math.pow(value , 2)
        break
      case 'o':
        resultArray.push(value)
        break
      default:
        break
    }
  }
  return resultArray
}

console.log(parse("iiisdoso"));
