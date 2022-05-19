function longestConsec(strarr, k) {
  if (strarr.length < k || strarr.length < 1 || k < 1) return ''
  let max = 0
  let result;
  for (let i = 0; i < strarr.length ; i++) {
    let string = strarr.slice(i, i+k).join('')

    if (string.length > max) {
      max = string.length

      result = string

    }

  }
  return result
}


console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2));