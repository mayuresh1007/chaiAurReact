import React, { useContext, useState } from "react";
import { CounterContext } from "../../contexts/CounterContext";

const Counter = () => {
  //   const [count, setCount] = useState(0);
  //   const { count, increaseCount, decreaseCount } = useCounter();
  //   const increase = () => {
  //     increaseCount(setCount(count + 1));
  //   };
  //   const decrease = () => {
  //     decreaseCount(setCount(count - 1));
  //   };

  const { count, increment, decrement } = useContext(CounterContext);

  return (
    <>
      {/* <Counterprovider value={{ count, increaseCount, decreaseCount }}> */}
      <h1>{count}</h1>
      {/* <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button> */}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      {/* </Counterprovider> */}
    </>
  );
};

export default Counter;
