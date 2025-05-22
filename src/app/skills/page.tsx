"use client"
import ProgressBar from "../../components/progressBar";
import Image from "next/image";
import {useState, useEffect} from "react";
import {motion} from "framer-motion";

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
    progress:number;
    currLearn:boolean;
}

let data;
function Skills(){
    const [skillsData,setSkills]=useState<{langs:SkillType[],fields:SkillType[],frameworks:SkillType[]}|null>(null);
    useEffect(()=>{
        const getSkills=async () =>{
            data=await fetchSkills();

            setSkills(data); 
            console.log(data);
            console.log(skillsData);
        }
        getSkills();
    },[]);

    return(
        <div className="flex items-center justify-center w-full h-full mt-28">
            <div className="w-[90%] h-full flex-col grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col items-center rounded-xl p-12 justify-center bg-[var(--bg3)]">
                    <h1 className="text-center text-2xl mb-4">Programming Languages</h1>
                    <ul className="p-4">
                        {
                            skillsData && (
                                skillsData?.langs.map((l:SkillType)=>(
                                    <li key={l.id} className="flex flex-col items-center justify-center">
                                        <div className="flex flex-row items-center justify-center">
                                            <Image src={l.img} alt={l.title} height={30} width={30}/>
                                            <p className="flex items-center justify-center m-4  text-center text-[var(--fg2)] text-lg">{l.title}
                                            </p>
                                            {l.currLearn && (
                                                <motion.div
                                                animate={{opacity:[0,1,0]}}
                                                transition={{repeat:Infinity,repeatType:"loop",type:"tween",duration:2,ease:"easeInOut"}}>
                                                    <span className="mx-4 text-center text-[var(--secondary)] text-md">[In Progress]</span>
                                                </motion.div>
                                            )}
                                        </div>
                                        <ProgressBar full={(window.innerWidth>768)?"35vw":"80vw"} percent={l.progress} secondary={l.currLearn}/>
                                    </li>
                                ))
                        )}

                    </ul>
                </div>
                <div className="flex flex-col items-center rounded-xl p-12 justify-center bg-[var(--bg3)]">
                    <h1 className="text-center text-2xl mb-4">Fields of interest</h1>
                    <ul>
                        {
                            skillsData && (
                                skillsData?.fields.map((f:SkillType)=>(
                                    <li key={f.id} className="flex flex-col items-center justify-center">
                                        <div className="flex flex-row items-center justify-center">
                                            <Image src={f.img} alt={f.title} height={40} width={40}/>
                                            <p className="m-4 text-center text-[var(--fg2)] text-lg">{f.title}</p>

                                            {f.currLearn && (
                                                <motion.div
                                                animate={{opacity:[0,1,0]}}
                                                transition={{repeat:Infinity,repeatType:"loop",type:"tween",duration:2,ease:"easeInOut"}}>
                                                    <span className="m-4 text-center text-[var(--secondary)] text-md">[In Progress]</span>
                                                </motion.div>
                                            )}
                                        </div>

                                        <ProgressBar full={(window.innerWidth>768)?"35vw":"80vw"} percent={f.progress} secondary={f.currLearn}/>
                                    </li>
                                )))
                            }
                    </ul>
                </div>
                <div className="col-span-1 md:col-span-2 flex flex-col items-center rounded-xl p-12 justify-center bg-[var(--bg3)]">
                    <h1 className="text-center text-2xl mb-4">Rest of my Tech Stack</h1>
                    <ul className="w-full grid grid-cols-1 md:grid-cols-5">
                        {
                            skillsData && (
                                skillsData?.frameworks.map((f:SkillType)=>(
                                    <li key={f.id} className="flex flex-col items-center justify-center">
                                        <div className="flex flex-row items-center justify-center">
                                            <Image src={f.img} alt={f.title} height={30} width={30}/>
                                            <p className="m-4 text-center text-[var(--fg2)] text-lg">{f.title}</p>

                                            {f.currLearn && (
                                                <motion.div
                                                animate={{opacity:[0,1,0]}}
                                                transition={{repeat:Infinity,repeatType:"loop",type:"tween",duration:2,ease:"easeInOut"}}>
                                                    <span className="m-4 text-center text-[var(--secondary)] text-md">[In Progress]</span>
                                                </motion.div>
                                            )}
                                        </div>

                                        <ProgressBar full={(window.innerWidth>768)?"10vw":"80vw"} percent={f.progress} secondary={f.currLearn}/>
                                    </li>
                                )))
                            }
                    </ul>
                </div>

            </div>
        </div>
    );
}
export default Skills;