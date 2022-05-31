function duplicateCount(text) {
  text = text.toLowerCase()
  let obj = {}
  for (let i = 0; i < text.length; i++) {
    if (obj[text[i]]) {
      obj[text[i]] += 1
    } else {
      obj[text[i]] = 1
    }
  }
  const array = []
  for (let key in obj) {
    if (obj[key] > 1){
      array.push(key)
    }
  }

  return array.length
}

duplicateCount('Indivisibilities')