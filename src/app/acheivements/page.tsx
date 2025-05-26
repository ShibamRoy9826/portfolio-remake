"use client";

import {motion} from "framer-motion";
import {silkscreen} from "../fonts";
import Image from "next/image";


function Acheivements(){
    return(
        <div className="flex flex-col justify-center w-full h-full my-28" >
            <ol className="flex flex-col w-auto mx-6 md:mx-12 lg:mx-24 rounded-xl p-12  border-3 border-[var(--bg3)]" style={{backgroundImage:"linear-gradient(120deg,var(--bg2) 10%,var(--bg) 100%)"}}>

                <li className="mb-4">
                    <motion.div style={{overflow:"hidden"}} initial={{opacity:0,width:0}} animate={{opacity:1,width:"auto"}} transition={{duration:1, type:"tween", delay:0}}> 
                        <h1 className="text-start text-2xl md:text-4xl lg:text-nowrap">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        </h1>
                    </motion.div>
                </li>
                <li className="mb-4">
                    <motion.div style={{overflow:"hidden"}} initial={{opacity:0,width:0}} animate={{opacity:1,width:"auto"}} transition={{duration:1, type:"tween", delay:1}}> 
                        <h1 className="text-start text-2xl md:text-4xl lg:text-nowrap">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        </h1>
                    </motion.div>
                </li>

                <li className="mb-4"> 
                    <motion.div style={{overflow:"hidden"}} initial={{opacity:0,width:0}} animate={{opacity:1,width:"auto"}} transition={{duration:1, type:"tween", delay:2}}> 
                        <h1 className="text-start text-2xl md:text-4xl lg:text-nowrap">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        </h1>
                    </motion.div>
                </li>
                <li className="mb-4">
                    <motion.div style={{overflow:"hidden"}} initial={{opacity:0,width:0}} animate={{opacity:1,width:"auto"}} transition={{duration:1, type:"tween", delay:3}}> 
                        <h1 className="text-start text-2xl md:text-4xl lg:text-nowrap">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        </h1>
                    </motion.div>
                </li>
            </ol> 



            <div className="flex flex-col w-auto mx-6 md:mx-12 lg:mx-24 mt-8 rounded-xl p-6 lg:p-12 border-3 border-[var(--bg3)]" style={{backgroundImage:"linear-gradient(120deg,var(--bg2) 10%,var(--bg) 100%)"}}>
                <h1 className={`text-center w-full text-3xl md:text-5xl mb-12 ${silkscreen.className}`}>Gallery</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative w-full h-full">

                    <motion.div className="rounded-xl relative w-full  h-[40vh]" whileHover={{scale:1.1}} >
                        <Image alt="somePic" src="/test.jpeg" className="rounded-xl" layout="fill" objectFit="cover"/>
                    </motion.div>
                    <motion.div className="rounded-xl relative w-full  h-[40vh]" whileHover={{scale:1.1}} >
                        <Image alt="somePic" src="/test.jpeg" className="rounded-xl" layout="fill" objectFit="cover"/>
                    </motion.div>
                    <motion.div className="rounded-xl relative w-full  h-[40vh]" whileHover={{scale:1.1}} >
                        <Image alt="somePic" src="/test.jpeg" className="rounded-xl" layout="fill" objectFit="cover"/>
                    </motion.div>
                    <motion.div className="rounded-xl relative w-full  h-[40vh]" whileHover={{scale:1.1}} >
                        <Image alt="somePic" src="/test.jpeg" className="rounded-xl" layout="fill" objectFit="cover"/>
                    </motion.div>
                    <motion.div className="rounded-xl relative w-full  h-[40vh]" whileHover={{scale:1.1}} >
                        <Image alt="somePic" src="/test.jpeg" className="rounded-xl" layout="fill" objectFit="cover"/>
                    </motion.div>
                    <motion.div className="rounded-xl relative w-full  h-[40vh]" whileHover={{scale:1.1}} >
                        <Image alt="somePic" src="/test.jpeg" className="rounded-xl" layout="fill" objectFit="cover"/>
                    </motion.div>
                    <motion.div className="rounded-xl relative w-full  h-[40vh]" whileHover={{scale:1.1}} >
                        <Image alt="somePic" src="/test.jpeg" className="rounded-xl" layout="fill" objectFit="cover"/>
                    </motion.div>
                    <motion.div className="rounded-xl relative w-full  h-[40vh]" whileHover={{scale:1.1}} >
                        <Image alt="somePic" src="/test.jpeg" className="rounded-xl" layout="fill" objectFit="cover"/>
                    </motion.div>

                </div>

            </div>



            <div className="flex flex-col w-auto mx-6 md:mx-12 lg:mx-24 mt-8 rounded-xl p-6 lg:p-12  border-3 border-[var(--bg3)]" style={{backgroundImage:"linear-gradient(120deg,var(--bg2) 10%,var(--bg) 100%)"}}>
                <h1 className={`text-center w-full text-3xl lg:text-5xl mb-12 ${silkscreen.className}`}>Certifications</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative w-full h-full">
                    <motion.div className="rounded-xl relative w-full  h-[40vh]" whileHover={{scale:1.1}} >
                        <Image alt="somePic" src="/test.jpeg" className="rounded-xl" layout="fill" objectFit="cover"/>
                    </motion.div>
                    <motion.div className="rounded-xl relative w-full  h-[40vh]" whileHover={{scale:1.1}} >
                        <Image alt="somePic" src="/test.jpeg" className="rounded-xl" layout="fill" objectFit="cover"/>
                    </motion.div>
                    <motion.div className="rounded-xl relative w-full  h-[40vh]" whileHover={{scale:1.1}} >
                        <Image alt="somePic" src="/test.jpeg" className="rounded-xl" layout="fill" objectFit="cover"/>
                    </motion.div>
                    <motion.div className="rounded-xl relative w-full  h-[40vh]" whileHover={{scale:1.1}} >
                        <Image alt="somePic" src="/test.jpeg" className="rounded-xl" layout="fill" objectFit="cover"/>
                    </motion.div>
                    <motion.div className="rounded-xl relative w-full  h-[40vh]" whileHover={{scale:1.1}} >
                        <Image alt="somePic" src="/test.jpeg" className="rounded-xl" layout="fill" objectFit="cover"/>
                    </motion.div>
                    <motion.div className="rounded-xl relative w-full  h-[40vh]" whileHover={{scale:1.1}} >
                        <Image alt="somePic" src="/test.jpeg" className="rounded-xl" layout="fill" objectFit="cover"/>
                    </motion.div>
                    <motion.div className="rounded-xl relative w-full  h-[40vh]" whileHover={{scale:1.1}} >
                        <Image alt="somePic" src="/test.jpeg" className="rounded-xl" layout="fill" objectFit="cover"/>
                    </motion.div>

                </div>

            </div>
            
        </div>
    );
}
export default Acheivements;