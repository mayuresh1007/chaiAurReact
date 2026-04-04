// Home.js
import React, { useContext } from "react";
import { CounterContext } from "../../contexts/CounterContext";
import { ThemeContext } from "../../contexts/ThemeContext";

const Home = () => {
  const { count, increment, decrement } = useContext(CounterContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const styles = {
    background: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    height: "100vh",
    padding: "20px",
  };

  return (
    <div style={styles}>
      <h1>Multiple Context API Example</h1>

      <h2>Counter: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>

      <hr />

      <h2>Theme: {theme}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Home;