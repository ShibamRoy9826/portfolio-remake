"use client"
import Image from "next/image";
import Component3D from "../../components/3DComponent";
import MovingButton from "../../components/movingButton";
import RotatingBorder from "../../components/RotatingBorder";
import style from "@/styles/about.module.css";
import { motion } from "framer-motion";


const currYear = new Date().getFullYear();

const intro=`Hi! I am $Shibam $Roy, an ${currYear - 2007} year old programmer, with a keen interest in $Data $Science. I enjoy $web $development, and tinkering with $electronics too! # Apart from programming, I live a normal life, having fun with family, studying, listening to music and occasionally watching Anime. # If you ever meet me in person, you'd probably realize I am the most introverted person you've met, I find it hard to communicate with people in real life 😅 # Still, I love to $contribute $to $open $source , and $make $my $own $open $source $projects! I am just at the beginnning of my programming journey, and have a long way to go, Wish me luck! # Thanks for being interested and reading this, Not many people do, and I really appreciate it. 💖`;

const words=intro.split(" ");

function About() {



  return (
    <section className="flex flex-col md:flex-row items-center md:items-start lg:items-start justify-center mt-28 lg:mt-42">
      <div className="w-auto h-auto flex flex-col items-center justify-center md:mr-24">
         {
           (typeof window!=="undefined")? 
             <Component3D
               width={window.innerWidth>768?"20rem":"16rem"}
               height={window.innerWidth>768?"26rem":"20rem"}
               innerStuff={
                 <Image src="/pfp.webp" alt="My pfp" style={{ borderRadius: "1rem", objectFit:"cover" }} fill unoptimized/>
               }
               className={`shadowBox ${style.pfp}`}
            
               angle={10}
             />:
             <Component3D
               width="20rem"
               height="26rem"
               innerStuff={
                 <Image src="/pfp.webp" alt="My pfp" style={{ borderRadius: "1rem", objectFit:"cover"}} fill unoptimized/>

               }
               className={`shadowBox ${style.pfp}`}
             
               angle={10}/>
         }

        <MovingButton
           svg={
             <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="var(--bg)" height={30} width={30}><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="var(--bg)"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> </g> </g> </g> </g></svg>
           }
           className={style.github}
           innerText="Github"
           sameTab={false}
           url="https://github.com/ShibamRoy9826"
         />

      </div>

             <RotatingBorder
               innerStuff={
                <div className="text-[1.4rem] p-8 text-[var(--fg2)]  textSmallCursor p-4 text-center md:text-start">
                  {
                    words.map((word:string,i:number)=>(
                        (word!="#")?
                          (!word.startsWith("$"))?
                            <motion.span
                              key={i}
                              className="mr-2 inline-block"
                              initial={{x:Math.random()*300,y:Math.random()*300, rotate:Math.random()*60,opacity:0}}
                              animate={{x:0,y:0,rotate:0,opacity:1}}
                              transition={{
                                type:"spring",
                                stiffnesss:500,
                                damping:30,
                                delay:Math.random()*0.9
                              }}
                              >
                                {word}
                            </motion.span>
                          :
                            <motion.span
                              key={i}
                              className="mr-2 inline-block text-[var(--fg)]"
                              initial={{x:Math.random()*300,y:Math.random()*300, rotate:Math.random()*60,opacity:0}}
                              animate={{x:0,y:0,rotate:0,opacity:1}}
                              transition={{
                                type:"spring",
                                stiffnesss:500,
                                damping:30,
                                delay:Math.random()*0.9
                              }}
                              >
                                <b>{word.slice(1)}</b>
                            </motion.span>
                      :
                      <br key={i}/>
                    ))
                  }
                </div>
               }
               duration={3}
               className={style.rotatingBorder}
               />



    </section>
  );
}
export default About;
