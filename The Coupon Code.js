function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode === correctCode && new Date(currentDate) <=  new Date(expirationDate)
}


console.log(checkCoupon("123", "123", "July 9, 2015", "July 9, 2015"));
console.log(checkCoupon("123", "123", "July 9, 2015", "July 2, 2015"));


const date = new Date( "July 9, 2015")
const secondDate = new Date("July 10, 2015")
console.log(date)
console.log(date > secondDate)