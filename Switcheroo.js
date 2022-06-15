function switcheroo(x) {
  return x.split('').map(m => {
    if (m === 'a') return 'b'
    if (m === 'b') return 'a'
    return m
  }).join('')
}