function removeDuplicateWords (s) {
    let z = new Set(s.split(' '))

    return  [...z].join(' ')
}

console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));