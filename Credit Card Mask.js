function maskify(cc) {

        return cc.split('').reverse().map((m, i) => i <= 3? m : '#').reverse().join('')


}

console.log(maskify('4556364607935616'))

/*

function maskify(cc) {
    return cc.replace(/.(?=....)/g, '#');
}

function maskify(cc) {
    return cc.replace(/.(?=.{4})/g, "#");
}*/
