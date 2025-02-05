import React, { useContext, useEffect, useState } from "react";
import "./Borrar.css";
import { Contexto } from "../../contexto/Contexto";
import { borrarVideoPorId, getAllVideosPorUsuario } from "../../service/serviceBackend";

function Borrar() {

  const {user}= useContext(Contexto)
  const [data,setdata]=useState([])
  const [titulo,settitulo]=useState("")
  const [imagen,setimagen]=useState('https://i.pinimg.com/originals/4b/61/5e/4b615e31746ad2c87a76d58350bfebf7.png')
  const [id,setid]=useState("")
  const [cambio,setcambio]=useState(false)

  useEffect(() => {
    traerTododLosVideos()
  },[cambio])

  const cambioClick=(e)=>{
    setid(e.currentTarget.childNodes[0].innerText)
     settitulo(e.currentTarget.childNodes[1].innerText)
     setimagen(e.currentTarget.childNodes[3].firstElementChild.src)
  }

  const traerTododLosVideos=()=>{
    getAllVideosPorUsuario(setdata,user)
  }
  
  const borrarVideo=()=>{
    if(titulo!=null && titulo!=""&&id!="0"){
      borrarVideoPorId(id,setcambio,cambio);
      limpiar()
    }
  }
  
  function limpiar(){
    setid(0)
    setimagen("https://i.pinimg.com/originals/4b/61/5e/4b615e31746ad2c87a76d58350bfebf7.png")
    settitulo("")
  }

  return (
    <div className="borrar_contenedor">
      <div className="container bg-body-tertiary rounded-3 border-secondary-subtle border p-5">
        <h2 className="text-center text-uppercase">
          Borrar video
        </h2>
        <form className="pb-2">
          <div className="mb-3 d-flex justify-content-between">
           <div className="w-75">
           <div className="w-100">
              <label for="exampleInputTitulo" className="form-label">
                Titulo
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputTitulo"
                aria-describedby="titulo"
                required
                readOnly
                value={titulo}
              />
            </div>
            <div className="w-25 mt-2">
              <label for="exampleInputTitulo" className="form-label">
                Id Video
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputTitulo"
                aria-describedby="titulo"
                required
                readOnly
                value={id}
              />
            </div>
           </div>
            
            <img
              style={{ width: "100px", height: "120px" }}
              src={imagen}
              className="img-thumbnail"
              alt="cargando.."
            ></img>
          </div>

          <div className="text-center">
            <button onClick={borrarVideo} className="btn btn-danger" type="button">
              Borrar
            </button>
          </div>
        </form>
      </div>
      <div className="container mt-5 borrar_tabla">
        <table className="text-center table table-success table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">titulo</th>
              <th scope="col">categoria</th>
              <th scope="col">Imagen</th>
            </tr>
          </thead>
          <tbody className="borrar_tabla_tbody">
            {
              data==null || data==undefined
              ?
              <p className="text-capitalize text-center">cargando</p>
              :
              <>
              {
                data.map((res,index)=>{
                  return <tr key={index} onClick={cambioClick}>
                  <th scope="row">{res.id_video}</th>
                  <td>{res.titulo}</td>
                  <td>{res.categoria}</td>
                  <td>
                  <img
                  style={{ width: "100px", height: "120px" }}
                  src={res.imagen}
                  className="img-thumbnail"
                  alt="imagen"
                ></img>
                  </td>
                </tr>
                })
              }
              </>
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Borrar;
