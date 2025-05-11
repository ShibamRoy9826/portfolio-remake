"use client"
import style from "../styles/skills.module.css";
import {motion} from "framer-motion";
import React from "react";

interface Props{
    full:string;
    percent:number;
}
const ProgressBar:React.FC<Props>=({full,percent})=>{
    return(
        <div className={style.progressContainer} style={{width:full}}>
            <motion.div className={style.progressBar} 
                  initial={true} 
                  animate={{ width: `${percent}%`}}
                  transition={{ duration: 1, type:"spring"}}>
                  </motion.div>
        </div>
    );
}

export default ProgressBar;