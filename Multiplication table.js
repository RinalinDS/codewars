multiplicationTable = function (size) {
    const array = new Array(size).fill(1)
    const anotherArray = array.map(m => {
            let newArray = []
            for (let i = 1; i <= size; i++) {
                newArray.push(i)
            }
            return newArray

        }
    )
    return anotherArray
}
console.log(multiplicationTable(4))