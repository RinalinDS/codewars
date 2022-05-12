function solution(str){
  const array = []
  for (let i = 0; i < str.length; i = i +2) {
    if (str[i+1]) {
      array.push(str[i] + '' + str[i + 1])
    } else {
      array.push(str[i] + '_')
    }
  }
  return array
}

console.log(solution('abcde'))

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']