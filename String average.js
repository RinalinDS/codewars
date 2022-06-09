function averageString(str) {
  const obj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  }
  const obj1 = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  }
  const array =  str.split(' ').map(m => obj[m])

    return obj1[Math.floor(array.reduce((acc, el) => acc + el , 0)/array.length)] || 'n/a'
}

console.log(averageString("zero nine five two"))
console.log(averageString("four six two three"))
