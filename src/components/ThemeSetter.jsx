import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

const ThemeSetter = () =>{
    const {setTheme} = useContext(ThemeContext);
    return (
        <div className="flex gap-3 h-10">
            <button onClick={() => setTheme("light")} className="px-4 py-2 rounded bg-gray-200 text-black">Light</button>
            <button onClick={() => setTheme("dark")} className="px-4 py-2 rounded bg-gray-800 text-white">Dark</button>
            <button onClick={() => setTheme("green")} className="px-4 py-2 rounded bg-green-500 text-white">Green</button>
            <button onClick={() => setTheme("vibgr")} className="px-4 py-2 rounded bg-yellow-400 text-black">Vibgr</button>
        </div>
    )
}

export default ThemeSetter;