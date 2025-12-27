import { faPhone, faVideo, faCircleInfo,faArrowLeft, faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import kesav_dp from "../../assets/images/kesav_dp.jpg";
import "../../animations.css";
import { useEffect, useRef, useState } from "react";
import { chat } from "../../utils/chats";
import Phone from "../../assets/images/phone.svg"
import Video from "../../assets/images/video.svg"
import msg from "../../assets/images/message.svg"
const emojiImports = import.meta.glob(
  "../../assets/images/chats/*.{jpg,png}", 
  { eager: true }
);

// Convert file paths to a nice lookup object
const emoji = Object.fromEntries(
  Object.entries(emojiImports).map(([path, mod]) => {
    const fileName = path.split("/").pop().split(".")[0]; // e.g. "angery_devil"
    return [fileName, mod.default];
  })
);
const OurMemory = ()=>{

    const [visibleCount, setVisibleCount] = useState(0);
    const containerRef = useRef(null);
    useEffect(() => {
        if (visibleCount < chat.length) {
        const timer = setTimeout(() => {
            setVisibleCount((prev) => prev + 1);
        }, 3000); 

        return () => clearTimeout(timer);
        }
    }, [visibleCount, chat.length]);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [visibleCount]);
    return(
        <div className="h-screen">
            <div className="flex justify-between items-center h-14 bg-white-500 border border-white-700">
                <div className="flex">
                    <FontAwesomeIcon className="my-auto" icon={faArrowLeft} size="1x"></FontAwesomeIcon>
                    <div className="h-10 w-10 m-2 rounded-full bg-green-500 border border-black-500 relative">
                        <img className="rounded-full" src={kesav_dp} />
                        <div className="absolute bottom-0 -right-0.5 h-2.5 w-2.5 m-auto mr-1 bg-green-500 rounded-full border border-[black]"></div>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-lg font-bold mt-1">Kesav</div>
                        <div className="text-sm">
                            active
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <img src={Phone} className="font-bold px-1" />
                    <img src={Video} className="font-bold px-1" />
                </div>
            </div>
            <div className="h-[83vh] overflow-y-scroll" ref={containerRef}>
                <div className="flex flex-col min-h-[83.5vh] overflow-y-auto p-4 bg-gray-100 justify-end">
                {
                    chat.slice(0,visibleCount).map((chat,index)=>{
                        return (
                            <div className={"flex relative w-full my-1 "+chat.position}>
                                {chat.dp && (<div className="h-12 w-12 rounded-full overflow-hidden border border-black-500 shadow-md mx-1">
                                    <img className="w-12 h-12 object-cover rounded-lg" src={kesav_dp} />
                                </div>)}
                                {chat?.text && (<div className="showChat max-w-1/2 min-w-6 bg-blue-500 text-white border border-black-500 shadow rounded-3xl h-10 p-2">
                                    {chat.text}
                                </div>)}
                                {chat?.emoji &&(
                                    <img src={emoji[chat.emoji]} className="h-44 w-44 border border-black-500 shadow rounded-lg" />
                                )}
                                {chat.dp && (<div className="text-loader hideLoader absolute left-14 top-2 w-14 h-8 rounded-3xl bg-gray-500">
                                    <span className="absolute left-2 w-3 h-3 rounded-full top-1/2 -translate-y-1/2 bg-gray-700"></span>
                                    <span className="absolute right-5 -translate-x-1/2 w-3 h-3 rounded-full top-1/2 -translate-y-1/2 bg-gray-700"></span>
                                    <span className="absolute right-1 w-3 h-3 rounded-full top-1/2 -translate-y-1/2 bg-gray-700"></span>
                                </div>)}
                            </div>
                        )
                    })
                }
                </div>
            </div>
            <div className="h-[8vh] mb-5 mx-2">
                <div className="flex justify-between h-full rounded-full border bordre-black-700 shadow">
                    <div className="flex justify-center items-center h-12 w-12 rounded-full my-auto mx-2 bg-violet-500">
                        <FontAwesomeIcon icon={faCamera} style={{color:"white",fontSize:"25px"}}></FontAwesomeIcon>
                    </div>
                    <div className="flex w-44 items-center">
                        {chat[visibleCount]?.text}
                    </div>
                    <div className="flex justify-center items-center h-12 w-14 rounded-full my-auto mx-2 bg-violet-500">
                        <img src={msg} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurMemory;