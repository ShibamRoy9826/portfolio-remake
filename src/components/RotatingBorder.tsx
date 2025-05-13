"use client"

import style from "@/styles/about.module.css";
import {motion,useMotionValue,useTransform,animate} from "framer-motion";
import React ,{useEffect} from "react";

interface Props{
    innerStuff: React.ReactNode;
    duration?:number;
    className:string;
}

const RotatingBorder:React.FC<Props>=({innerStuff,duration,className})=>{

    const angle=useMotionValue(0);

    useEffect(()=>{
        const controls=animate(angle,360,{
        duration:duration,
        type:"tween",
        repeat:Infinity,
        repeatType:"loop"
        })
        return ()=>controls.stop();
    },[angle]);

    const gradientColor=useTransform(
        angle,
        (currAngle)=>{
        return `conic-gradient(from ${currAngle}deg at 50% 50%, var(--bg3),var(--bg2),var(--bg),var(--primary))`
        }
    )
    return(

    <div className={`relative rounded-xl flex flex-col items-center ${className} mt-24 ${style.aboutContainer}`}>
      <motion.div className={`inset-[-4px] rounded-xl ${style.borderContainer}`} style={{
        backgroundImage:gradientColor
      }}>
      </motion.div>
      <div className={`inset-0 rounded-xl flex flex-col items-center justify-center w-full h-full ${style.aboutContentContainer}`}>
        {innerStuff}
      </div>
    </div>
    );
}
export default RotatingBorder;