var findMissing = function (list) {
  let d = (list[list.length-1] - list[0])/ list.length
  for (let i = 1; i < list.length; i++) {
    if(list[i-1] + d !== list[i] ) {
      return list[i-1] + d
    }
  }

}


console.log(findMissing([1, 4, 7, 13]));