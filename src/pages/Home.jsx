import { useNavigate } from "react-router-dom";
import StaticTexturedCube from "../assets/textures/StaticTexturedCube";

const Home = () => {
    const navigate = useNavigate();

    return(
        <div className="flex flex-col items-center justify-center h-screen">
            <button className="w-44 h-10 rounded-full border border-[var(--color-border)] bg-[var(--color-btn-bg)]" onClick={()=>navigate('/wish')}>
                Touch
            </button>
        </div>
    )
}
export default Home;