function sortTheInnerContent(words) {
  return words.split(' ').map(m => m.length > 2 ? m.substring(0,1) + m.substring(1, m.length-1).split('').sort((a,b) => b.localeCompare(a)).join('') + m.substring(m.length-1, m.length) : m).join(' ')
}

console.log(sortTheInnerContent("sort the inner content in descending order"))