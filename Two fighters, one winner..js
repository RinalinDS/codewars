function declareWinner(fighter1, fighter2, firstAttacker) {
    let roundsFighter1 = Math.ceil(fighter1.health/fighter2.damagePerAttack)
    let roundsFighter2 = Math.ceil(fighter2.health/fighter1.damagePerAttack)

    if(firstAttacker === fighter1.name) {
        return roundsFighter1 >= roundsFighter2 ? fighter1.name : fighter2.name
    } else {
        return roundsFighter2 >= roundsFighter1 ? fighter2.name : fighter1.name
    }
}

function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function () {
        return this.name;
    }
}

let fighter1 = new Fighter("Lew", 10, 2)
let fighter2 = new Fighter("Harry", 5, 4)

console.log(declareWinner(fighter1, fighter2, 'Lew'));
console.log((declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry")));
console.log((declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry")));