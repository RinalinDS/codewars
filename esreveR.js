reverse = function(array) {
 return array.reduceRight((acc, el) => [...acc, el], [])
}

console.log(reverse([1,2,3]))