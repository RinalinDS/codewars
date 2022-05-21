function revrot(str, sz) {
  if (sz <= 0 || !str || sz > str.length) return ''

  let arr = []
  for (let i = 0; i < str.length; i += sz) {
    if (str.split('').splice(i, sz).length === sz) {
      arr.push(str.split('').splice(i, sz))
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].reduce((acc, el) => acc + (el ** 3), 0) % 2 === 0) {
      arr[i].reverse()
    } else {
      let a = arr[i].shift()
      arr[i].push(a)
    }
  }
  return (arr.reduce((acc, el) => acc.concat(el), [])).join('')
}

// "330479108928157"

s = "733049910872815764"
console.log(revrot(s, 5));


//
//
// let ab = [1,2,3,4 ,5]
// let a = ab.shift()
// console.log(a)
// ab.push(a)
// console.log(ab)

// The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).