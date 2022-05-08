const uniqueInOrder = function (iterable) {
  if (!Array.isArray(iterable)) {
    iterable = iterable.split('')
  }
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] === iterable[i + 1]) {

      iterable.splice(i + 1, 1)
      i--
    }
  }
  return iterable
}
const string = 'AAAABBBCCDAABBB'
const array = string.split('')

console.log(uniqueInOrder(array));
