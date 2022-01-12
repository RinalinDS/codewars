function abbrevName(name){
    console.log(name.split(" ").map(m=> m[0]))
 return name.split(" ").map(m=> m[0]).join(".").toUpperCase()


}



console.log(abbrevName("Sam Harris"))