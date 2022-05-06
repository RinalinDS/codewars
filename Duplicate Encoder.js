function duplicateEncode(word) {
  return word.toLowerCase().split('').map((m, i, array) => {
console.log(array.lastIndexOf(m))
    if (array.lastIndexOf(m) !==i) {
      return ')'
    } else if(array.lastIndexOf(m) !== array.indexOf(m)) {
      return ')'
    } else {
      return '('
    }

  }).join('')
}

console.log(duplicateEncode("Success"));
