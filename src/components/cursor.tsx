"use client"
import {useEffect,useState} from 'react';
import {motion,useMotionValue,useSpring} from 'framer-motion';

const CustomCursor=()=>{
    const [isMounted, setIsMounted] = useState(false);
    const [cursorVar, setCursor] = useState("default");
    const cursorX=useMotionValue(-100);
    const cursorY=useMotionValue(-100);
    const springConfig = { damping: 25, stiffness: 600, mass: 0.5 };
    const springX = useSpring(cursorX, springConfig);
    const springY = useSpring(cursorY, springConfig);

    useEffect(() => {
    setIsMounted(true); 

    const handleMouseMove = (event:MouseEvent) => {
      const { clientX, clientY } = event;
      cursorX.set(clientX);
      cursorY.set(clientY);
      const target = event.target as HTMLElement;
      if (!target) return;

      let type = null;

      const targetClasses=target.classList;

      if (targetClasses.contains("linkCursor")) {
        type='link';
      }else if(targetClasses.contains("textCursor")){
        type="text";
      }else if(targetClasses.contains("textSmallCursor")){
        type="textSmall";
      }else{
        type="default";
      }
      setCursor(type);
    };

    if (isMounted) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (isMounted) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
    }, [isMounted, cursorX, cursorY]);

    useEffect(() => {
      if (isMounted) {
        document.body.style.cursor = 'none';
      }
      return () => {
        document.body.style.cursor = 'auto'; 
      };
    }, [isMounted]);

    if (!isMounted) {
      return null; 
    }
    const cursorVariants={
      default:{
        borderRadius:"50%",
        backgroundColor:"#ffffff88",
        width:"2rem",
        height:"2rem",
      },
      text:{
        height:"4rem",
        width:"4px",
        backgroundColor:"var(--primary)",
        borderRadius:"0"
      },
      textSmall:{
        height:"1.5rem",
        width:"4px",
        backgroundColor:"var(--primary)",
        borderRadius:"0"
      },
      link:{
        borderRadius:"50%",
        backgroundColor:"#ffffff55",
        width:"10px",
        height:"10px",
      }
    }

    return (
        <motion.div
          variants={cursorVariants}
          initial={"default"}
          animate={cursorVar}
          style={{
            translateX: springX,
            translateY: springY,
            position: 'fixed', 
            left: -10, 
            top: -10,
            pointerEvents: 'none', 
            zIndex: 9999,
          }} 
        >

        </motion.div>
    );
};

export default CustomCursor;
