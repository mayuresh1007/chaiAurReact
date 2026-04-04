import {  createContext, useEffect, useState } from "react";

export const Themecontext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const DarkMode = () => setTheme("dark");
  const LightMode = () => setTheme("light");
  const ToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(()=>{
    document.getElementsByClassName('dark')
  },[])
  return (
    <Themecontext.Provider value={{ theme, DarkMode, LightMode, ToggleTheme }}>
      {children}
    </Themecontext.Provider>
  );
};

// // ThemeContext.js
// import React, { createContext, useState } from "react";

// export const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState("light");

//   const toggleTheme = () =>
//     setTheme(theme === "light" ? "dark" : "light");

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };
