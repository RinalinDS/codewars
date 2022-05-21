function sumDigPow(a, b) {
  let array = Array.from({length: b - a + 1}, (v, k) => k + a);
  return array.filter(f => {
    let sum = 0
    for (let i = 1; i <= f.toString().length; i++) {

      sum = sum + (Math.pow(+f.toString()[i-1], i) )
    }

    return sum === f
  })

}

console.log(sumDigPow(88, 90));

// Test.assertSimilar(sumDigPow(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9])
// Test.assertSimilar(sumDigPow(1, 100), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89])
// Test.assertSimilar(sumDigPow(10, 100),  [89])
// Test.assertSimilar(sumDigPow(90, 100), [])
// Test.assertSimilar(sumDigPow(90, 150), [135])
// Test.assertSimilar(sumDigPow(50, 150), [89, 135])
// Test.assertSimilar(sumDigPow(10, 150), [89, 135])