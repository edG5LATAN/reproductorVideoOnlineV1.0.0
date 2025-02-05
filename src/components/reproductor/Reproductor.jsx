import React, { useContext } from "react";
import "./Reproductor.css";
import { Contexto } from "../../contexto/Contexto";
import ReactPlayer from "react-player";

function Reproductor() {
  const { video } = useContext(Contexto);

  return (
    <div className="reproductor_video mb-5">
      <ReactPlayer 
      width="100%"
      height="100%"
      className="iframe_video" 
      controls
      url={video} />
    </div>
  );
}

export default Reproductor;
