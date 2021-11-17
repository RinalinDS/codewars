function highAndLow(numbers){
    let nums = numbers.split(" ");
    return `${Math.max(...nums)} ${Math.min(...nums)}`;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");
