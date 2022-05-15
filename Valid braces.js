function validBraces(braces) {
  let arr = [...braces]
  let stack = []

  for (let i = 0; i < arr.length; i++) {
    if (('({[').includes(arr[i])) {
      stack.push(arr[i])
    } else {
      if (arr[i] === ')' && stack[stack.length - 1] === '(') {
        stack.pop()
        continue
      }
      if (arr[i] === '}' && stack[stack.length - 1] === '{') {
        stack.pop()
        continue
      }
      if (arr[i] === ']' && stack[stack.length - 1] === '[') {
        stack.pop()
        continue
      }
      return false
    }

  }
  return !stack.length

}

console.log(validBraces('(())'))