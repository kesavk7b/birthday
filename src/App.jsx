import { Route, Routes, useLocation } from "react-router-dom";
import { useContext } from "react";
import Home from "./pages/Home";
import { ThemeContextProvider, ThemeContext } from "./context/ThemeContext";
import ThemeSetter from "./components/ThemeSetter";
import NavBar from "./components/NavBar";
import Game from "./pages/Game";
import Gift from "./pages/Gift";
import OurMemory from "./pages/gifts/OurMemory";
import Wish from "./pages/Wish";

function AppLayout() {
  const { theme, setTheme } = useContext(ThemeContext);
  const location = useLocation();

  const hideNav = location.pathname.startsWith("/gift/");

  return (
    <div className="h-full bg-[var(--color-bg)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="/gift/memory" element={<OurMemory />} />
        <Route path="/wish" element={<Wish />} />
      </Routes>

      {/* {!hideNav && <NavBar />} */}
    </div>
  );
}

function App() {
  return (
    <ThemeContextProvider>
      <AppLayout />
    </ThemeContextProvider>
  );
}

export default App;
