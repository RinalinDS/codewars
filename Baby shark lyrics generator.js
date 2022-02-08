/*


Baby shark, doo doo doo doo doo doo
Baby shark, doo doo doo doo doo doo
Baby shark, doo doo doo doo doo doo
Baby shark!
Mommy shark, doo doo doo doo doo doo
Mommy shark, doo doo doo doo doo doo
Mommy shark, doo doo doo doo doo doo
Mommy shark!
Daddy shark, doo doo doo doo doo doo
Daddy shark, doo doo doo doo doo doo
Daddy shark, doo doo doo doo doo doo
Daddy shark!
Grandma shark, doo doo doo doo doo doo
Grandma shark, doo doo doo doo doo doo
Grandma shark, doo doo doo doo doo doo
Grandma shark!
Grandpa shark, doo doo doo doo doo doo
Grandpa shark, doo doo doo doo doo doo
Grandpa shark, doo doo doo doo doo doo
Grandpa shark!
Let's go hunt, doo doo doo doo doo doo
Let's go hunt, doo doo doo doo doo doo
Let's go hunt, doo doo doo doo doo doo
Let's go hunt!
Run away,…*/

function babySharkLyrics() {
    const array = ['Baby shark', 'Mommy shark', 'Daddy shark', 'Grandma shark', 'Grandpa shark', 'Let\'s go hunt']
    const dodo = ', doo doo doo doo doo doo\n'
    return `${array.map(m => `${(m + dodo).repeat(3)}${m}!\n`).join("")}Run away,…`
}

console.log(babySharkLyrics())

const babyshark = "Baby shark, doo doo doo doo doo doo\n\
Baby shark, doo doo doo doo doo doo\n\
Baby shark, doo doo doo doo doo doo\n\
Baby shark!\n\
Mommy shark, doo doo doo doo doo doo\n\
Mommy shark, doo doo doo doo doo doo\n\
Mommy shark, doo doo doo doo doo doo\n\
Mommy shark!\n\
Daddy shark, doo doo doo doo doo doo\n\
Daddy shark, doo doo doo doo doo doo\n\
Daddy shark, doo doo doo doo doo doo\n\
Daddy shark!\n\
Grandma shark, doo doo doo doo doo doo\n\
Grandma shark, doo doo doo doo doo doo\n\
Grandma shark, doo doo doo doo doo doo\n\
Grandma shark!\n\
Grandpa shark, doo doo doo doo doo doo\n\
Grandpa shark, doo doo doo doo doo doo\n\
Grandpa shark, doo doo doo doo doo doo\n\
Grandpa shark!\n\
Let's go hunt, doo doo doo doo doo doo\n\
Let's go hunt, doo doo doo doo doo doo\n\
Let's go hunt, doo doo doo doo doo doo\n\
Let's go hunt!\n\
Run away,…";

console.log(babyshark)