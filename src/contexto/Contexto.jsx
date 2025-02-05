import { createContext, useState } from "react";


export const Contexto= createContext();

export const Datos=({children})=>{
  const [user,setuser]=useState("")
  const [login,setlogin]=useState(false) 
  const [video,setvideo]=useState("https://youtu.be/BPiW0tkWfeg?si=wEnfeR5t9UfizzqM")

  return(
     <Contexto.Provider value={{user,setuser,login,setlogin,video,setvideo}}>
        {children}
     </Contexto.Provider>
  )
}