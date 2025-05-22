"use client"

import * as motion from "motion/react-client";
import React, { useState ,useEffect,useRef} from "react";
import style from "@/styles/components.module.css";

interface Props{
    svg:React.ReactNode;
    className:string;
    func:()=>void;
    funcOff:()=>void;
}

const Switch:React.FC<Props>=({svg,className,func,funcOff})=>{
    const [isOn, setIsOn] = useState(false);
    const [changed,setChanged]=useState(false);

    const toggleSwitch = () => {
        setChanged(true);
        setIsOn(!isOn);
    }
    const sfxElementRef=useRef<HTMLAudioElement|null>(null);

    useEffect(()=>{
        if(changed){
            if(isOn){
                try{
                    func();
                    sfxElementRef.current=new Audio("/sfx/switch-on.wav");
                    sfxElementRef.current.play();
                }catch{
                    func();
                }
            }else{
                try{
                    funcOff();
                    sfxElementRef.current=new Audio("/sfx/switch-off.wav");
                    sfxElementRef.current.play();
                }catch{
                    funcOff();
                }
            }
        }
    },[isOn]);


    return (
        <div className={className}>
            {svg}
        <button
            className={`${style.switchInnerBox} linkCursor`}
            style={{
                justifyContent: "flex-" + (isOn ? "end" : "start"),
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