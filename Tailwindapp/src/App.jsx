import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("#ffe4e6");

  return (
    <div className={`container bg-[${theme}] h-[80vh] w-[100%]`} style={{ backgroundColor: theme }}>
      <h1 className={`text-[${theme}] `}>{theme}</h1>
      <button
        className={`border border-[${theme}] px-4 py-2 rounded text-[${theme}] bg-[${theme}] ms-4`}
        onClick={() => {
          setTheme("#64748b");
        }}
      >
        gray
      </button>
      <button
         className={`border border-[${theme}] px-4 py-2 rounded text-[${theme}] bg-[${theme}] ms-4`}
        onClick={() => {
          setTheme("#fca5a5");
        }}
      >
        pink
      </button>
      <button
         className={`border border-[${theme}] px-4 py-2 rounded text-[${theme}] bg-[${theme}] ms-4`}
        onClick={() => {
          setTheme("#fde68a");
        }}
      >
        yellow
      </button>
      <button
        className={`border border-[${theme}] px-4 py-2 rounded text-[${theme}] bg-[${theme}] ms-4`}
        onClick={() => {
          setTheme("#5eead4");
        }}
      >
        cyan
      </button>
      <button
        className={`border border-[${theme}] px-4 py-2 rounded text-[${theme}] bg-[${theme}] ms-4`}
        onClick={() => {
          setTheme("#ffe4e6");
        }}
      >
        baby pink
      </button>
    </div>
  );
}

export default App;
