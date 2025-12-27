import React from "react";
import GiftCard from "../components/GiftCard";
import { Link } from "react-router-dom";

const Game = () =>{
    const gift_list = [
        {name:"gift",url:"memory"},
        {name:"gift",url:"memory"},
    ];
    return (
        <div className="flex flex-wrap justify-center h-screen overflow-y-scroll">
            {
                gift_list.map((elem,index)=>{
                    return (
                        <React.Fragment key={index}>
                            <Link to={"/gift/"+elem?.url}>
                                <GiftCard />
                            </Link>
                        </React.Fragment>
                    )
                })
            }
        </div>
    )
}

export default Game;