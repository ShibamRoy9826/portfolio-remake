import { redirect } from "next/navigation";
import React from "react";

interface SimpleProps{
  text:string;
  className:string;
  url:string;
  sameTab:boolean;
  svg?:React.ReactNode;
}
const SimpleButton:React.FC<SimpleProps>=({text,className,sameTab,url,svg})=>{
  const openTab=()=>{
    if(sameTab && url){
      redirect(url);
    }else{
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }

  return (
    <button className={`${className} shadow-2xl linkCursor`} onClick={openTab}>
      {svg}
        <span className="text-2xl ml-4 w-full text-center text-[var(--bg)] linkCursor no-select" >{text}</span>
    </button>
  );
}

export default SimpleButton;