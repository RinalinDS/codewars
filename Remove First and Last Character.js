function removeChar(str){
    let a = str.split("")
    a.pop()
    a.shift()

    return a.join("")

}

console.log(removeChar('eloquent'))