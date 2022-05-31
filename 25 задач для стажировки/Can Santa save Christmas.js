function determineTime(durations) {
  return durations.map(m => m.split(':')).reduce((acc, el) => acc + +el[0] + el[1] / 60 + +el[2] / 3600, 0) <= 24
}

console.log(determineTime(['04:30:00', '02:00:00', '01:30:00', '16:00:00']));