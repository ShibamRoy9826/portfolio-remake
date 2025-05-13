"use client"

import * as motion from "motion/react-client";
import React, { useState ,useEffect} from "react";
import style from "@/styles/components.module.css";

interface Props{
    svg:React.ReactNode;
    className:string;
    func:()=>void;
    funcOff:()=>void;
}

const Switch:React.FC<Props>=({svg,className,func,funcOff})=>{
    const [isOn, setIsOn] = useState(true);

    const toggleSwitch = () => setIsOn(!isOn);

    useEffect(()=>{
        if(!isOn){
            func();
        }else{
            funcOff();
        }
    },[isOn]);


    return (
        <div className={className}>
            {svg}
        <button
            className={`${style.switchInnerBox} linkCursor`}
            style={{
                justifyContent: "flex-" + (isOn ? "start" : "end"),
            }}
            onClick={toggleSwitch}
        >
            <motion.div
                className={`${style.switchHandle} linkCursor`}
                layout
                transition={{
                    type: "spring",
                    visualDuration: 0.4,
                    bounce: 0.5,
                }}
            />
        </button>
        </div>
    )
}

export default Switch;