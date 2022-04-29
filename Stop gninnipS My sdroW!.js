function spinWords(string) {
  return string.split(' ').map(m => m.length >= 5 ?m.split('').reverse().join(''):m).join(' ')
}



console.log(spinWords("Hey fellow warriors")); //=> returns "Hey wollef sroirraw"
