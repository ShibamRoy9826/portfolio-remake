"use client"

import Link from "next/link";
import Switch from "./Switch";
import {AnimatePresence, motion,animate} from 'framer-motion';
import {usePathname} from 'next/navigation';
import compoStyle from '@/styles/components.module.css';
import { useMusicContext } from "@/contexts/musicContext";
import {useState,useRef,useEffect} from "react";

const navItems = [
  { name: 'Home', path: '/' ,id:1},
  { name: 'About', path: '/about',id:2 },
  { name: 'Skills', path: '/skills',id:3 },
  { name: 'Projects', path: '/projects',id:4 },
  { name: 'Acheivements', path: '/acheivements',id:5 },
];


const musicList=["/music/lofi1.mp3","/music/lofi2.mp3","/music/lofi3.mp3"];


function NavBar(){
  // Music Stuff
  const audioRef=useRef<HTMLAudioElement|null>(null);
  const { musicData, updateState} = useMusicContext();

  // hamburger menu states
  const [menuEnabled, menuToggle]=useState(false);

  const handleMenuToggle=()=>{
    menuToggle(!menuEnabled);
  }
  
  // Randomly setting source of music to audio element
  useEffect(()=>{
    if(typeof window !== 'undefined' && !audioRef.current){

      const randomIndex = Math.floor(Math.random() * musicList.length);
      audioRef.current=new Audio(musicList[randomIndex]);
      audioRef.current.loop=true;
    }
    return ()=>{
      if(audioRef.current)
        audioRef.current.pause();
        audioRef.current=null;
    }
  },[]);

  // Playing and pausing based on state variable
  useEffect(()=>{
    if(musicData.musicState=="play" && audioRef.current){
      audioRef.current.play();
    }else if(audioRef.current){
      audioRef.current.pause();
    }
  },[musicData.musicState])

  // Music functions 
  const playMusic=()=>{
    updateState({audio:audioRef.current,musicState:"play"})
    console.log("the current music state: ", musicData.musicState);
  }

  const stopMusic=()=>{
    updateState({audio:audioRef.current,musicState:"stop"})
    console.log("the current music state: ", musicData.musicState);
  }

  // getting route to show active tab
  const pathName=usePathname();

  return(
      <header className={`fixed top-0 left-0 w-[100vw] h-auto max-h-[12vh] py-2 ${compoStyle.nav}`}>

      <button className="ml-4 outline-none lg:hidden relative top-4 flex flex-col items-center justify-center max-w-[8rem] z-[9999] linkCursor" onClick={handleMenuToggle}>
        <motion.div
        className="m-2 bg-[var(--fg)] w-16 h-[6px] rounded-xl"
        initial={{opacity:0}}
        animate={{opacity:1,
          rotate:menuEnabled?45:0,
          y:menuEnabled?11:0
        }}
        exit={{opacity:0}}
        transition={{duration:0.5,type:"spring"}}/>

        <motion.div
        className="m-2 bg-[var(--fg)] w-16 h-[6px] rounded-xl"
        initial={{opacity:0}}
        animate={{opacity:1,
          rotate:menuEnabled?-45:0,
          y:menuEnabled?-11:0
        }}
        exit={{opacity:0}}
        transition={{duration:0.5,type:"spring"}}/>
      </button>

      {/* Menu overlay */}

      <AnimatePresence>
        {
          menuEnabled?

      <motion.div
      className="w-full z-[1000] fixed top-0 left-0"
      style={{
        // backgroundImage:"linear-gradient(rgba(0,0,0,0.7) ,rgba(0,0,0,0.9) )",
        // backgroundSize:"cover",
        backgroundColor:"rgba(0,0,0,0.5)",
        backdropFilter:"blur(10px)",
        position:"fixed",
        top:0,
        left:0,
        width:"100vw",
        height:"100vh"
      }}
      initial={{opacity:0,filter:"blur(10px)"}}
      animate={{opacity:[0,1],filter:"blur(0px)"}}
      exit={{opacity:0,width:0,height:0}}
      transition={{duration:0.5}}
      >
      <ol className="md:hidden flex flex-col items-center justify-center z-[1000] w-full h-full ">

        {navItems.map((item)=>(
        <li className="my-4 text-center text-xl linkCursor" key={item.id} onClick={()=>{menuToggle(false)}}>
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

<div className="flex flex-row w-full items-center justify-center my-4">
      <Switch
      svg={
        <svg width="2rem" className="border-0 mr-2" height="2rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.5 8.89001V18.5M12.5 8.89001V5.57656C12.5 5.36922 12.5 5.26554 12.5347 5.17733C12.5653 5.09943 12.615 5.03047 12.6792 4.97678C12.752 4.91597 12.8503 4.88318 13.047 4.81761L17.447 3.35095C17.8025 3.23245 17.9803 3.17319 18.1218 3.20872C18.2456 3.23982 18.3529 3.31713 18.4216 3.42479C18.5 3.54779 18.5 3.73516 18.5 4.10989V7.42335C18.5 7.63069 18.5 7.73436 18.4653 7.82258C18.4347 7.90048 18.385 7.96943 18.3208 8.02313C18.248 8.08394 18.1497 8.11672 17.953 8.18229L13.553 9.64896C13.1975 9.76746 13.0197 9.82671 12.8782 9.79119C12.7544 9.76009 12.6471 9.68278 12.5784 9.57512C12.5 9.45212 12.5 9.26475 12.5 8.89001ZM12.5 18.5C12.5 19.8807 10.933 21 9 21C7.067 21 5.5 19.8807 5.5 18.5C5.5 17.1192 7.067 16 9 16C10.933 16 12.5 17.1192 12.5 18.5Z" stroke="#6c7086" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
      } 
      className={compoStyle.musicSwitchContainer}
      func={playMusic}
      funcOff={stopMusic}
      />
</div>
      </ol>

      </motion.div>
      :
      <motion.div></motion.div>

        }
    </AnimatePresence>

      <ol className="hidden md:flex flex flex-row items-center justify-center py-6 ">
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