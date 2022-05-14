function inArray(array1,array2){
 return  array1.reduce((acc, el) => array2.find( f => f.includes(el)) ? [...acc , el] : [...acc] , []).sort()

}


// Example 1:
// a1 = ["arp", "live", "strong"]
a1 =   ["live", "strong", "arp"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]
//
// Example 2:
// a1 = ["tarp", "mice", "bull"]
//
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
//
// returns []
console.log(inArray(a1, a2));

