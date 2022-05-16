function isValidWalk(walk) {
  const obj = walk.reduce((acc,el) => {
    acc[el] ? acc[el] +=1 : acc[el] = 1
    return acc
  } , {})
  let {n, s, w, e} = obj
  let arr = [n , s , w ,e ]
  const sum = arr.reduce((ac, el) => el? ac+ el : ac , 0)
  if (sum!== 10) return false
  return !(n !== s || w !== e);

}

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));