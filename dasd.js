function checkObj(obj, checkProp) {
    // Only change code below this line
    let x = "";
    if (obj.hasOwnProperty(checkProp)){
        let x = obj[checkProp];
        return x;
    } else {
        return "Not Found"
    }

    // Only change code above this line
}

checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift")