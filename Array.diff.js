function arrayDiff(a, b) {
  let array = [...a]
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a.includes(b[j])) array = array.filter(f => f !== b[j])
    }


  }
  return array
}

