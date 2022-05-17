function alphabetPosition(text) {
  return text.match(/[a-z]/gi)?.map(m => m.toLowerCase().charCodeAt(0)-96).join(' ') || ''
}



console.log(alphabetPosition("The sunset sets at twelve o' clock."));
console.log(alphabetPosition(",<2{23/="));


// "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"