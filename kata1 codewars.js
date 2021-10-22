var isSquare = function (n) {
    if (n < 0) {
        console.log(n + " : Negative numbers cannot be square numbers");
        return false;
    } else if (Number.isInteger(Math.sqrt(n))) {

        console.log(n + " is a square number" + "(" + Math.sqrt(n) + "*" + Math.sqrt(n) + ")");
        return true; // fix me
    } else {
        console.log(n + " is not a square number");
        return false;
    }
}

console.log(isSquare(17));

