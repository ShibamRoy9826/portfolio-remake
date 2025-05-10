"use client"
import {useEffect} from 'react';
import {motion,useMotionValue,useTransform} from 'framer-motion';

const CustomCursor=()=>{
    const pos={
        x:useMotionValue(0),
        y:useMotionValue(0)
    };
    const cursorStyle = {
        left: useTransform(pos.x, (val) => val - 8),
        top: useTransform(pos.y, (val) => val - 8),
      };
    const moveCursor=(event)=>{
        const {clientX,clientY}=event;
        pos.x.set(clientX);
        pos.y.set(clientY);
    };

    useEffect(()=>{
        window.addEventListener("mousemove",moveCursor);
        return(()=>{
            window.removeEventListener("mousemove",moveCursor);
        })
    },[]);

    return (
        <>
        <motion.div
        className="customCursor"
        style={{
            ...cursorStyle,
            position: 'fixed', 
          }}>

        </motion.div>
        </>
    );
};
export default CustomCursor;
