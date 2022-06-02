function countSmileys(arr) {
  return arr.reduce((acc,el) => /[;:][~-]?[D)]/.test(el) ? [el, ...acc]: acc, [])
}