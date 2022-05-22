function solve(s) {

  const array =  s.match(/[^aoeui]+/gi)
  return Math.max(...array.map(m => m.length > 1 ? m.split('').reduce((acc, el) => (acc + el.charCodeAt(el)-96) , 0) : m.charCodeAt(m)-96))
}

console.log(solve("chruschtschov"));

