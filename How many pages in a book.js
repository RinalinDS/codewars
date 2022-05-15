function amountOfPages(summary) {
  let string = '';
  for (let i = 1; i <= summary; i++) {
    string += i
    if (string.length === summary) return i
  }
  return i
}

console.log(amountOfPages(25))