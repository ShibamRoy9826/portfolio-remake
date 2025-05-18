"use client";
import compoStyle from "@/styles/components.module.css";
import {motion} from "framer-motion";
import { useMusicContext } from "@/contexts/musicContext";
import {useRef,useEffect,useState} from "react";

const AudioViz=()=>{
    let barWidth;

    const { musicData, updateState} = useMusicContext();

    const audioContextRef=useRef<AudioContext|null>(null);
    const audioSourceRef = useRef<MediaElementAudioSourceNode | null>(null);
    const analyserRef = useRef<AnalyserNode | null>(null); 
    const animationFrameIdRef= useRef<number | null>(null); 

    const [vizData, setVizData] = useState<Uint8Array>(new Uint8Array(32).fill(0));

    useEffect(()=>{
        if(typeof window == "undefined") return; // return if not yet loaded
        if(!musicData.audio) return; 

        if(!audioContextRef.current){
            audioContextRef.current=new AudioContext(); 
        }
        // writing some aliases....
        const currAudContext=audioContextRef.current;
        const currMusic=musicData.audio;

    if(musicData.audio && audioContextRef.current){

        // if audio data and audio context is present, remove them
        // to avoid memory leaks, and broken audio
        if (audioSourceRef.current) {
          audioSourceRef.current.disconnect();
          audioSourceRef.current=null;
        }
        if (analyserRef.current) {
            analyserRef.current.disconnect();
            analyserRef.current=null;
        }

        try{
            audioSourceRef.current=currAudContext.createMediaElementSource(currMusic); // connecting audio source to audio element
            analyserRef.current=audioContextRef.current.createAnalyser(); 
            analyserRef.current.fftSize=64; // no. of audio samples to process at once, aka. fast fourier transform size

            audioSourceRef.current.connect(analyserRef.current); // connecting analyser with audio source
            audioSourceRef.current.connect(currAudContext.destination); // connecting destination to source (speakers/headphone)
            
            const bufferSize=32; // frequency band size, fftSize/2
            barWidth=window.innerWidth/2*bufferSize; // calculating barWidth

        }catch(error){
            console.log(error);
        }
    }

    return()=>{
        // cleanup functions
        if(audioSourceRef.current){
            audioSourceRef.current.disconnect();
            audioSourceRef.current=null;
        }
        if(analyserRef.current){
            analyserRef.current.disconnect();
            analyserRef.current=null;
        }
    };
    },[musicData.audio]);


    useEffect(()=>{

        const animate = () => {
            if (!analyserRef.current) return; 
            const data=new Uint8Array(32); // creating new array for setting new data to state var
            analyserRef.current.getByteFrequencyData(data); // updating new data to the new arr
            setVizData(data); // copying data to state var
            animationFrameIdRef.current = requestAnimationFrame(animate); 
        };

        animate();

        // cleanup function
        return ()=>{
            if(animationFrameIdRef.current){
                cancelAnimationFrame(animationFrameIdRef.current);
            }
        }
    },
    [musicData.audio]    
);

    return(
        <>
        <motion.div className={compoStyle.audioViz}
        initial={{height:0,width:barWidth,opacity:0}}
        animate={{height:"10vh",width:barWidth,opacity:1}}
        transition={{type:"spring",stiffness:400,bounce:0.2,visualDuration:0.8}}
        >
        {
            (vizData && musicData.musicState=="play")?(
            Array.from(vizData).map((b,i)=>(
                <motion.div
                key={i}
                className={compoStyle.audioWave}
                animate={{height:b}}
                transition={{type:"spring",ease:"linear"}}
                ></motion.div>
            ))
            ):(
                <div></div>
            )
        }
        </motion.div>

        <motion.div className={compoStyle.audioViz2}
        initial={{height:0,width:barWidth,opacity:0}}
        animate={{height:"10vh",width:barWidth,opacity:1}}
        transition={{type:"spring",stiffness:400,bounce:0.2,visualDuration:0.8}}
        >
        {
            (vizData && musicData.musicState=="play")?(
            Array.from(vizData).map((b,i)=>(
                <motion.div
                key={i}
                className={compoStyle.audioWave}
                animate={{height:b}}
                transition={{type:"spring",duration:0.5,ease:"linear"}}
                ></motion.div>
            ))
            ):(
                <div></div>
            )
        }
        </motion.div>
</>
    );
}

export default AudioViz;