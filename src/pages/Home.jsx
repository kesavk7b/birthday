import { useNavigate } from "react-router-dom";
import StaticTexturedCube from "../assets/textures/StaticTexturedCube";

const Home = () => {
    const navigate = useNavigate();
    return(
        <div className="flex flex-col items-center justify-c h-screen bg-pink-200">
            <div className="relative h-52 w-52 my-12 z-0">
                <img className="h-52 w-52 relative z-0 rounded-full border border-black p-1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFC3uIys7XJNUauBEKMySIQemNaLf0A1IHfV_ByPBSUtuZT9hIMvbS2pc6MasYAIWtOit48kdJW2kqxtMRVTGe4WbfgGqkWozE5egRzlL0PFBCUAHEiTLCuCsBHKMxExTWKRYGNNFI-GFVGAo8lMHkKylkolpE8bcAcH08H6gsUDHLFivvC2MCiM_p0EQAo1WJ11gnYCUcTI-9F_ISW0X2zSJM-AnulvYQ7Je0ZEMbnp1m0laTnsrax50gWyJOQ_nC9pnTdfmNmBPv" alt="" />
                <div className="absolute -bottom-2 right-4 -rotate-6 z-10 bg-white rounded-full shadow p-2 text-pink-600">🎂 make a wish</div>
            </div>
            <div className="flex justify-center items-center flex-col p-2">
                <h1 className="text-yellow-600 text-5xl font-serif">Happy</h1>
                <h1 className="text-yellow-600 text-5xl font-serif">Birthday</h1>
                <h1 className="text-red-500 text-5xl font-serif">Suganthi</h1>
                <p className="text-center w-[60%] pt-3">
                    Here a little something to make your  day extra special.
                </p>
                <div className="py-2 text-blue-600">
                    from me😉
                </div>
                <button className="w-44 h-10 rounded-full text-white border border-[var(--color-border)] bg-pink-600 m-1" onClick={()=>navigate('/wish')}>
                    Unwrap
                </button>
                <div className="text-center">tap to open</div>
            </div>
        </div>
    )
}
export default Home;