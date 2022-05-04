function findOutlier(int){
  const obj = {
    even: [],
    odd: []
  }
  int.reduce((acc, el) => {
    el%2 === 0? acc.even.push(el) : acc.odd.push(el)
    return acc
  }, obj)
  return obj.even.length > obj.odd.length ? obj.odd[0] : obj.even[0]
}

console.log(findOutlier([2, 6, 8, 10, 3]))