function rowWeights(array){
    return array.reduce((acc, el, index ) => index%2 === 0 ? [acc[0] + el, acc[1]] : [acc[0] , acc[1] + el]  , [0, 0] )

}

console.log(rowWeights([13, 27, 49]));


