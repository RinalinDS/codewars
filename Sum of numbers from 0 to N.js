var SequenceSum = {
  showSequence: function (count) {
    let sum = 0
    let string = '0'
    if (count > 0) {
      for (let i = 1; i <= count; i++) {
        string += `+${i}`
        sum += i
      }
      return `${string} = ${sum}`
    } else if (count ===0) return '0=0'
    else {
      return `${count}<0`
    }

  }
}


console.log(SequenceSum.showSequence(6));