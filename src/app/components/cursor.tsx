"use client"
import {useCallback,useEffect} from 'react';
import {motion,useMotionValue,useTransform,MotionValue} from 'framer-motion';

interface CursorPos {
  x:MotionValue<number>;
  y:MotionValue<number>;
}

const CustomCursor=()=>{
    const pos:CursorPos={
        x:useMotionValue(0),
        y:useMotionValue(0)
    };
    const cursorStyle = {
        left: useTransform(pos.x, (val) => val - 8),
        top: useTransform(pos.y, (val) => val - 8),
      };
    const moveCursor=useCallback(
      (event:MouseEvent)=>{
        const {clientX,clientY}=event;
        pos.x.set(clientX);
        pos.y.set(clientY);
      },
      [pos.x,pos.y]
    );

    useEffect(()=>{
        window.addEventListener("mousemove",moveCursor);
        return(()=>{
            window.removeEventListener("mousemove",moveCursor);
        })
    },[]);

    return (
        <>
        <motion.div
        className="customCursor pointer-events-none fixed"
        style={{
            ...cursorStyle,
          }}>

        </motion.div>
        </>
    );
};
export default CustomCursor;
