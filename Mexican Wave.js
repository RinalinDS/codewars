function wave(str) {
  let array = []
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {

      array.push(str.split('').map((m, index) => index === i ?  m.toUpperCase() :  m).join(''))
    }


  }

  return array

}

console.log(wave('o w'))