function divisors(integer) {
    let array = [];
    for (i = 2; i < integer; i++) {
        if (integer % i == 0) {
            array.push(i)
        }
    }
    if (array.length == 0) {
        return integer + " is prime";
    } else {
        return array;
    }
};