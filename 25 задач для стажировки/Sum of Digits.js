function digital_root(n) {
  if (n.toString().length === 1) {
    return n
  }
  return digital_root(Array.from(n.toString(), Number).reduce((acc, el) => acc + el , 0))



}

console.log(digital_root(8123))
