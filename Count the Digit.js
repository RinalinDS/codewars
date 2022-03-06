function nbDig(n, d) {
    let arr = [];
    for (let i = 0; i <= n; i++) {
        arr.push(i * i)
    }
    let include = 0;
    arr.map(m => m.toString().split('')).map(f => {
        f.map(s => {
            if (s.includes(d)) {
                include++
            }
            return s
        })
        return f
    })
    return include
}



console.log(nbDig(25, 1));