import React, { useState } from "react";

const MayureshCode = () => {
  /*
        const [state, setState] = useState(initialValue);
        state → current value
        setState → function to update value
        initialValue → starting value
    */

  const [couter, setCount] = useState(0);
  const [rand, setRandom] = useState(0);
  //   console.log(useState) // its a function which is return the currnt state and setCounter is a again asynchronious function which allow to set the values asyncroonuously

  const Incre = (couter) => {
    if (couter < 5) {
      // setCount(couter + 1);

      // even after adding multiple time it will done at once becoz of batching fiber
      // setCount(couter + 1);
      // setCount(couter + 1);
      // setCount(couter + 1);
      // setCount(couter + 1);
      // setCount(couter + 1);

      // but if i want to update it then use callback main thing to notice is updated to 5

      setCount((preval) => preval + 1);
      setCount((preval) => preval + 1);
      setCount((preval) => preval + 1);
    }
  };
  const decre = (couter) => {
    if (couter > 0) {
      // setCount(couter - 1);

      setCount((preval) => preval - 1);
      setCount((preval) => preval - 1);
      setCount((preval) => preval - 1);
    }
  };

  //   const increment = () => {
  //     if (count < 5) {
  //       setCount(count + 1);
  //     }
  //   };

  //   const decrement = () => {
  //     if (count > 0) {
  //       setCount(count - 1);
  //     }
  //   };

  const increment = () => {
    setCount((prev) => Math.min(prev + 1, 5));
  };

  const decrement = () => {
    setCount((prev) => Math.max(prev - 1, 0));
  };

  // let valuer = 0;
  return (
    <div>
      Mayuresh with best practice Uppercase with component name
      <br />
      <button onClick={() => Incre(couter)}>+</button>
      <br />
      {couter}
      <br />
      <button onClick={() => decre(couter)}>-</button>
      <br />
      <h4>Add Random values</h4>
      <button onClick={() => setRandom(Math.random())}>{rand}</button>
    </div>
  );
};

export default MayureshCode;
