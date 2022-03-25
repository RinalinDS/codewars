function twoOldestAges(ages) {
    ages.sort((a,b) => a - b)
    return [ages[ages.length-2], ages[ages.length-1]]
}


console.log(twoOldestAges([1, 2, 10, 8]));