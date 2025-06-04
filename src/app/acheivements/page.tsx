"use client";

import {motion} from "framer-motion";
import {silkscreen} from "../fonts";
import Image from "next/image";
import {useState,useEffect} from 'react';


async function fetchAcheivements(){
    try{
        const response=await fetch("/api/acheivements");
        const jsonData=await response.json();
        return jsonData;
    }catch{
        return [];
    }
}

interface Acheivements{
    img:string,
    title:string
}

let data;


function Acheivements(){

    const [ac,setAc]=useState<{gallery:Acheivements[],cert:Acheivements[]}|null>(null);
    useEffect(()=>{
        const getAc=async () =>{
            data=await fetchAcheivements();

            setAc(data); 
            console.log(data);
            console.log(ac);
        }
        getAc();
    },[]);

    return(
        <div className="flex flex-col justify-center w-full h-full my-28" >
            <ol className="flex flex-col w-auto mx-6 md:mx-12 lg:mx-24 rounded-xl p-12  border-3 border-[var(--bg3)]" style={{backgroundImage:"linear-gradient(120deg,var(--bg2) 10%,var(--bg) 100%)"}}>

                <li className="mb-4">
                    <motion.div style={{overflow:"hidden"}} initial={{opacity:0,width:0}} animate={{opacity:1,width:"auto"}} transition={{duration:1, type:"tween", delay:0}} className="flex flex-row"> 
                        <motion.div initial={{width:0,opacity:0}} animate={{opacity:1,width:"auto"}} transition={{duration:0.5,type:"spring",delay:1}}>
                            <span className="text-4xl mr-4 text-start text-[var(--primary)]">&gt;</span>
                        </motion.div>
                        <h1 className="text-start text-2xl md:text-4xl lg:text-nowrap">
                            Selected to visit ISRO Headquarters, Bengaluru(2025).
                        </h1>
                    </motion.div>
                </li>
                <li className="mb-4">
                    <motion.div style={{overflow:"hidden"}} initial={{opacity:0,width:0}} animate={{opacity:1,width:"auto"}} transition={{duration:1, type:"tween", delay:1}} className="flex flex-row"> 
                        <motion.div initial={{width:0,opacity:0}} animate={{opacity:1,width:"auto"}} transition={{duration:0.5,type:"spring",delay:2}}>
                            <span className="text-4xl mr-4 text-start text-[var(--primary)]">&gt;</span>
                        </motion.div>
                        <h1 className="text-start text-2xl md:text-4xl lg:text-nowrap">
                            Selected for SSHP 2025, Japan.
                        </h1>
                    </motion.div>
                </li>

                <li className="mb-4"> 
                    <motion.div style={{overflow:"hidden"}} initial={{opacity:0,width:0}} animate={{opacity:1,width:"auto"}} transition={{duration:1, type:"tween", delay:2}} className="flex flex-row"> 
                        <motion.div initial={{width:0,opacity:0}} animate={{opacity:1,width:"auto"}} transition={{duration:0.5,type:"spring",delay:3}}>
                            <span className="text-4xl mr-4 text-start text-[var(--primary)]">&gt;</span>
                        </motion.div>
                        <h1 className="text-start text-2xl md:text-4xl lg:text-nowrap">
                            Hackathon Winner at 16.
                        </h1>
                    </motion.div>
                </li>
                <li className="mb-4">
                    <motion.div style={{overflow:"hidden"}} initial={{opacity:0,width:0}} animate={{opacity:1,width:"auto"}} transition={{duration:1, type:"tween", delay:3}} className="flex flex-row"> 
                        <motion.div initial={{width:0,opacity:0}} animate={{opacity:1,width:"auto"}} transition={{duration:0.5,type:"spring",delay:4}}>

                            <span className="text-4xl mr-4 text-start text-[var(--primary)]">&gt;</span>
                        </motion.div>
                        <h1 className="text-start text-2xl md:text-4xl lg:text-nowrap">
                            National-Level Science Exhibition Qualifier (2022)
                        </h1>
                    </motion.div>
                </li>
                <li className="mb-4">
                    <motion.div style={{overflow:"hidden"}} initial={{opacity:0,width:0}} animate={{opacity:1,width:"auto"}} transition={{duration:1, type:"tween", delay:4}} className="flex flex-row"> 
                        <motion.div initial={{width:0,opacity:0}} animate={{opacity:1,width:"auto"}} transition={{duration:0.5,type:"spring",delay:5}}>
                            <span className="text-4xl mr-4 text-start text-[var(--primary)]">&gt;</span>
                        </motion.div>

                        <h1 className="text-start text-2xl md:text-4xl lg:text-nowrap">
                            Three-Time State-Level Science Exhibition Finalist
                        </h1>
                    </motion.div>
                </li>


                <li className="mb-4">
                    <motion.div style={{overflow:"hidden"}} initial={{opacity:0,width:0}} animate={{opacity:1,width:"auto"}} transition={{duration:1, type:"tween", delay:5}} className="flex flex-row"> 
                        <h1 className="mt-4 text-start text-2xl md:text-4xl text-[var(--fg2)] lg:text-nowrap">
                            And... A lot more yet to accomplish!
                        </h1>
                    </motion.div>
                </li>

            </ol> 



            <div className="flex flex-col w-auto mx-6 md:mx-12 lg:mx-24 mt-8 rounded-xl p-6 lg:p-12 border-3 border-[var(--bg3)]" style={{backgroundImage:"linear-gradient(120deg,var(--bg2) 10%,var(--bg) 100%)"}}>
                <h1 className={`text-center w-full text-3xl md:text-5xl mb-12 ${silkscreen.className}`}>Gallery</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative w-full h-full">
                    {
                        ac?(
                            ac?.gallery.map((l:Acheivements,i:number)=>(
                                <motion.div key={i} className="rounded-xl relative w-full overflow-hidden h-[40vh] border-3 border-[var(--bg3)]" whileHover={{scale:1.1,borderColor:"var(--primary)"}} >
                                    <Image alt="A nice memory" src={"/gallery/"+l.img}  layout="fill" objectFit="cover"/>
                                </motion.div>
                            ))
                        ):

                        <motion.div className="col-span-3 flex items-center justify-center rounded-xl h-[18vh] p-24 w-full border-3 border-[var(--bg3)]"
                        style={{backgroundColor:"rgba(255,255,255,0.05)"}} initial={{opacity:1}} animate={{opacity:[0,1,0]}} transition={{duration:1,repeat:Infinity,repeatType:"loop"}}>
                            <p className="text-center text-[var(--fg2)]"><i>Items Loading...</i></p>
                        </motion.div>
                    }


                </div>

            </div>



            <div className="flex flex-col w-auto mx-6 md:mx-12 lg:mx-24 mt-8 rounded-xl p-6 lg:p-12  border-3 border-[var(--bg3)]" style={{backgroundImage:"linear-gradient(120deg,var(--bg2) 10%,var(--bg) 100%)"}}>
                <h1 className={`text-center w-full text-3xl lg:text-5xl mb-12 ${silkscreen.className}`}>Certifications</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative w-full h-full">
                    {
                        ac?(
                            ac?.cert.map((l:Acheivements,i:number)=>(
                                <motion.div key={i} className="rounded-xl relative w-full overflow-hidden h-[40vh] border-3 border-[var(--bg3)]" whileHover={{scale:1.1,borderColor:"var(--primary)"}} >
                                    <Image alt="Something to be proud of:)" src={"/cert/"+l.img}  layout="fill" objectFit="cover"/>
                                </motion.div>
                            ))
                        ):

                        <motion.div className="col-span-3 flex items-center justify-center rounded-xl h-[18vh] p-24 w-full border-3 border-[var(--bg3)]"
                        style={{backgroundColor:"rgba(255,255,255,0.05)"}} initial={{opacity:1}} animate={{opacity:[0,1,0]}} transition={{duration:1,repeat:Infinity,repeatType:"loop"}}>
                            <p className="text-center text-[var(--fg2)]"><i>Items Loading...</i></p>
                        </motion.div>
                    }


                </div>

            </div>
            
        </div>
    );
}
export default Acheivements;