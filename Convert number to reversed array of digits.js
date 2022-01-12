function digitize(n) {
   return n.toString().split("").reverse().map(m => Number.parseInt(m))
}

console.log(digitize(561234))