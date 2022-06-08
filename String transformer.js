function stringTransformer(str) {
  return str.split(' ').map(m => m.split('').map(s => s.toUpperCase() === s ? s.toLowerCase() : s.toUpperCase()).join('')).reverse().join(' ')
}

console.log(stringTransformer('Example string'));