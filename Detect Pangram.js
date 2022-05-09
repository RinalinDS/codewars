function isPangram(string) {
  return new Set(string.toLowerCase().match(/[a-z]/gi)).size === 26
}



var string = "The quick brown fox jumps over the lazy dog."

console.log(isPangram(string))