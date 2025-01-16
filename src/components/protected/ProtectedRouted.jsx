import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRouted=({user, children})=>{
  if(!user){
     return <Navigate to="/" />
  }

  return <Outlet />;
}