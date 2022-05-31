function createMessage() {
  let _args = [...arguments]
  function inner(...args) {
    _args = [..._args, ...args]
    if([...args].length <1) {
      return _args.join(' ')
    }  else {
      return inner
    }
  }
  return inner
}

console.log(createMessage("Hello")("World!")("how")("are")("you?")());