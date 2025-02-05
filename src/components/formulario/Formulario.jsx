import React, { useContext, useEffect, useState } from "react";
import './Formulario.css'
import {
  crearVideoNuevoPorCategoria,
  getCategorias,
} from "../../service/serviceBackend";
import { Contexto } from "../../contexto/Contexto.jsx";

function Formulario() {

  const { user } = useContext(Contexto);
  const [titulo, settitulo] = useState("");
  const [imagen, setimagen] = useState("");
  const [video, setvideo] = useState("");
  const [detalles, setdetalles] = useState("");
  const [opc, setopc] = useState("");
  const [categoria, setcategoria] = useState([]);
  const [cambio,setcambio]=useState(false)
  const [mensaje,setmensaje]=useState('');
  let info=[];
  useEffect(() => {
    getCategorias(setcategoria, user);
  }, [cambio]);

  const agregarVideoNuevo = (e) => {
    e.preventDefault();
    if (titulo != "" && imagen != "" && video != "" && opc != "") {
      info = {
        titulo: titulo,
        imagen: imagen,
        video: video,
        detalles: detalles,
        categoria: opc,
      };
      crearVideoNuevoPorCategoria(info,setmensaje,setcambio,cambio);
      limpiar();
    } else {
      limpiar();
      setmensaje()
      return;
    }
  };

  function limpiar() {
    settitulo("");
    setimagen("");
    setvideo("");
    setdetalles("");
  }

  return (
    <div className="container-sm bg-body-tertiary rounded-3 border-secondary-subtle border p-5">
      <h2 className="text-center text-uppercase">
        Crear nuevo video
      </h2>
      <form className="pb-2">
        <div className="mb-3">
          <label for="exampleInputTitulo" className="form-label">
            Titulo
          </label>
          <input
            value={titulo}
            onChange={(e) => settitulo(e.target.value)}
            type="text"
            className="form-control text-lowercase"
            id="exampleInputTitulo"
            aria-describedby="titulo"
            required
          />
          <div id="titulo" className="form-text">
            rellena todos los campos para no tener errores.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputImagen" className="form-label">
            Imagen
          </label>
          <input
            value={imagen}
            onChange={(e) => setimagen(e.target.value)}
            type="text"
            required
            className="form-control"
            id="exampleInputImagen"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputVideo" className="form-label">
            Video
          </label>
          <input
            value={video}
            onChange={(e) => setvideo(e.target.value)}
            type="text"
            required
            className="form-control "
            id="exampleInputVideo"
          />
        </div>
        <div className="form-floating mb-3">
          <textarea
            value={detalles}
            onChange={(e) => setdetalles(e.target.value)}
            style={{ height: "100px" }}
            className="form-control"
            placeholder="ingresa detalles de video"
            id="floatingTextarea"
          ></textarea>
          <label for="floatingTextarea">Detalles</label>
        </div>
        <div className="form-floating mb-3">
          <select
            className="form-select text-uppercase"
            id="floatingSelect"
            value={opc}
            aria-label="Floating label select example"
            onChange={(e) => setopc(e.target.value)}
          >
            <option selected value="">
              Elige una Opcion
            </option>
            {categoria.map((res, index) => {
              return (
                <option key={index} value={res.nombre}>
                  {res.nombre}
                </option>
              );
            })}
          </select>
          <label for="floatingSelect">Caegorias</label>
        </div>
        <div className="text-center">
          <button
            onClick={(e) => agregarVideoNuevo(e)}
            className="btn btn-success"
            tipe="submite"
          >
            Agregar
          </button>
        </div>
      </form>
      <>
      {
        mensaje==200&& mensaje!=null
        ?
        <p className="text-success fw-bold">se creo correctamente video</p>
        :
        <p className="text-danger fw-bold">rellene los datos</p>
      }
      </>
    </div>
  );
}

export default Formulario;
