function check(a, x) {

    return a.filter(a => a === x).length > 0

}


console.log(check(['what', 'a', 'great', 'kata'], 'kat'))