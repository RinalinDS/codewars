function printerError(s) {
    const reg = /[n-z]/gi
    return `${s.split('').filter(f => f.match(reg)).join('').length}/${s.length}`
}


let s = "aaaxbbbbyyhwawiwjjjwwm"

console.log(printerError(s))