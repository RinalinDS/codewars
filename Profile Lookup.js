// Setup
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    const ObjectWithProperName = contacts.filter(f => f.firstName === name)
         if (ObjectWithProperName.length > 0) {
             if (ObjectWithProperName[0][prop]) {
                 return ObjectWithProperName[0][prop]
             } else {
                 return "No such property"
             }
         } else {
             return "No such contact"
         }
}

console.log(lookUpProfile("Akira", "likes"));
console.log(lookUpProfile("Kristian", "lastName"))
console.log(lookUpProfile("Bob", "number"))