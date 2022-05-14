function expandedForm(num) {
  return num.toString().split('').reverse().map((m, i) => m + '' + '0'.repeat(i)).reverse().filter(f => !!Number(f)).join(' + ')


}


console.log(expandedForm(12));// Should return '10 + 2'
console.log(expandedForm(3022)); // Should return '40 + 2'
console.log(expandedForm(70304)); // Should return '70000 + 300 + 4'