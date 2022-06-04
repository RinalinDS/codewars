function titleCase(str) {
  return str.split(' ').map((m,i,arr) => {
    const ar = m.toLowerCase().split('')
    ar.splice(0,1, ar[0].toUpperCase())
    return ar.join('')
  }).join(' ')
}

console.log(titleCase("I'm a little tea pot"));