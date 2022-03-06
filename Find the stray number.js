function stray(numbers) {
    numbers.sort((a,b) => a-b)
    if (numbers[0] === numbers[1]){
        return numbers.filter(f => f !== numbers[0])[0]
    }
    return numbers[0]

}

console.log(stray([1, 1, 2]));
console.log(stray([3, 17, 17, 17, 17, 17, 17]));