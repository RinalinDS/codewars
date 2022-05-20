function evenNumbers(array, number) {
 return array.reverse().filter(f => f % 2 === 0).slice(0, number).reverse()
}