function bump(x){
  console.log(x)
  return x.match(/[n]+/g)?.join('').length > 15 ? "Car Dead" : "Woohoo!"
}


console.log(bump("_nnnnnnn_n__n______nn__nn_nnn"));