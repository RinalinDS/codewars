let capitals = function (word) {
    let array = []
    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) {
            if (word[i] == " ") {
                continue
            } else if (word[i] == isNaN()){
                continue
            } else array.push(i)
        }
    }
    return array;
}
capitals('CodEWaRs');