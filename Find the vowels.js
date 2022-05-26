function vowelIndices(word){
  return [...word].reduce((acc,el, i) => /[aoeiuy]/i.test(el)? [...acc, i+1] : acc , [])

}

console.log(vowelIndices('YoMama'))