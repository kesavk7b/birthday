import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({children})=>{
    const [theme,setTheme] = useState(
        () => localStorage.getItem("theme") || "dark"
    )
    useEffect(()=>{
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
      },[theme]);
    return(
        <ThemeContext.Provider value={{theme,setTheme}}>{children}</ThemeContext.Provider>
    )
}