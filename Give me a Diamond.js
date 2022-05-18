function diamond(n) {
  if (n <= 0 || n % 2 === 0) return null
  let diam= ''
  for (let i = 1; i <= n; i+=2) {
        diam += `${(' ').repeat(Math.abs((n - i)/2 > 0 ? (n -i)/2 : 0))}${'*'.repeat(i)}\n`
  }
  for (let i = n-2; i >=1 ; i-=2) {
    diam += `${(' ').repeat(Math.abs((n - i)/2 > 0 ? (n -i)/2 : 0))}${'*'.repeat(i)}\n`
  }
    return diam;
}

console.log(diamond(5))


// repeat(nFloors-i)+('*').repeat(i + (i - 1))+ (' ').repeat(nFloors-i))