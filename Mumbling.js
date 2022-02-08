function accum(s) {
    let string = ''
    for (let i = 0; i < s.length ; i++) {
                string += s[i].toUpperCase() + s[i].repeat(i).toLowerCase() + ' '
    }
    return string.trim().replace(/\s/g, '-')

}

console.log(accum('zpglnrxqenU'))
accum("abcd") // "A-Bb-Ccc-Dddd"
accum("RqaEzty") // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") // "C-Ww-Aaa-Tttt"


// zadrot kakoi to rewil tak
// function accum(s) {
//   return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
// }