var greet = function(name) {
  return `Hello ${name.split('').map((m, i) => i === 0? m.toUpperCase(): m.toLowerCase() ).join('')}!`
};
console.log(greet('JORA'))