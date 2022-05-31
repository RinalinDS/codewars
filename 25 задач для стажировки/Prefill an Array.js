function prefill(n, v) {
  if (typeof(n) == 'boolean' || isNaN(Number(n)) || (n % 1) != 0 || Number(n) < 0) throw new TypeError(`${n} is invalid`)

  return new Array(+n).fill(v)


}

console.log(prefill(0 ));
// console.log(prefill(3, prefill(2, '2d')));
// console.log(prefill(3,2 ))
//
//
// console.log(parseInt('2d'))
// console.log(Math.abs('2d'))