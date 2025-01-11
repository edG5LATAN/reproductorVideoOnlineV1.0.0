import React from "react";
import "./Categoria.css";

function Categoria() {
  let data = ["ANIME", "SPRINGBOOT", "REACT", "JAVA", "FRONTEND"];

  return (
    <div className="categoria_contenedor">
      <h2 className="text-center text-uppercase fw-bold">crear categoria</h2>
      <form className="container pb-5 p-3">
        <div className="mb-3">
          <label for="exampleInputCategoria" className="form-label">
            Categoria
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputCategoria"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputImagen" className="form-label">
            Imagen
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputImagen"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputInformacion" className="form-label">
            informacion
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputInformacion"
          />
        </div>
        <button type="button" class="btn btn-success">Crear</button>
      </form>

      <ul className="list-group container categoria_lista">
        {data.map((res, index) => {
          return (
            <li 
            key={index}
            className="categoria_li mb-3 pb-3 list-group-item text-uppercase d-flex justify-content-between">
              {res}
              <span className="text-danger fw-bold icon-link-hover pointer:hover">
                X
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categoria;
