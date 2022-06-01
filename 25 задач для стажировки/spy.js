function spyOn (func) {
  let callCount = 0;
  const calledWith = [];
  const returnValues = [];
  function spy (...args) {
    const returnVal = func(...args);
    callCount++;
    calledWith.push(...args);
    returnValues.push(returnVal);
    return returnVal;
  }
  spy.callCount = function () {
    return callCount;
  };
  spy.wasCalledWith = function (value) {
    return calledWith.includes(value);
  };
  spy.returned = function (value) {
    return returnValues.includes(value);
  };
  return spy;
}