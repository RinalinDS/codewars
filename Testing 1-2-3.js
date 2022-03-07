var number=function(array){
    let str = [];
    let counter = 1;
       for (let i = 0; i < array.length; i++){
        str.push(counter + "" + ": " + array[i]);
        counter++;

    }
    return str;
}


console.log((number([4 ,5 ,7 ])))