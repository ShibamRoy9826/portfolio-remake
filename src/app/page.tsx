"use client"
// import Image from "next/image";
import MovingButton from "../components/movingButton";
import style from "@/styles/components.module.css";
import {motion,AnimatePresence} from "framer-motion";
import { useState } from "react";
import { silkscreen } from "./fonts";

export default function Home() {

  const [hoverState,setHover]=useState(false);
  function scrollDown(){
    window.scrollBy({ top:  window.innerHeight, behavior: 'smooth' });
  }

  return (
    <>
    
    <section className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
      <div className="flex flex-col px-8 items-center justify-center w-full h-auto mt-24 lg:relative lg:bottom-16"
          onMouseEnter={()=>setHover(true)}
          onMouseLeave={()=>setHover(false)}
      
      >
        <p className="text-5xl text-center md:text-5xl lg:text-8xl textCursor">
          <motion.span
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:1}}
          className="textCursor"
          >
          Hey There,
          </motion.span>
          <motion.span
          className="textCursor"
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:1,delay:0.3}}
          > 
 I am  
          <b className={`textCursor ${silkscreen.className}`}> Shibam</b>
          </motion.span>
          </p>

          <motion.div
          className="text-2xl lg:text-5xl text-center mt-8 textCursor text-[var(--fg2)]"
          initial={{y:-50,opacity:0}}
          animate={{opacity:1,y:0}}
          transition={{duration:1,delay:0.3,type:"spring"}}
          >
            <AnimatePresence mode="wait">
            {
              (!hoverState)?
              <motion.span
              initial={{opacity:0,y:50}}
              animate={{opacity:1,y:0}}
              key="modal"
              className="textCursor"
              exit={{opacity:0,y:-50}}
              >I pour my heart into everything I build 💝</motion.span>:
              <motion.span
              key="modal2"
              className="textCursor"
              initial={{opacity:0,y:50}}
              animate={{opacity:1,y:0}}
              exit={{opacity:0,y:-50}}
              >Definitely didn&apos;t google how to make this:)</motion.span>
            }
            </AnimatePresence>
            
            </motion.div>
      </div>

      <motion.div
      className="my-16 lg:my-0 flex flex-col textCursor lg:flex-row items-center justify-center z-[0]"
      initial={{opacity:0,y:50}}
      animate={{opacity:1,y:0}}
      transition={{duration:1,delay:0.6}}
      >

      <MovingButton
      svg={
        <svg fill="var(--bg)" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg" height={30} width={30}><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M168,30.99268A8.00009,8.00009,0,0,1,176,23h.00781A60.21143,60.21143,0,0,1,227.9541,53.00439a8.00044,8.00044,0,1,1-13.85742,8A44.16357,44.16357,0,0,0,175.99219,39,8,8,0,0,1,168,30.99268Zm60.99512,139.772A88.01088,88.01088,0,0,1,67.7832,191.98828l-42-72.74609A27.991,27.991,0,0,1,47.77832,77.33807L44.4248,71.5293A28.00473,28.00473,0,0,1,87.44922,36.74976a27.99212,27.99212,0,0,1,48.11328.63549l17.34326,30.04a28.01379,28.01379,0,0,1,47.29834,1.92243l19.999,34.64062A87.41865,87.41865,0,0,1,228.99512,170.76465Zm-22.64746-58.77637-20-34.64062A12.00012,12.00012,0,1,0,165.5625,89.34717l10,17.3208a7.98085,7.98085,0,0,1,.36475.7121c.08007.17706.1455.35723.21191.53735.02393.0647.05322.12756.0752.19281.0747.22082.13574.44385.19043.66772.00634.02771.01611.05469.02294.08252.05323.23029.09327.4618.126.69373.00342.02508.00977.04974.01318.07489.02881.22156.04444.44342.05469.66522.00147.03882.00733.07733.00879.11621.00635.20417-.00049.40753-.00976.61078-.00245.05823,0,.11633-.00391.17456-.0127.19092-.03858.38007-.06494.56922-.00977.06988-.01319.14013-.0249.2099-.0376.227-.08838.45141-.145.67419-.00782.02972-.01172.05994-.01954.0896-.0083.0304-.0205.05914-.0288.08942-.062.22088-.13038.44-.21094.655-.02246.05945-.05127.11567-.07471.17444-.07422.18415-.1499.36774-.2373.54621-.02149.0429-.04688.083-.06885.12548-.09815.19062-.19971.37934-.31348.5622-.01318.02112-.02832.04053-.0415.06152-.12647.19947-.25977.3949-.4043.5835l-.01758.02087q-.22925.29737-.48779.575l-.01611.01586c-.17188.18268-.352.35907-.543.52668-.03125.0274-.06592.051-.09766.07788-.166.1416-.33545.28088-.51562.41009a7.96868,7.96868,0,0,1-.66992.43329,32.00043,32.00043,0,0,0-11.71387,43.71289,7.99959,7.99959,0,1,1-13.85547,8,48.025,48.025,0,0,1,10.9707-60.998L151.707,97.34766l-.00244-.0044L121.707,45.38574a12.00023,12.00023,0,1,0-20.78515,12l25.999,45.03369a8,8,0,0,1-13.85645,8l-26-45.03369-.01562-.02826L79.06543,51.5293A12.00012,12.00012,0,0,0,58.28027,63.52881l15.99707,27.7077.00293.00519,22,38.106A7.95946,7.95946,0,0,1,92.47852,140.706c-.08643.03675-.17334.06806-.26026.10157q-.33105.12771-.66748.22454c-.08935.02564-.17773.05225-.26758.07465a7.93311,7.93311,0,0,1-.84131.16473c-.0249.00342-.0498.00989-.0747.01307a7.94421,7.94421,0,0,1-.93018.05963c-.02539.00024-.05127.00494-.07666.00494-.05273,0-.10449-.00915-.15723-.01019q-.364-.00723-.72412-.04675c-.08593-.00953-.17138-.01832-.25683-.03058a8.05171,8.05171,0,0,1-.85449-.16712c-.01954-.00506-.03956-.00769-.05909-.01288a8.05256,8.05256,0,0,1-.88867-.29571c-.07471-.0293-.14648-.06305-.22021-.09454q-.33106-.14174-.64844-.313c-.07617-.041-.15186-.08075-.22705-.12421a8.0088,8.0088,0,0,1-.76807-.50262l-.01758-.012a8.00346,8.00346,0,0,1-.72412-.62359c-.06006-.05823-.11767-.12-.17627-.1803q-.25928-.26541-.4956-.5578c-.05469-.06781-.11035-.134-.16309-.204a8.01625,8.01625,0,0,1-.55566-.82623l-22-38.10547a11.99994,11.99994,0,0,0-20.78418,12.00049l42,72.7456a72.00015,72.00015,0,0,0,124.708-72ZM85.65234,233.42871a103.08083,103.08083,0,0,1-30.72461-33.438,7.99959,7.99959,0,1,0-13.85546,8,118.949,118.949,0,0,0,35.46289,38.58643,8.00007,8.00007,0,1,0,9.11718-13.14844Z"></path> </g></svg>
      } 
      className={`${style.projectsButton} ${silkscreen.className}`}
      innerText="About me"
      url="/about"
      sameTab={true}
      />
      <MovingButton
      svg={
        <svg viewBox="0 0 64 64" width={30} height={30} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="iconify iconify--emojione-monotone" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M61.287 53.542c-2.649-2.041-9.702-7.678-16.271-14.452c-4.366-4.505-6.223-9.015-9.533-12.429c-2.998-3.092-5.725-4.894-5.725-4.894l-.768.792l-5.188-5.35l2.004-2.067a.912.912 0 0 0 0-1.262l-.414-.427c.002-.002 5.898-7.936 13.353-5.742c.866.257 1.638.694 1.857.471c.298-.306-.837-1.482-1.502-2.162c-9.431-9.65-19.834 1.104-19.839 1.109l-.367-.379a.846.846 0 0 0-1.222 0l-9.239 9.528a.912.912 0 0 0 0 1.262s1.131 1.979-1.835 2.335c-1.194.145-1.942.414-2.366.769a431.18 431.18 0 0 0-1.979 2.009a.912.912 0 0 0 0 1.262l6.914 7.132a.847.847 0 0 0 1.223 0s1.906-1.99 1.947-2.042c.343-.438.605-1.208.743-2.44c.348-3.06 2.264-1.892 2.264-1.892a.846.846 0 0 0 1.224 0l2.004-2.067l5.186 5.349l-.768.793s1.748 2.813 4.746 5.905c3.309 3.413 7.683 5.328 12.05 9.833c6.567 6.774 12.032 14.047 14.014 16.78c.748 1.029.867.934 1.78-.009l2.849-2.938l2.847-2.937c.915-.946 1.009-1.068.011-1.84" fill="var(--bg)"></path><path d="M34.008 22.689a53.27 53.27 0 0 1 2.497 2.408c1.592 1.642 2.924 3.479 4.259 5.44l8.942-8.943A9.938 9.938 0 0 0 61.72 9.584L53.604 17.7l-5.76-1.543l-1.544-5.763l8.114-8.111a9.92 9.92 0 0 0-9.381 2.63a9.932 9.932 0 0 0-2.631 9.38l-8.394 8.396" fill="var(--bg)"></path><path d="M26.489 35.429a53.723 53.723 0 0 1-2.479-2.743l-9.717 9.718a9.926 9.926 0 0 0-9.381 2.629c-3.883 3.88-3.882 10.174 0 14.055a9.934 9.934 0 0 0 14.054 0a9.939 9.939 0 0 0 2.631-9.384l10.004-10.003c-1.84-1.338-3.567-2.679-5.112-4.272M13.483 57.821l-5.761-1.544l-1.543-5.762l4.218-4.215l5.76 1.541l1.543 5.763l-4.217 4.217" fill="var(--bg)"></path></g></svg>
      } 
      className={`${style.aboutButton} ${silkscreen.className}`}
      innerText="My Projects"
      url="/projects"
      sameTab={true}
      />


      </motion.div>

      <motion.div
        className="hidden md:flex absolute bottom-8 left-[48vw] z-40 rounded-full p-4"
        animate={{y:[0,-15,0]}}
        transition={{type:'tween',duration:2,repeat:Infinity,repeatType:'loop'}}
        onClick={scrollDown}
        whileHover={{backgroundColor:"#ffffff55"}}
        whileInView={{opacity:1}}
        exit={{opacity:0}}
        viewport={{ once: false, amount: 0.1 }}
      >
<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={"4rem"} height={"4rem"}><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z" fill="#cdd6f4"></path> </g></svg>
      </motion.div>

    </section>
    <section className="flex flex-col items-center justify-center relative w-[100vw] h-auto">
      <div className="w-full h-full">
 <svg
      width="100%"
      height="100%"
      id="svg"
      viewBox="0 0 1440 350"
      xmlns="http://www.w3.org/2000/svg"
      className="transition duration-300 ease-in-out delay-150"
    >
      <path
        d="M 0,600 L 0,225 C 47.227190868378784,201.32910173024106 94.45438173675757,177.6582034604821 138,175 C 181.54561826324243,172.3417965395179 221.40966392134845,190.69628788831264 264,217 C 306.59033607865155,243.30371211168736 351.9069625778485,277.5566449862675 390,296 C 428.0930374221515,314.4433550137325 458.9624857672576,317.0771321666174 504,316 C 549.0375142327424,314.9228678333826 608.2430943531207,310.134826347263 664,303 C 719.7569056468793,295.865173652737 772.0651368202593,286.38356244433066 806,271 C 839.9348631797407,255.6164375556693 855.4963583658421,234.3309238754142 893,218 C 930.5036416341579,201.6690761245858 989.9494297163724,190.29274205401265 1036,225 C 1082.0505702836276,259.70725794598735 1114.7059227686689,340.4981079085351 1164,314 C 1213.2940772313311,287.5018920914649 1279.226879208952,153.7148263118471 1328,121 C 1376.773120791048,88.28517368815288 1408.3865603955242,156.64258684407645 1440,225 L 1440,600 L 0,600 Z"
        stroke="none"
        strokeWidth={0}
        fill="#ae6dff"
        fillOpacity={1}
        className="transition-all duration-300 ease-in-out delay-150 path-0"
      />
    </svg> 

      </div>
    <div className="bg-[var(--primary)] w-[100vw]">
      <motion.div 
      initial={{ rotateX: -90, opacity: 0 }}
      whileInView={{ rotateX: 0, opacity: 1 }}
      transition={{ type:'spring', stiffness:200, bounce:50, duration: 0.5, ease: "easeOut" }}
      exit={{opacity:0,rotateX:-90}}
      viewport={{ once: false, amount: 0.1 }}

      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,            
        background: "var(--primary)",
        padding: "2rem",
        borderRadius: "1rem",
        color: "white",
        textAlign: "center",
      }}
      >
            <form action="https://formspree.io/f/xkgbggbj" method="POST" className="flex flex-col items-center w-auto mx-0 md:mx-12 lg:mx-24 mt-8 mb-16 rounded-2xl p-6 shadow-xl lg:p-12  border-3 border-[var(--bg3)]" style={{backgroundImage:"linear-gradient(120deg,var(--bg2) 10%,var(--bg) 100%)",boxShadow:"20px 10px 60px 20px #00000088"}}>
                <h1 className={`text-center w-full text-3xl lg:text-5xl mb-12 ${silkscreen.className}`}>Wanna Talk?

                    <motion.div
                    animate={{opacity:[0,1,0]}}
                    transition={{repeat:Infinity,repeatType:"loop",type:"tween",duration:2,ease:"easeInOut"}}
                    style={{position:"relative",
                      rotate:"-20deg",
                      left:"30vw",
                      bottom:"5vh"
                    }}
                    >
                        <span className={`mx-4 relative top-8 right-8 md:right-0 md:top-0 text-center text-[var(--fg2)] text-sm ${silkscreen.className}`}>I DO NOT BITE</span>
                    </motion.div>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative w-full h-full">
                  <label className="text-xl md:text-2xl text-[var(--fg)] md:text-center">Your Email:</label>
                  <input type="email" name="email" className="focus:border-[var(--primary)] hover:border-[var(--fg3)] outline-none transition-all ease duration-500 md:text-center text-xl md:col-span-3 md:text-2xl border-3 border-[var(--bg3)] rounded-xl px-4 py-2" placeholder="iamsomeone@ohio.com(a real one please...)" required/>


                  <label className="text-xl md:text-2xl text-[var(--fg)] text-center">Your Name:</label>
                  <input type="text" name="name" className="focus:border-[var(--primary)] hover:border-[var(--fg3)] outline-none transition-all ease duration-500 text-center md:text-center text-xl md:col-span-3 md:text-2xl border-3 border-[var(--bg3)] rounded-xl px-4 py-2" placeholder="Fake names work... ig" required/>


                  <label className="text-xl md:text-2xl text-[var(--fg)] text-center">Your Message:</label>
                  <textarea name="message" className="focus:border-[var(--primary)] hover:border-[var(--fg3)] outline-none transition-all ease duration-500 md:text-center text-xl row-span-4 md:row-span-1 md:col-span-3 border-3 border-[var(--bg3)] rounded-xl px-4 py-2" placeholder="Fill this message box with your message please, currently its emptier than my head..." required/>

                </div>
                <button type="submit" className={`rounded-lg w-auto ${silkscreen.className} bg-[var(--primary)] py-4 px-16 my-8 hover:text-[var(--bg)] hover:bg-[var(--primary-darker)] transition-all duration-500 ease`}>
                  Submit
                </button>

            </form>

      </motion.div>

      </div>

    </section>
    <motion.footer initial={{opacity:0,top:'2rem'}}
    whileInView={{opacity:1}}
    exit={{opacity:0,rotateX:-90}}
    viewport={{ once: false, amount: 0.3 }}
    transition={{type:'spring'}}
     className="bg-[var(--bg)] py-4 w-full flex items-center justify-center">
      <h1>© 2025 Copyright | By Shibam Roy</h1>

    </motion.footer>
</>

  );
}
