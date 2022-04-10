function wordsToMarks(string){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let sum = 0
    for (let i = 0; i < string.length ; i++) {
        sum = sum + alphabet.indexOf(string[i]) + 1
    }
    return sum
}

console.log(wordsToMarks('love'));