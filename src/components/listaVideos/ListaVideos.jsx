import React, { useContext, useEffect, useState } from "react";
import './ListaVideo.css'
import { Contexto } from "../../contexto/Contexto";

function ListaVideos({data}) {

  const {setvideo}= useContext(Contexto);
  

  return (
    <div className=" container d-flex justify-content-center align-items-center flex-column">
      {
        data.map((res,index)=>{
          return<div key={index} className="listaVideo_video mb-3 container rounded-4 p-2 d-flex justify-content-between align-items-center">
        <h4 className="text-center w-75 text-uppercase">{res.titulo}</h4>
        <img
          style={{width:"100px",height:"160px"}}
          className="w-25"
          src={res.imagen}
          alt="imagen de video"
          onClick={()=>setvideo(res.video)}
        />
      </div>
        })
      }
     
    </div>
  );
}

export default ListaVideos;
