function goodVsEvil(good, evil){
  const goodRacesValue = [1,2,3,3,4,10]
  const evilRacesValue = [1,2,2,2,3,5,10]
  const sumOfGood =  good.split(' ').slice(0, goodRacesValue.length).map((m,i) => +m * goodRacesValue[i]).reduce((acc,el ) => acc + el ,0)
  const sumOfEvil =  evil.split(' ').slice(0, evilRacesValue.length).map((m,i) => +m * evilRacesValue[i]).reduce((acc,el ) => acc + el ,0)
  if (sumOfGood === sumOfEvil) return 'Battle Result: No victor on this battle field'
  return sumOfGood > sumOfEvil ? 'Battle Result: Good triumphs over Evil' : 'Battle Result: Evil eradicates all trace of Good'
}

console.log(goodVsEvil('1 1 1 1 1 1 1 1 1 1 1 1 1', '0 0 0 0 0 10 0 1 1 1 1 0 0'));


// 1 1 1 1 1 1 1 1 1 1 1 1 1
// 8 16
// 0 0 0 0 0 10 0 1 1 1 1 0 0
// 0 15
//
// Hobbits: 1
// Men: 2
// Elves: 3
// Dwarves: 3
// Eagles: 4
// Wizards: 10
// On the side of evil we have:
//
//   Orcs: 1
// Men: 2
// Wargs: 2
// Goblins: 2
// Uruk Hai: 3
// Trolls: 5
// Wizards: 10