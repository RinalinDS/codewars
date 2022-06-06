function sumConsecutives(s) {
  let sum = 0
  const resultArray = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[i - 1]) {
      sum = s[i]
    }
    if (s[i] === s[i + 1]) {
      sum+=s[i]
    } else {
      resultArray.push(sum)
      sum = 0
    }
  }
  return resultArray
}

console.log(sumConsecutives([1,4,4,4,0,4,3,3,1]))