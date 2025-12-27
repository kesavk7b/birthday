import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome,faGift,faGamepad } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
    const [active,setActive] = useState(1);
    const before = "before:content-[''] before:absolute before:h-14 before:w-20 before:bottom-0 before:bg-green-500 before:right-0 before:rounded-l-full before:border-l-4  before:border-[var(--color-bg)] before:rounded-br-full  ";

    const activeClass ="absolute bottom-3 w-14 h-20 pb-2 pr-3 bg-red-500 flex items-end rotate-45 rounded-t-full border-r-4 border-t-4 border-[var(--color-bg)] "+before;
    const icon_pos = "z-10 -rotate-45 -translate-x-3 translate-y-0 "

    return (
        <nav className="flex w-full fixed bottom-1 border border-[var(--color-border)] bg-[var(--color-surface)] ">
            <ul className="flex w-full justify-between align-center mx-5">
                <li className="p-2 my-1 mx-1 relative w-8" onClick={()=>setActive(1)}>
                    <span className={active == 1 ? activeClass:""}>
                        <Link to="/">
                            <FontAwesomeIcon className={active == 1 ?icon_pos:""} icon={faHome} style={{color:"var(--love-theme)"}} size="2x" />
                        </Link>
                    </span>
                </li>
                <li className="p-2 my-1 mx-1 relative w-8" onClick={()=>setActive(2)}>
                    <span className={active == 2 ? activeClass:""} style={{borderBottomRightRadius:"10px !important"}}>
                        <Link to="/game">
                            <FontAwesomeIcon className={active == 2 ?icon_pos:""} icon={faGamepad} style={{color:"var(--love-theme)"}} size="3x" />
                        </Link>
                    </span>
                </li>
                <li className="p-2 my-1 mx-1 relative w-8" onClick={()=>setActive(3)}>
                    <span className={active == 3 ? activeClass+" -left-3":""}>
                        <Link to="/gift">
                            <FontAwesomeIcon className={active == 3 ?icon_pos:""} icon={faGift} style={{color:"var(--love-theme)"}} size="2x" />
                        </Link>
                    </span>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;