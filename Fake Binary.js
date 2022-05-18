function fakeBin(x){
  return [...x].map(m => m >= 5 ? 1 : 0).join('')
}