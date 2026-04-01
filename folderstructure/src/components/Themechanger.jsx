import React, { useState } from "react";

const Themechanger = () => {
  const [theme, setTheme] = useState("white");
  return (
    <div style={{ backgroundColor: theme }}>
        <h1>Themechanger</h1>
      <ul>
        <li>
          <button
            className=""
            onClick={() => {
              setTheme("red");
            }}
          >red</button>
        </li>
        <li>
          <button
            className=""
            onClick={() => {
              setTheme("green");
            }}
          >green</button>
        </li>
        <li>
          <button
            className=""
            onClick={() => {
              setTheme("grey");
            }}
          >gray</button>
        </li>
        <li>
          <button
            className=""
            onClick={() => {
              setTheme("yellow");
            }}
          >yellow</button>
        </li>
      </ul>
    </div>
  );
};

export default Themechanger;
