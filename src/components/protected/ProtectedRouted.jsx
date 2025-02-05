import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom"
import { Contexto } from "../../contexto/Contexto";

export const ProtectedRouted=({ children})=>{
  const {login}= useContext(Contexto)
  if(!login){
     return <Navigate to="/" />
  }

  return <Outlet />;
}