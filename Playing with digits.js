function digPow(n, p){
let arr = [...n.toString()]

  let sum = 0
  for (let i = 0; i < arr.length; i++) {

    sum = sum + (Math.pow(arr[i], p + i) )
    console.log(sum)


  }


  return Math.round(sum/n) === sum/n && sum/n >= 1 ? sum / n  : -1
}



// console.log(digPow(89, 1))
// console.log(digPow(89, 1));
// console.log(digPow(89, 1));
// console.log(digPow(46288, 3));
digPow(46288, 3)

