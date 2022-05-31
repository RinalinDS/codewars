function array(arr) {
  const resultArray= arr.split(',')
  resultArray.pop()
  resultArray.shift()
  return resultArray.length > 0 ? resultArray.join(' ') : null
}

console.log(array(('1')))