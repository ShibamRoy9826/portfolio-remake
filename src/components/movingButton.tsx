"use client"
import React from "react";
import * as motion from "motion/react-client";
import { redirect } from "next/navigation";

interface Props {
  svg: React.ReactNode;
  className?: string; 
  innerText?: string; 
  url?: string; 
  sameTab?: boolean;
}

const MovingButton: React.FC<Props>=({svg,className,innerText,url,sameTab})=>{
  const openTab=()=>{
    if(sameTab && url){
      redirect(url);
    }else{
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }
    return (
      <motion.div className="z-[0] mx-20 my-4 lg:my-16">
      <motion.div className="flex flex-row items-center justify-center cursor-pointer linkCursor " initial={{zIndex:0}} animate={{y:[0,-10,0]}} transition={{duration:3,repeat:Infinity}}>

        <button className={`${className} linkCursor relative`} onClick={openTab}>
            {svg}
          <span className="text-2xl ml-4 text-[var(--bg)] linkCursor no-select" >{innerText}</span>
        </button>
      </motion.div>
</motion.div>

    );
};


export default MovingButton;
