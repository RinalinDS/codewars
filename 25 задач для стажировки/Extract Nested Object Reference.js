// return the nested property value if it exists,
// otherwise return undefined
Object.prototype.hash = function(string) {
  const arr = string.split('.')
  return arr.reduce((acc,el) => el? acc[el] : el , this)
}

var obj = {
  person: {
    name: 'joe',
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.'
      }
    }
  }
};

console.log(obj.hash('person.name'));