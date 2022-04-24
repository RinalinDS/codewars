function getEvenNumbers(numbersArray){
    return numbersArray.filter(f => f % 2 ===0)
}

console.log(getEvenNumbers([1, 2, 3, 6, 8, 10]));