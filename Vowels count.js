function getCount(str) {


    if (str.match(/[aouei]/gi)) return str.match(/[aouei]/gi).length
    else return 0


}

console.log(getCount('my pyx'))