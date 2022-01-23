function sumOfIntegersInString(s){
    return s.replace(/\D/gi , " ").split(' ').map(Number).reduce((a,b) => a+b, 0)

}


console.log(sumOfIntegersInString("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"))