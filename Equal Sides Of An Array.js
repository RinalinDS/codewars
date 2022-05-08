function findEvenIndex(arr) {
  let equalizer
  for (let i = 0; i < arr.length; i++) {
    let arrStart = arr.slice(0, i)
    let arrFinish = arr.slice(i + 1)
    console.log(arrStart.reduce((acc, el) => acc + el, 0), arrFinish.reduce((acc, el) => acc + el, 0))
    if (arrStart.reduce((acc, el) => acc + el, 0) === arrFinish.reduce((acc, el) => acc + el, 0)) {
      equalizer = i
    }
  }
  return equalizer === undefined ? -1 : equalizer
}

console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]))


// const a = [].reduce((acc,el) => acc+el , 0)
// console.log(a)
