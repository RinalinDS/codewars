function shortcut (string) {
    return string.split("").filter(f => f !== "e").filter(z => z !== "a").filter(x => x !== "i").filter(c => c !== "o").filter(v => v !== "u").join("")

}

console.log(shortcut("hella"))


//nado bilo 4erez replace