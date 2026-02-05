"use client"
import ProgressBar from "../../components/progressBar";
import Image from "next/image";
import {useState, useEffect} from "react";
import {motion} from "framer-motion";
import { silkscreen } from "../fonts";

async function fetchSkills(){
    try{
        const response=await fetch("/api/skills");
        const jsonData=await response.json();
        return jsonData;
    }catch{
        return [];
    }
}

interface SkillType{
    id:string;
    img:string;
    title:string;
}

let data;
function Skills(){
    const [skillsData,setSkills]=useState<{stack:SkillType[]}|null>(null);
    useEffect(()=>{
        const getSkills=async () =>{
            data=await fetchSkills();

            setSkills(data); 
            console.log(data);
            console.log(skillsData);
        }
        getSkills();
    });

    return(
        <div className="flex items-center justify-center w-full h-full my-28">
            <div className="w-[90%] h-full flex">
                <div className="flex flex-col items-center rounded-xl p-12 justify-center border-3 border-[var(--bg3)]"
                style={{backgroundImage:"linear-gradient(120deg,var(--bg2) 10%,var(--bg) 100%)"}}>
                    <h1 className={`${silkscreen.className} text-center text-2xl mb-4`}>Current Skillset</h1>
                    <ul className="p-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
                        {
                            skillsData?(
                                skillsData?.stack.map((l:SkillType,i:number)=>(
                                    <li key={i} className="flex flex-col items-center justify-center">
                                        <div className="flex flex-row items-center justify-center">
                                            <Image src={l.img} alt={l.title} height={50} width={50}/>
                                            <p className="flex items-center justify-center m-4  text-center text-[var(--fg2)] text-lg">{l.title}
                                            </p>
                                        </div>
                                    </li>
                                ))
                        ):
                        <motion.div className="flex items-center justify-center rounded-xl h-[18vh] p-24 w-full"
                        style={{backgroundColor:"rgba(255,255,255,0.05)"}} initial={{opacity:1}} animate={{opacity:[0,1,0]}} transition={{duration:1,repeat:Infinity,repeatType:"loop"}}>
                            <p className="text-center text-[var(--fg2)]"><i>Items Loading...</i></p>
                        </motion.div>
                    
                    }

                    </ul>
                </div>

            </div>
        </div>
    );
}
export default Skills;
