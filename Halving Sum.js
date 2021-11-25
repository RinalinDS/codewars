function halvingSum(n) {
    let summ = n;
    for(let i = 2; i < n; i*=2){
        summ += Math.floor(n/i);
    }
    return summ;

}


console.log(halvingSum(127));