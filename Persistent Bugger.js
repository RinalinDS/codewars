function persistence(num) {
  let count = 0
  while(num.toString().length !== 1) {
    count +=1
    num = +num.toString().split('').reduce((acc,el) => acc * el , 1)
  }
  return count
}

console.log(persistence(39));

//39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)