function gimme (triplet) {
    let copy = [...triplet]

    return triplet.indexOf(copy.sort((a,b) => a -b)[1])
}

console.log(gimme([5, 10, 14]));
