"use client";
import React,{useContext, createContext, useState} from "react";

interface MusicContextType {
  musicState: string;
  updateState: (newState: string) => void;
}

const MusicContext=createContext<MusicContextType|undefined>(undefined);

export const MusicContextProvider=({children}:{children:React.ReactNode})=>{
    const [musicState,setMusicState]=useState<string>("stop");

    const updateState=(newState:string)=>{
        setMusicState(newState);
    }
    return (
        <MusicContext.Provider value={{musicState,updateState}}>
            {children}
        </MusicContext.Provider>
    )

}
export const useMusicContext = (): MusicContextType => { 
  const context = useContext(MusicContext);
  if (context === undefined) {
    throw new Error('Not wrapped in a music provider thingy');
  }
  return context; 
};