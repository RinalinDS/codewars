function findNextSquare(sq) {
    let squaredNumber = Math.sqrt(sq)
    if (Number.isInteger(squaredNumber)) {
        return (squaredNumber + 1)**2
    }
    return -1;
}

console.log(findNextSquare(121));