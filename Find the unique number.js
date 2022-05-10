function findUniq(arr) {
  return arr.filter(f => arr.indexOf(f) === arr.lastIndexOf(f))[0]
}

console.log(findUniq([1, 0, 0]));