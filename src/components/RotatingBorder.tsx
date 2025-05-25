"use client"

// import style from "@/styles/about.module.css";
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
      <div className={`relative w-auto h-auto md:h-[45vh] md:max-w-[55vw] z-1 mb-12 mx-2 mt-12`}>
        <motion.div className={`relative rounded-xl z-2`} style={{
          backgroundImage:gradientColor,
          width:"100%",
          height:"100%"
        }}/>
      <div className={`relative rounded-xl z-3 overflow-y-scroll`} style={{
        bottom:"calc(100% - 2px)",
        left:"2px",
        width:"calc(100% - 4px)",
        height:"calc(100% - 4px)",
        backgroundImage:"linear-gradient(120deg,var(--bg2) 10%,var(--bg) 100%)"

      }} 
      >
        {innerStuff}
      </div>
      </div>
    );
}
export default RotatingBorder;