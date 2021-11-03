function evaporator(content, evap_per_day, threshold){
    let capacity = 100;
    count = 0;
    for (let i = 0; capacity > threshold; i++) {
        capacity -= capacity * (evap_per_day/100)
        count ++;

    }
    return count;
}

console.log(evaporator(0,11,10));