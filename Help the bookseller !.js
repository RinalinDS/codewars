function stockList(listOfArt, listOfCat) {
  if (!listOfArt.length || !listOfCat.length) {
    return '';
  }
  return listOfCat
    .map((book) => {
      const sum = listOfArt.reduce(
        (acc, title) => acc + (title[0] === book ? +title.split(' ')[1] : 0),
        0,
      );
      return `(${book} : ${sum})`;
    })
    .join(' - ');
}

b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"]
c = ["A", "B", 'C', 'W']

console.log(stockList(b, c))