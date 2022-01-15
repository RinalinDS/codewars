/* "This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained. */

function reverseWords(str) {
    return str
        .split(" ")
        .reverse()
        .join(" ")
        .split("")
        .reverse()
        .join("")
}

console.log(reverseWords("This is an example!"))




