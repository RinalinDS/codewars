function cleanString(s) {
  const length = s.length
  for (let i = 0; i < length; i++) {

    if (s[i] === '#') {

      s = s.substring(0, i - 1) + s.substring(i + 1, s.length)

      i-=2


    }
  }
  return s
}


console.log(cleanString('abc#d##c'));