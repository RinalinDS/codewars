function maxMultiple(divisor, bound){
    for (let i = bound; i > divisor ; i--) {
        if (i%divisor === 0) {
            return i
        }

    }
}

console.log(maxMultiple(7, 17));


function maxMultiple1(divisor, bound){
    return bound-bound%divisor
}