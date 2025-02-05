import React, { useContext, useEffect, useState } from 'react'
import Contenido from '../contenido/Contenido'
import { Contexto } from '../../contexto/Contexto'
import { useParams } from 'react-router-dom'
import {getAllVideosPorUsuario} from '../../service/serviceBackend.js'


function BusquedaVideo() {

   const {user}= useContext(Contexto)
   const [videos,setvideos]=useState([])
   const [newvideo,setnewvideo]=useState([])
   const {titulo}= useParams()

   useEffect(() => {
    getAllVideosPorUsuario(setvideos,user); 
  }, [user]); 

  useEffect(() => {
    setnewvideo(
      videos.filter((video) =>video.titulo.toLowerCase().includes(titulo.toLowerCase())
      )
    );
  }, [videos,titulo]); 
  
  return (
    <div style={{marginTop:"100px",marginBottom:"50px",minHeight:"100vh"}} 
    className='d-flex justify-content-center align-items-center'> 
      <div className='container-sm d-flex justify-content-center'>
      <Contenido videos={newvideo} />
      </div>
      
    </div>
  )
}

export default BusquedaVideo
