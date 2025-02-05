import ListaLateral from "../lateralTodosVideos/LateralTodosVideos";
import "./Home.css";
import Contenido from "./../contenido/Contenido";
import { useContext, useEffect, useState } from "react";
import { Contexto } from "../../contexto/Contexto";
import {
  getAllVideosPorUsuario,
  getCategorias,
} from "../../service/serviceBackend";

function Home() {
  const { user } = useContext(Contexto);
  const [cambio, setcambio] = useState(true);
  const [data, setdata] = useState([]);
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    getCategorias(setdata, user);
    getAllVideosPorUsuario(setvideos, user);
  }, [cambio]);

  return (
    <>
      <div className="home_contenedor pt-3 pb-3 d-flex justify-content-center col-12">
        <ListaLateral data={data} />
        <Contenido videos={videos} />
      </div>
    </>
  );
}

export default Home;
