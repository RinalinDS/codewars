function vertMirror(strng) {
    return strng.split('\n').map(el => el.split('').reverse().join('')).join('\n')
}
function horMirror(strng) {
    return strng.split('\n').reverse().join('\n')
}
function oper(fct, s) {
    return fct(s)
}

// s = "abcd\nefgh\nijkl\nmnop"
// oper(vert_mirror, s) => "dcba\nhgfe\nlkji\nponm"
// oper(hor_mirror, s) => "mnop\nijkl\nefgh\nabcd"


console.log(vertMirror("abcd\nefgh\nijkl\nmnop"));
console.log(horMirror("abcd\nefgh\nijkl\nmnop"));

console.log(oper(vertMirror, "abcd\nefgh\nijkl\nmnop"));