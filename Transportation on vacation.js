function rentalCarCost(d) {
    let counter = 0
    for (let i = 0; i < d; i++){
        counter += 40;
    }
    if (d >= 7) {
        counter -=50;
    } else if (d >= 3) {
        counter-= 20;
    }
    return counter;
}