"use client"
import { motion,useMotionValue, useSpring, useTransform } from "framer-motion";
import React from "react";

interface Props{
    innerStuff: React.ReactNode;
    angle:number;
    height?: number|string;
    width?: number|string;
    className?: string;
}

const Component3D: React.FC<Props>=({innerStuff,width,height,angle,className})=>{
    const x=useMotionValue(0);
    const y=useMotionValue(0);
    const xSpring=useSpring(x);
    const ySpring=useSpring(y);

    const rotationX=useTransform(ySpring,
        [-0.5,0.5],[`-${angle}deg`,`${angle}deg`]
    );

    const rotationY=useTransform(xSpring,
        [-0.5,0.5],[`-${angle}deg`,`${angle}deg`]
    );

    const handleMouseHover=(e: React.MouseEvent<HTMLDivElement>)=>{
        const rect=(e.currentTarget as HTMLDivElement).getBoundingClientRect();
        const width=rect.width;
        const height=rect.height;
        const mouseX=e.clientX-rect.left;
        const mouseY=e.clientY-rect.top;
        const xPercent=(mouseX/width)-0.5;
        const yPercent=(mouseY/height)-0.5;
        x.set(xPercent);
        y.set(yPercent);
    }

    const handleMouseLeave=(e: React.MouseEvent<HTMLDivElement>)=>{
        x.set(0);
        y.set(0)
    }
    return (
        <motion.div onMouseMove={handleMouseHover} onMouseLeave={handleMouseLeave} style={{
            rotateX:rotationX,
            rotateY:rotationY,
            transformStyle:"preserve-3d",
            width:width,
            height:height,
            borderRadius:"1rem"
        }} className={className}>
            {innerStuff}
        </motion.div>
    );
}

export default Component3D;