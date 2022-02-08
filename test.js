let obj = {
    'o': 20,
    o: 30
}


console.log(obj['o'] + obj.o)

let array = [1, 3, 5]
console.log(2 in array) // true false?
console.log(3 in array) // true false?

var a = 10
function f() {
    if (a) {
        console.log('8')
        var a = 11
    }
    console.log(`a budet : ${a}`)
}

f()


let user = {
    name: "Джон",
    go() {
        console.log(this.name) }
};

user.go()


class Book {
    constructor(author) {
        this._author = author;
    }
    // getter
    get writer() {
        return this._author;
    }
    // setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);


class thermostat {
    constructor(s) {
        this.s = s;
    }
    get 
}