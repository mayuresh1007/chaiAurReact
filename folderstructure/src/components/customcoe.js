function useStaTe(value, operation) {
  let state = value;
  function setFun(value) {
    // value is set based on operation
    newvalue = value + 1;
    return newvalue;
  }
  return [state, setFun];
}

console.log(useStaTe(5));
