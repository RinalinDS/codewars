function rangeOfNumbers(startNum, endNum) {

    if (endNum === startNum) {
        return [startNum]

    } else {

        const countArray = rangeOfNumbers(startNum, endNum - 1)
        countArray.push(endNum)
        return countArray

    }

}

console.log(rangeOfNumbers(1, 10))