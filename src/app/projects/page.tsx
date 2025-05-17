"use client"
// import Component3D from "../components/3DComponent";
import ProjectCard from "@/components/projectCard";
import {useState, useEffect} from "react";

async function fetchProjects(){
    try{
        const response=await fetch("http://localhost:3000/api/projects");
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
    },[]);
        
       
    return(
        <div className="w-full h-full flex flex-row items-center justify-center">
            <div className="w-[80vw] grid grid-cols-3 gap-8 pb-24">
                {
                    projectData && (
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
                    )
                }

            </div>
        </div>
    );
}

export default Projects;