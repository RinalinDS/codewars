function compose(...functions) {
  return (arg) => {
    return functions.reduceRight((res, fn) => fn(res), arg);
  }
}


