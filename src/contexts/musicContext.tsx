"use client";
import React,{useContext, createContext, useState} from "react";

interface MusicType{
  musicState:string;
  audio:HTMLAudioElement|null;
}

interface MusicContextType {
  musicData: Partial<MusicType>;
  updateState: (newState: Partial<MusicType>) => void;
}

const MusicContext=createContext<MusicContextType|undefined>(undefined);

export const MusicContextProvider=({children}:{children:React.ReactNode})=>{
    const musicTypeDefaults={
      musicState:"stop",
      audio:null,
    }
    const [musicData,setMusicState]=useState<MusicType>(musicTypeDefaults);

    const updateState= (newData: Partial<MusicType>) => {
      setMusicState((prevData) => ({
        ...prevData,
        ...newData,
      }));
  };
    return (
        <MusicContext.Provider value={{musicData,updateState}}>
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