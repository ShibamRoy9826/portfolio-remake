"use client"
import style from "@/styles/components.module.css";
import {motion} from "framer-motion";
import {usePathname} from 'next/navigation';
import React, {useState,useEffect} from "react";

const navItems = [
  { name: 'Home', path: '/' ,id:1},
  { name: 'About', path: '/about',id:2 },
  { name: 'Skills', path: '/skills',id:3 },
  { name: 'Projects', path: '/projects',id:4 },
  { name: 'Acheivements', path: '/acheivements',id:5 },
];

function findIdByPath(pathToFind:string) {
  const foundItem = navItems.find(item => item.path === pathToFind);
  if (foundItem) {
    return foundItem.id;
  }
  return 0;
}

export default function Progress(){
    const path=usePathname();
    const [progress,setProgress]=useState(20);

    useEffect(()=>{
        setProgress(findIdByPath(path)*(20));
    },[progress,path])

    return(
        <div className={style.progressContainer}>
          {
            (typeof window!=="undefined")?
              (window.innerWidth>768)?
              <motion.div className={style.progressBar} 
                    initial={true} 
                    animate={{ height: `${progress}%`}}
                    transition={{ duration: 0.5, type:"spring"}}>
                    </motion.div>:
              <motion.div className={style.progressBar} 
                    initial={true} 
                    animate={{ width: `${progress}%`}}
                    transition={{ duration: 0.5, type:"spring"}}>
                    </motion.div>
              :
              <motion.div className={style.progressBar} 
                    initial={true} 
                    animate={{ width: `${progress}%`}}
                    transition={{ duration: 0.5, type:"spring"}}>
                    </motion.div>

          }
        </div>
    );
}