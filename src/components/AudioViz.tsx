"use client";
import compoStyle from "@/styles/components.module.css";
import {motion} from "framer-motion";
import { useMusicContext } from "@/contexts/musicContext";
import {useRef,useEffect,useState} from "react";

interface VizBar {
  height: number;
  pos: number;
}
const AudioViz=()=>{
    // let waveList=[];
    // for(let i=0; i<38;++i){
    //     waveList.push([Math.floor(Math.random()*200),  i]);
    // };

    const { musicData, updateState} = useMusicContext();

    const audioContextRef=useRef<AudioContext|null>(null);
    const audioSourceRef = useRef<MediaElementAudioSourceNode | null>(null);
    const analyserRef = useRef<AnalyserNode | null>(null); 
    const dataArrayRef = useRef<Uint8Array | null>(null); 
    const animationFrameIdRef= useRef<number | null>(null); 
    const [vizData, setVizData] = useState<VizBar[]>([]);
    let barWidth;

    useEffect(()=>{
        if(typeof window == "undefined") return;
        if(!musicData.audio) return;

        if(!audioContextRef.current){
            audioContextRef.current=new AudioContext();
        }
        const currAudContext=audioContextRef.current;
        const currMusic=musicData.audio;

    if(musicData.audio && audioContextRef.current){
        if (audioSourceRef.current) {
          audioSourceRef.current.disconnect();
          audioSourceRef.current=null;
        }
        if (analyserRef.current) {
            analyserRef.current.disconnect();
            analyserRef.current=null;
        }

        try{
            audioSourceRef.current=currAudContext.createMediaElementSource(currMusic);
            analyserRef.current=audioContextRef.current.createAnalyser();
            analyserRef.current.fftSize=64; // no. of audio samples

            audioSourceRef.current.connect(analyserRef.current);
            audioSourceRef.current.connect(currAudContext.destination);
            
            const bufferSize=analyserRef.current.frequencyBinCount;
            dataArrayRef.current=new Uint8Array(bufferSize);
            barWidth=window.innerWidth/2*bufferSize;

            console.log("The current bar width: ", barWidth);

            const initialBars: VizBar[]=[];
            for(let i=0;i<bufferSize;++i){
                initialBars.push({height:0,pos:i})
            }
            setVizData(initialBars);
        }catch(error){
            console.log(error);
        }
    }

    return()=>{
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
        if(!analyserRef.current|| !dataArrayRef.current) return;
        const analyser=analyserRef.current;
        const dataArray=dataArrayRef.current;
        const animate = () => {
            if (!analyser || !dataArray) return; 

            analyser.getByteFrequencyData(dataArray);
            const newVizData: VizBar[] = [];
            for (let i = 0; i < dataArray.length; ++i) {
                newVizData.push({ height: dataArray[i], pos: i });
            }
            setVizData(newVizData);
            animationFrameIdRef.current = requestAnimationFrame(animate);
        };

        animate();
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
            vizData?(
            vizData.map((b)=>(
                <motion.div
                key={b.pos}
                className={compoStyle.audioWave}
                animate={{height:b.height}}
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
            vizData?(
            vizData.map((b2)=>(
                <motion.div
                key={b2.pos}
                className={compoStyle.audioWave}
                animate={{height:b2.height}}
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