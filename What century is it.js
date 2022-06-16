function whatCentury(year) {
  let century = Math.ceil(year/100)
  if( 9 < century < 20) return `${century}th`
  switch (century.toString().split('')[century.toString().length-1]) {
    case '1' : {
      return `${century}st`
    }
    case '2' : {
      return `${century}nd`
    }
    case '3' : {
      return `${century}rd`
    }
    default :
      return `${century}th`
  }
}


console.log(whatCentury(1123))