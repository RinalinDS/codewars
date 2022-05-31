function isSantaClausable(obj) {
  return ["sayHoHoHo", "distributeGifts", "goDownTheChimney"].every(e => typeof obj[e] == "function")
}