import { useEffect } from "react";
import { createContext, useState } from "react";

export const ModeContext=createContext();
export const ModeProvider=({children})=>{
     useEffect(()=>{
          if(localStorage.getItem('mode')==undefined){
           setMode('dark');
          }
     })
     const [mode,setMode]=useState(localStorage.getItem('mode'));
     return <ModeContext.Provider value={[mode,setMode]}>{children}</ ModeContext.Provider>

}