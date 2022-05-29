function encode(string) {
  return [...string].map(m => {
    switch (m) {
      case 'a':
        return 1
      case 'e':
        return 2
      case 'i':
        return 3
      case 'o':
        return 4
      case 'u':
        return 5
      default: return m
    }
  }).join('')
}

function decode(string) {
  return [...string].map(m => {
    switch (m) {
      case '1' :
        return 'a'
      case '2':
        return 'e'
      case '3':
        return 'i'
      case '4':
        return 'o'
      case '5':
        return 'u'
      default: return m
    }
  }).join('')
}

console.log(encode('hello'))
console.log(decode('h2ll4'));

//
// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5