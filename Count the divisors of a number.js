function getDivisorsCnt(n){
    let counter = 1;
    for (let i  = 0; i < n; i++) {
        if (n % i == 0){
            counter++
        }
    }

    return counter;
}