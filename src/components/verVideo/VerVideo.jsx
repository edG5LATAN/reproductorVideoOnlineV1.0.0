import React, { useContext, useEffect, useState } from "react";
import "./VerVideo.css";
import ListaVideos from "../listaVideos/ListaVideos";
import Reproductor from "../reproductor/Reproductor";
import { useParams } from "react-router-dom";
import { categoriPorId, videoPorCategoria } from "../../service/serviceBackend";
import { Contexto } from "../../contexto/Contexto";
import imagen from '../../../public/imagenes/video.png'


function VerVideo() {
  const { video,setvideo } = useContext(Contexto);
  const { id } = useParams();
  const [data, setdata] = useState([]);
  const [titulo, settitulo] = useState([]);

  useEffect(() => {
    videoPorCategoria(setdata, id);
    categoriPorId(settitulo, id);
    setvideo("");
  }, [id]);

  return (
    <div className="verVideo_contenedor d-flex justify-content-center align-items-center flex-column">
      <>
      {
        video==""
        ?
        <div className="container d-flex justify-content-center align-items-center">
          <img src={imagen} alt="imagen de portada" />
        </div>
        :
        <Reproductor className="container" />

      }
      </>
      <>
        {titulo == null ? (
          <h2 className="fw-bold text-primary text-uppercase">React</h2>
        ) : (
          <h2 className="fw-bold text-primary text-uppercase">
            {titulo.nombre}
          </h2>
        )}
      </>
      <div className="mt-4 mb-2"></div>
      <ListaVideos data={data} />
    </div>
  );
}

export default VerVideo;
