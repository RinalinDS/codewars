/*
Complete the method which returns the number which is most frequent in the given input array.
    If there is a tie for most frequent number, return the largest number among them.
    Note: no empty arrays will be given.*/

/*

[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
    [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
    [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3*/


function highestRank(arr) {

    let counter = 1;
    let maxCounter = 0;
    let pro = arr[0];
    let highest = arr[0];

    for (let i = 0; i < arr.length; i++) {
        pro = arr[i]
        for (let j = 1; j < arr.length - 1; j++) {
            if (arr[i] === arr[j]) {
                counter++
            }
        }
        if (counter > maxCounter) {
            highest = pro;


        }

    }
    return highest
}

    console.log(highestRank([1, 12, 12, 12, 7, 6, 4, 10, 12, 10, 10]))