"use client"
import style from '@/styles/bg.module.css';
import {Canvas} from "@react-three/fiber";


function Scene(){
    return(
        <Canvas>
            <pointLight position={[10,10,10]}/>
            {/* <mesh>
                <planeGeometry args={[1,1,1,1]} />
                <shaderMaterial/>
            </mesh> */}
        </Canvas>
    );
}


export default function Bg(){
        return (
            <div className={style.background}>
                <Scene/>
            </div>

        );
}