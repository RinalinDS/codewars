function numericals(s) {
  const obj = {}
  let str = ''
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]]) obj[s[i]] += 1
    else obj[s[i]] = 1

    str += obj[s[i]]
  }
  return str
}

input = "Hello, World!"
result = "1112111121311"
numericals(input)
input = "aaaaaaaaaaaa"
result = "123456789101112"