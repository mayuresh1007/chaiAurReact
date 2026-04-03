import { useContext } from "react";
import themeContext from "./themecontext";
import { useState } from "react";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const darkTheme =()=>{
    setTheme('dark')
  }
  const lightTheme =()=>{
    setTheme('light')
  }
  return (
    <themeContext.Provider value={{ theme, setTheme, darkTheme, lightTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeProvider;
