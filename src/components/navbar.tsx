"use client"

import Link from "next/link";
import Switch from "./Switch";
import {motion} from 'framer-motion';
import {usePathname} from 'next/navigation';
import compoStyle from '@/styles/components.module.css';
import { useMusicContext } from "@/contexts/musicContext";
import {useRef,useEffect} from "react";

const navItems = [
  { name: 'Home', path: '/' ,id:1},
  { name: 'About', path: '/about',id:2 },
  { name: 'Skills', path: '/skills',id:3 },
  { name: 'Projects', path: '/projects',id:4 },
  { name: 'Acheivements', path: '/acheivements',id:5 },
];

const handleDarkMode=()=>{
  console.log("Yo! the user wants dark mode");
}
const handleLightMode=()=>{
  console.log("shifting to light mode...");
}


function NavBar(){
  const audioRef=useRef<HTMLAudioElement|null>(null);

// music Context stuff
    const { musicState, updateState} = useMusicContext();

  useEffect(()=>{
    if(typeof window !== 'undefined' && !audioRef.current){
      audioRef.current=new Audio("/music/lofi1.mp3");
      audioRef.current.loop=true;
    }
    return ()=>{
      if(audioRef.current)
        audioRef.current.pause();
        audioRef.current=null;
    }
  },[]);

  useEffect(()=>{
    if(musicState=="play" && audioRef.current){
      audioRef.current.play();
    }else if(audioRef.current){
      audioRef.current.pause();
    }
  },[musicState])

// Functions 
    const playMusic=()=>{
      updateState("play")
      console.log("the current music state: ", musicState);
    }

    const stopMusic=()=>{
      updateState("stop")
      console.log("the current music state: ", musicState);
    }


    const pathName=usePathname();

    return(
        <header className="nav">
        <ol className="flex flex-row items-center justify-center py-6">
          {navItems.map((item)=>(
          <li className="mx-4 text-center text-xl linkCursor" key={item.id}>
            <Link href={item.path}>
            {pathName!== item.path && (
              <span className={`${compoStyle.tabNames} linkCursor no-select`}>{item.name}</span>
            )}
            {pathName === item.path && (
                <motion.div
                  layoutId="activeIndicator" 
                  className={`${compoStyle.selectedBox} linkCursor`}
                  initial={false} 
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, type:"spring"}}
                  whileHover={{
                    scale:1.1,
                    backgroundColor:"var(--primary-light)",
                    boxShadow:"0 15px 30px 10px var(--primary-shadow)"
                  }}
                  exit={{ opacity: 0 }}
                >
                  <p style={{color:"var(--bg)"}} className={`${compoStyle.tabNames} linkCursor no-select`}>{item.name}</p>
                  </motion.div>
              )}
            </Link></li>
          ))}
        <Switch
        svg={
            <svg width="2rem" className="border-0 mr-2" height="2rem" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#6c7086" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0 0h48v48H0z" fill="none"></path> <g id="Shopicon"> <path d="M24,44c8.002,0.093,15.587-5.043,18.532-12.469l-2.605-2.605C26.94,34.271,13.732,21.053,19.073,8.073l-2.604-2.605 C-3.688,14,2.123,43.714,24,44z"></path> </g> </g></svg>
        } 
        className={compoStyle.darkModeContainer}
        func={handleDarkMode}
        funcOff={handleLightMode}
        />

        <Switch
        svg={
          <svg width="2rem" className="border-0 mr-2" height="2rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.5 8.89001V18.5M12.5 8.89001V5.57656C12.5 5.36922 12.5 5.26554 12.5347 5.17733C12.5653 5.09943 12.615 5.03047 12.6792 4.97678C12.752 4.91597 12.8503 4.88318 13.047 4.81761L17.447 3.35095C17.8025 3.23245 17.9803 3.17319 18.1218 3.20872C18.2456 3.23982 18.3529 3.31713 18.4216 3.42479C18.5 3.54779 18.5 3.73516 18.5 4.10989V7.42335C18.5 7.63069 18.5 7.73436 18.4653 7.82258C18.4347 7.90048 18.385 7.96943 18.3208 8.02313C18.248 8.08394 18.1497 8.11672 17.953 8.18229L13.553 9.64896C13.1975 9.76746 13.0197 9.82671 12.8782 9.79119C12.7544 9.76009 12.6471 9.68278 12.5784 9.57512C12.5 9.45212 12.5 9.26475 12.5 8.89001ZM12.5 18.5C12.5 19.8807 10.933 21 9 21C7.067 21 5.5 19.8807 5.5 18.5C5.5 17.1192 7.067 16 9 16C10.933 16 12.5 17.1192 12.5 18.5Z" stroke="#6c7086" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
        } 
        className={compoStyle.musicSwitchContainer}
        func={playMusic}
        funcOff={stopMusic}
        />
        </ol>
    </header>
    );
}
export default NavBar;