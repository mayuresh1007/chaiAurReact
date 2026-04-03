import {  useEffect, useState } from "react";
import "./App.css";
import ThemeBtn from "./ThemeBtn";
import Card from "./Card";
import useTheme, { ThemeProvider } from "./contexts/themecontext";
import GthubForm from "./GthubForm";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

 


  return (
    <>
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
            </div>


            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
          <GthubForm/>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
