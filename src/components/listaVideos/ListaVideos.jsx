import React from "react";
import './ListaVideo.css'

function ListaVideos() {
  return (
    <div className=" container d-flex justify-content-center align-items-center flex-column">
      
      <div className="listaVideo_video mb-3 container rounded-4 p-2 d-flex justify-content-between align-items-center">
        <h4>infroamcionc de video</h4>
        <img
          className="w-25"
          src="https://img.freepik.com/vector-gratis/plantilla-reproductor-video-limpio-botones-simples_1017-27217.jpg"
          alt="imagen de video"
        />
      </div>

      <div className="listaVideo_video mb-3 container rounded-4 p-2 d-flex justify-content-between align-items-center">
        <h4>infroamcionc de video</h4>
        <img
          className="w-25"
          src="https://img.freepik.com/vector-gratis/plantilla-reproductor-video-limpio-botones-simples_1017-27217.jpg"
          alt="imagen de video"
        />
      </div>

      <div className="listaVideo_video mb-3 container rounded-4 p-2 d-flex justify-content-between align-items-center">
        <h4>infroamcionc de video</h4>
        <img
          className="w-25"
          src="https://img.freepik.com/vector-gratis/plantilla-reproductor-video-limpio-botones-simples_1017-27217.jpg"
          alt="imagen de video"
        />
      </div>
      
     
    </div>
  );
}

export default ListaVideos;
