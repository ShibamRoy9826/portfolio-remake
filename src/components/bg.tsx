"use client"
import style from "@/styles/bg.module.css";
import {Application,extend,useTick} from "@pixi/react";
import {Container,Graphics} from "pixi.js";
import {useCallback,useRef} from "react";
import {GRAPHICS_CURVES} from "@pixi/graphics";

extend({Container,Graphics});

const particleCount=100;

interface Particle{
  x:number;
  y:number;
  vx:number;
  vy:number;
}

function updateParticleArr():Particle[]{

  return Array.from({length:particleCount},()=>({
    x:Math.random()*800,
    y:Math.random()*600,
    vx:(Math.random()-0.5)*0.3,
    vy:(Math.random()-0.5)*0.3,
  }));
}

function ParticleStuff(){
  const particleArr=useRef<Particle[]>(updateParticleArr());
  const gra=useRef<Graphics>(new Graphics);
  
  const drawCallBack=useCallback(
    (graphics:Graphics)=>{
      gra.current=graphics;
      gra.current.clear();
      for(const p of particleArr.current){
        gra.current.rect(p.x, p.y, 1,1);
      }
      gra.current.setFillStyle({color:"#c2c2c2"});
      gra.current.fill();
    },[]
  )


  useTick(() => {
    console.log("This runs on every single tick");
      gra.current.clear();
      for(const p of particleArr.current){
        p.x+=p.vx;
        p.y+=p.vy;

        gra.current.circle(p.x, p.y, 1);

        if(p.x<0||p.x>800){
          p.vx*=-1;
        }
        if(p.y<0||p.y>800){
          p.vy*=-1;
        }
      }
      gra.current.setFillStyle({color:"white"});
      gra.current.fill();
  });
  return <pixiGraphics draw={drawCallBack} />;
}


function QuadTreeBG() {
  return (
    <Application className={style.background} background={"#131322"}>
      <pixiContainer>
        <ParticleStuff/>
      </pixiContainer>
    </Application>
  );
}

export default QuadTreeBG;