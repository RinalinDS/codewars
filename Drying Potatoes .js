function potatoes(p0, w0, p1) {
    let x = 100 - p0;
    let y = 100 - p1;
    let z = x/y;
    let k = w0*z
    return k;
}
console.log(potatoes(82, 127, 80));