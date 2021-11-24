function isPrime(n) {
    if (n < 2) {
        return false;
    }
    let x = Math.sqrt(n);
    for (let i = 2; i <= x; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return n !== 1;
}