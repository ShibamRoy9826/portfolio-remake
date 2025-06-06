"use client"
import {motion} from "framer-motion";
import Image from "next/image";
import {useState} from "react";

interface Props{
    imgSrc:string;
    altName:string;
}

const AcCard:React.FC<Props>=({imgSrc,altName})=>{
    const [isHovered,setHover]=useState(false);
    const handleMouseHover=()=> setHover(true);
    const handleMouseLeave=()=> setHover(false);
    const viewPhoto=(s:string)=>{
        window.open(s,'_blank')
    }

    return(
        <motion.div className="ease duration-250 flex flex-col rounded-xl w-[100%] h-[20rem] shadowBox border-3 border-[var(--bg3)]" exit={{scaleX:1,scaleY:1}} onMouseEnter={handleMouseHover} onTap={handleMouseHover} onMouseLeave={handleMouseLeave} onTapCancel={handleMouseLeave}
        
        onDoubleClick={()=>viewPhoto(imgSrc)}
        style={{
            backgroundImage:"linear-gradient(120deg,var(--bg2) 10%,var(--bg) 100%)",
            scale:isHovered?1.1:1,
            borderColor:isHovered?"var(--primary)":"var(--bg3)",
            overflow:"hidden"
            // backgroundColor:"var(--bg2)"
        }}
        >
            <div className="relative w-full h-full" style={{
                borderBottom:"2px solid var(--fg3)"
            }}>
            <Image src={imgSrc} alt={altName} layout="fill" objectFit="cover"/>
            </div>
        </motion.div>
    );
}

export default AcCard;