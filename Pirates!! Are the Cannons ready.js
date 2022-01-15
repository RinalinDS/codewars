const cannonsReady = (gunners) => {
   let x = Object.values(gunners)
    console.log(x.filter(f => f=== "nay").length)
    if( x.filter(f => f=== "nay").length > 0) {
        return 'Shiver me timbers!'
    } else return "Fire!"
}

console.log(cannonsReady({'Mike':'aye','Joe':'nay','Johnson':'aye','Peter':'aye'}))