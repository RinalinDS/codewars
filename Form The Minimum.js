function minValue(values) {

    values = values.filter((el, index, values) => values.indexOf(el) === index);

    return +(values.sort((a, b) => a - b).join(''));

}

console.log(minValue([4, 7, 4, 5, 7]));

let array =   [4,7,4,5,7]
let x = new Set(array) // set добавляет в коллекцию только уникальные значения.
let z = [...x]
console.log(x)
console.log(z)