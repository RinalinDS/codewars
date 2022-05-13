function high(x){
   x = x.split(' ')
  const arrayOfSums =  x.reduce((acc,el) =>  [...acc, (el.split('').reduce((acc, el) => (acc + el.charCodeAt(el)-96) , 0))] , [])
  console.log(arrayOfSums)
  const max = Math.max(...arrayOfSums)
  return x[arrayOfSums.indexOf(max)]
}

console.log(high('aa b'));

