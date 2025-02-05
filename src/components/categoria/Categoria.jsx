import React, { useContext, useEffect, useState } from "react";
import "./Categoria.css";
import {
  borrarCategoriaPorId,
  crearCategoriaNueva,
  getCategorias,
} from "../../service/serviceBackend";
import { Contexto } from "../../contexto/Contexto";

function Categoria() {
  const { user } = useContext(Contexto);
  const [data, setdata] = useState([]);
  const [info, setinfo] = useState([]);
  const [cambio,setcambio]=useState(false)

  const [categoria, setcategoria] = useState("");
  const [informacion, setinformacion] = useState("");

  useEffect(() => {
    traerCategorias()
  }, [cambio]);

  const borrarCategoria = (id) => {
    if(id!=""){
     borrarCategoriaPorId(id,setcambio,cambio);
     limpiar() 
    }
  };

  const crearNuevaCategoria = () => {
   if(categoria!=""||informacion!=""){
    const dtcategoria={
      "nombre": categoria,
      "informacion": informacion,
      "usuario": user
    }
    crearCategoriaNueva(dtcategoria,setcambio,cambio)
    limpiar()
   }
  };

  const traerCategorias=()=>{
    getCategorias(setdata, user);
  }

  function limpiar() {
    setcategoria(""),
    setinformacion("")
    traerCategorias()
  }

  return (
    <div className="categoria_contenedor">
      <h2 className="text-center text-uppercase fw-bold">crear categoria</h2>
      <form className="container pb-5 p-3">
        <div className="mb-3">
          <label for="exampleInputCategoria" className="form-label">
            Categoria
          </label>
          <input
            value={categoria}
            onChange={(e)=>setcategoria(e.target.value)}
            type="text"
            className="form-control text-lowercase"
            id="exampleInputCategoria"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputImagen" className="form-label">
            Informacion
          </label>
          <input
            value={informacion}
            onChange={(e) => setinformacion(e.target.value)}
            type="text"
            className="form-control text-lowercase"
            id="exampleInputImagen"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputImagen" className="form-label">
            Usuario
          </label>
          <input
            value={user}
            type="text"
            className="form-control text-capitalize"
            id="exampleInputImagen"
            readOnly
          />
        </div>
        <button
          onClick={crearNuevaCategoria}
          type="button"
          className="btn btn-success"
        >
          Crear
        </button>
      </form>

      <ul className="list-group container categoria_lista">
        {info == undefined || info == null ? (
          <p>cargando...</p>
        ) : (
          <>
            {data.map((res, index) => {
              return (
                <li
                  key={index}
                  className="categoria_li mb-3 pb-3 list-group-item text-uppercase d-flex justify-content-between"
                >
                  {res.nombre}
                  <span
                    onClick={()=>borrarCategoria(res.id_categoria)}
                    className="text-danger fw-bold icon-link-hover pointer:hover"
                  >
                    X
                  </span>
                </li>
              );
            })}
          </>
        )}
      </ul>
    </div>
  );
}

export default Categoria;
