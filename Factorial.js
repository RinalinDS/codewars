function factorial(n){
    let summ = 1;
    if (n == 0){
        return 1;
    } else if ( n < 0 || n > 12){
        return "RangeError"
    } else {
        for (let i = 1; i <= n; i++){
            summ *= i;
        }
        return summ;
    }
}
