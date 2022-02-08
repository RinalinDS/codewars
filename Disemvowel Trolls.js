function disemvowel(str) {
    return str.replace(/[aeoiu]/gi,  "" )
}

console.log(disemvowel("This website is for losers LOL!"))