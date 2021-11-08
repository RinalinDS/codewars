/* "This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained. */

function reverseWords(str) {
    let array = str.split(" ");
    let array1 = "";
    for (let i = 0; i < array.length; i++){
        let word = array[i];
        console.log(word);
        for (let k = word.length-1; k > -1; k--){
            array1 += word[k];

        }
    }
    console.log(array);
    console.log(array1);
}

reverseWords("This is an example!");



