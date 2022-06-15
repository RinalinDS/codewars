function firstDup (s) {
  for (let i = 0; i < s.length; i++) {
    if(i !== s.lastIndexOf(s[i])) return s[i]
  }
}

console.log(firstDup('translator'))