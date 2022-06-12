function autocomplete(input, dictionary) {
  const x = input.match(/[A-Za-z]/gi).join('')
  let z = x.split('').map((m,i) => i === 0 ? m.toUpperCase() : m).join('')
  return dictionary.filter(f => f.startsWith(x) || f.startsWith(z)).slice(0,5)
}


console.log(autocomplete('a', ['airplane', 'airport', 'apple', 'ball']))

