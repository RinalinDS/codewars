let a = 1000
console.log(a.toString().length);

function findLongest(array){
  return array.sort((a,b)=> b.toString().length - a.toString().length)[0]
}

console.log(findLongest([5000, 8, 9000, 800]))