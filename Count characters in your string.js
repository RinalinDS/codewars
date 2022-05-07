function count(string) {
  return string.split('').reduce((acc, el) => {
    acc[el] ? acc[el]++ : acc[el] = 1
    return acc
  }, {})
}

console.log(count('aba'));