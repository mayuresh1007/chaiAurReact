

// const themeContext = createContext({
//     themeselected:'light',
//     darkTheme:()=>{},
//     lightTheme:()=>{}
// })

// export default themeContext 



import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}