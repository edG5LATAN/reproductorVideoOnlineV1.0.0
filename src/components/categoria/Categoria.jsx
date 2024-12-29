import React from "react";
import "./Categoria.css";

function Categoria() {
  let data = ["ANIME", "SPRINGBOOT", "REACT", "JAVA", "FRONTEND"];

  return (
    <div className="categoria_contenedor">
      <form className="container">
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
      </form>

      <ul className="list-group container">
        {data.map((res, index) => {
          return (
            <li 
            key={index}
            className="mb-3 pb-3 list-group-item text-uppercase d-flex justify-content-between">
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
