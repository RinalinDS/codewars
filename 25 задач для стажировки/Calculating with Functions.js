function zero(param) {
  return param ? param(0) : 0
}

function one(param) {
  return param ? param(1) : 1
}

function two(param) {
  return param ? param(2) : 2
}

function three(param) {
  return param ? param(3) : 3
}

function four(param) {
  return param ? param(4) : 4
}

function five(param) {
  return param ? param(5) : 5
}

function six(param) {
  return param ? param(6) : 6
}

function seven(param) {
  return param ? param(7) : 7
}

function eight(param) {
  return param ? param(8) : 8
}

function nine(param) {
  returnparam ? param(9) : 9
}

function plus(b) {
  return function (a) {
    return a + b;
  };
}

function minus(b) {
  return function (a) {
    return a - b;
  };
}

function times(b) {
  return function (a) {
    return a * b;
  };
}

function dividedBy(b) {
  return function (a) {
    return a / b;
  };
}