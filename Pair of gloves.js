function numberOfPairs(gloves) {
  const obj =  gloves.reduce((acc, el) => {
    acc[el] ? acc[el] += 1 : acc[el] = 1
    return acc
  }, {})
  let count = 0;
  for (const objKey in obj) {
    count += Math.floor(obj[objKey] /2)
  }
  return count
}


let input = ["red", "green", "red", "blue", "blue"]
// result = 2 (1 red pair + 1 blue pair)

let input1 = ["red", "red", "red", "red", "red", "red"]
// result = 3 (3 red pairs)

console.log(numberOfPairs(input1))