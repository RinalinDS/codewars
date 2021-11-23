function howMuchILoveYou(nbPetals) {
    let message = 0;
    let x = nbPetals%6;
    console.log(x);
    switch(x){
        case 1:
            message = "I love you";
            break;
        case 2:
            message = "a little";
            break;
        case 3:
            message = "a lot";
            break;
        case 4:
            message = "passionately";
            break;
        case 5:
            message = "madly";
            break;
        case 0:
            message = "not at all";
            break;

    }
    return message;
}


console.log(howMuchILoveYou(7))