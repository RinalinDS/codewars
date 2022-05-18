function gps(s, x) {
  if (x.length > 1) {
    let arr = []
    for (let i = 1; i < x.length; i++) {
      arr.push(x[i] - x[i - 1])
    }
    return Math.abs(Math.max(...arr.map(m => (3600 * m) / s)))
  }
  return 0
}


let x = []
let s = 19


console.log(gps(s, x))