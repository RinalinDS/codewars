function repeats(arr) {
  return  arr.filter((f, i, arr) => arr.indexOf(f) === arr.lastIndexOf(f)).reduce((acc,el) => acc + el , 0)
}

console.log(repeats([4, 5, 7, 5, 4, 8]))