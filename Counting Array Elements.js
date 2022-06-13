function count(array){
 return array.reduce((acc,el) => {
  acc[el] ? acc[el] +=1 : acc[el] = 1
  return acc
 }, {})
}