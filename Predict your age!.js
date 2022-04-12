function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    const array = Array.from(arguments)
    return Math.floor(Math.sqrt(array.reduce((acc, el)=> acc + (el ** 2) , 0))/2)
}

console.log(predictAge(65,60,75,55,60,63,64,45))