function towerBuilder(nFloors) {
  const array = []
  for (let i = 1; i <= nFloors; i++) {
    array.push((' ').repeat(nFloors-i)+('*').repeat(i + (i - 1))+ (' ').repeat(nFloors-i))

  }
  return array
}

console.log(towerBuilder(5))

//
//
// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]