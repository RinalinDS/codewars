function toCamelCase(str){
  str = str.split('')
  for (let i = 0; i < str.length ; i++) {
    if (str[i] === '_' || str[i] === '-' ) {
      str[i] = ''
      str[i+1] = str[i+1].toUpperCase()
    }

  }
  return str.join('')
}

console.log(toCamelCase("The_Stealth_Warrior"));

// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"