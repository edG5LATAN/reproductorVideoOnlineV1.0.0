import React from "react";
import './VerVideo.css'
import ListaVideos from "../listaVideos/ListaVideos";
import Reproductor from "../reproductor/Reproductor";

function VerVideo() {
  return (
    <div className="verVideo_contenedor d-flex justify-content-center align-items-center flex-column">
      <Reproductor />
      <div className="mt-4 mb-2">
        <h2 className="fw-bold text-primary">React</h2>
      </div>
      <ListaVideos />
    </div>
  );
}

export default VerVideo;
