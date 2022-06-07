function findChildren(dancingBrigade) {
  const array =  dancingBrigade.toLowerCase().split('').sort()
  for (let i = 0; i < array.length; i++) {
    if (array[i].toLowerCase() !== array[i-1]?.toLowerCase()) {
      array[i] =  array[i].toUpperCase()
    }
  }
  return array.join('')
}

console.log(findChildren('beeeEBb'))