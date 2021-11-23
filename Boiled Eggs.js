function cookingTime(eggs) {
    if (eggs > 8) {
        if (eggs % 8 > 0) {
            return (Math.floor(eggs / 8) + 1) * 5;
        } else {
            return (eggs / 8) * 5;
        }
    } else if (eggs == 0 ) {
        return 0;

    } else {
        return 5;
    }
}