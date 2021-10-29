function narcissistic(value) {
    let valueLength = String(value);
    let summ = 0;
    for (let i = 0; i < valueLength.length; i++) {
        summ += Math.pow(valueLength[i], valueLength.length);
    }
    if (summ === value) {
        return true;
    }
    return false;

}

narcissistic(153);
