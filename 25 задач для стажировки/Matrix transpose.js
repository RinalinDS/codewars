function transpose(matrix) {
  let resultArr = [];
  for (let i = 0; i < matrix[0].slice().length; i++) {
    let arr = [];
    for (let j = 0; j < matrix.slice().length; j++) {
      arr.push(matrix[j][i]);
    }
    resultArr.push(arr);
  }
  return resultArr;
}