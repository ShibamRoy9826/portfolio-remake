"use client"
import {motion,AnimatePresence} from "framer-motion";
import Image from "next/image";
import {useState} from "react";
import SimpleButton from "@/components/SimpleButton";
import compoStyle from "@/styles/components.module.css";

interface Props{
    projectName:string;
    projectDesc:string;
    projectImgSrc:string;
    projectDemo:string;
    projectRepo:string
}

const ProjectCard:React.FC<Props>=({projectName,projectDesc,projectImgSrc,projectDemo,projectRepo})=>{
    const [isHovered,setHover]=useState(false);
    const handleMouseHover=()=> setHover(true);
    const handleMouseLeave=()=> setHover(false);

    return(
        <motion.div className="flex flex-col rounded-xl w-[100%] h-[20rem] shadowBox border-3 border-[var(--bg3)]" whileHover={{scale:1.1,zIndex:100}} exit={{scaleX:1,scaleY:1}} onMouseEnter={handleMouseHover} onTap={handleMouseHover} onMouseLeave={handleMouseLeave} onTapCancel={handleMouseLeave} 
        style={{
            // backgroundImage:"linear-gradient(120deg,var(--bg2) 10%,var(--bg) 100%)"
            backgroundColor:"var(--bg2)"
        }}
        
        >

            <div className="relative w-full h-[65%]" style={{
                borderBottom:"2px solid var(--fg3)"
            }}>
            <Image src={projectImgSrc} className="rounded-xl" alt="projectImage" layout="fill" objectFit="cover"/>
            </div>
            <motion.div className="flex flex-col p-6" 
            layout
            animate={{height:(isHovered)? "55%":"35%"}} 
            transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <h1 className="text-2xl text-start">{projectName}</h1>
                <p className="text-[var(--fg2)] text-start">{projectDesc}</p>
                <AnimatePresence>
         {isHovered && (
            <motion.div 
            key="box"
            initial={{height:0,opacity:0}}
            animate={{height:"100%",opacity:1}}
            exit={{ opacity: 0, height:0}}
            transition={{duration:0.4,type:"spring"}}
            className="flex flex-row items-center justify-center">
                    <SimpleButton
                    text="Repo"
                    className={compoStyle.button}
                    url={projectRepo}
                    sameTab={false}
                    svg={
                        <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="var(--bg)" height={30} width={30}><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="var(--bg)"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> </g> </g> </g> </g></svg>
                    }
                    />

                    <SimpleButton
                    text="Demo"
                    className={compoStyle.button}
                    url={projectDemo}
                    sameTab={false}
                    svg={
                        <svg viewBox="0 0 24 24" height={30} width={30} fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.6582 9.28638C18.098 10.1862 18.8178 10.6361 19.0647 11.2122C19.2803 11.7152 19.2803 12.2847 19.0647 12.7878C18.8178 13.3638 18.098 13.8137 16.6582 14.7136L9.896 18.94C8.29805 19.9387 7.49907 20.4381 6.83973 20.385C6.26501 20.3388 5.73818 20.0469 5.3944 19.584C5 19.053 5 18.1108 5 16.2264V7.77357C5 5.88919 5 4.94701 5.3944 4.41598C5.73818 3.9531 6.26501 3.66111 6.83973 3.6149C7.49907 3.5619 8.29805 4.06126 9.896 5.05998L16.6582 9.28638Z" stroke="var(--bg)" strokeWidth="2" strokeLinejoin="round"></path> </g></svg>
                    }
                    />
             </motion.div>
         )}
            
                 </AnimatePresence> 
            </motion.div>
        </motion.div>
    );
}

export default ProjectCard;