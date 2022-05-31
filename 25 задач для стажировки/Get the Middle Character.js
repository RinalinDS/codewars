function getMiddle(s) {
  console.log((s.length -1) /2, s.length/2 +1)
  return s.slice((s.length -1) /2, s.length/2 +1)
}

console.log(getMiddle('test'))