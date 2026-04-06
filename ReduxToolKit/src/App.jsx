import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./slices/couterSlice";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  return (
    <div style={{ textAlign: "center", marginTop: "5rem" }}>
      <h3>Counter (0 - 10)</h3>
      <h1>{count}</h1>
      
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <button 
          onClick={() => dispatch(decrement())}
          disabled={count === 0} // Visual feedback for lower limit
        >
          -
        </button>

        <button 
          onClick={() => dispatch(increment())}
          disabled={count === 10} // Visual feedback for upper limit
        >
          +
        </button>
      </div>

      {count === 10 && <p style={{ color: "red" }}>Upper limit reached!</p>}
      {count === 0 && <p style={{ color: "gray" }}>Lower limit reached!</p>}
    </div>
  );
}

export default App;