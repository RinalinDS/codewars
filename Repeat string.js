function repeatStringNumTimes(str, num) {
  let resultString = ''
  for(let i = 0; i < num; i++) {

    resultString = resultString + '' + str
  }
  return resultString;
}

console.log(repeatStringNumTimes("abc", 3));