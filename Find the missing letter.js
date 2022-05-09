function findMissingLetter(array) {
  let upperCase;
  if (array[0].toUpperCase() === array[0]) upperCase = true
  array = array.map(m => m.toLowerCase())
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const alphabetToArray = alphabet.split('')
  const arr = alphabetToArray.slice(alphabetToArray.indexOf(array[0]), alphabet.indexOf(array[array.length]))
  const result = arr.filter(f => !array.includes(f))[0]
  return upperCase ? result.toUpperCase() : result
}

console.log(findMissingLetter(['O', 'Q', 'R', 'S']))



function findMissingLetter1(array) {
  let first = array[0].charCodeAt(0)
  console.log(first)
  for (let i = 1; i < array.length; i++) {
    if (first + i !== array[i].charCodeAt(0)) {
      return String.fromCharCode(first + i)
    }
  }
}

console.log(findMissingLetter1(['O', 'Q', 'R', 'S']))