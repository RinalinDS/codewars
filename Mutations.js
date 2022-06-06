function mutation(arr) {
  return arr[1].toLowerCase().split('').every(e => arr[0].indexOf(e.toLowerCase()) > -1)
}

console.log(mutation(["hello", "heL"]));