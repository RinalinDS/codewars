function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((acc, el) => acc+el,0)/classPoints.length
}

