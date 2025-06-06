"use client"
// import Component3D from "../components/3DComponent";
import ProjectCard from "@/components/projectCard";
import {useState, useEffect} from "react";
import {motion} from "framer-motion";

async function fetchProjects(){
    try{
        const response=await fetch("/api/projects");
        const jsonData=await response.json();
        return jsonData;
    }catch{
        return [];
    }
}

interface ProjectType{
    id:number;
    name:string;
    demo:string;
    repo:string;
    imgSrc:string;
    desc:string;
}

let data;
function Projects(){
    const [projectData,setProjectData]=useState<Array<ProjectType>|null>(null);
    useEffect(()=>{
        const getProjects=async () =>{
            data=await fetchProjects();
            setProjectData(data); 
            console.log(data);
            console.log(projectData);
        }
        getProjects();
    });
        
       
    return(
        <div className="my-28 w-full h-full flex flex-row items-center justify-center">
            <div className="w-[80vw] grid grid-cols-1 lg:grid-cols-3 gap-8 pb-24">
                {
                    projectData ?(
                        projectData.map((p:ProjectType)=>(
                            <ProjectCard
                                key={p.id}
                                projectName={p.name}
                                projectDesc={p.desc}
                                projectImgSrc={p.imgSrc}
                                projectDemo={p.demo}
                                projectRepo={p.repo}
                            />
                        ))
                    ):

                        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-[80vh] md:h-[70vh] w-full md:col-span-5"
                         initial={{opacity:1}} animate={{opacity:[0,1,0]}} transition={{duration:1,repeat:Infinity,repeatType:"loop"}}>
                            {[...Array(10)].map((_,i)=>(
                                <div key={i} style={{backgroundColor:"var(--bg2)"}} className="rounded-xl p-24">
                                    <p className="text-center text-[var(--fg2)]"><i>Loading...</i></p>
                                </div>
                            ))}
                        </motion.div>

                }

            </div>
        </div>
    );
}

export default Projects;