function validatePIN (pin) {
    if (pin.length === 6 || pin.length === 4) {
        let reg = /\D/g

       return !pin.match(reg)
    }
    return false
}


console.log(validatePIN('1234'))

