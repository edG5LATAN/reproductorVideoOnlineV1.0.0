import React from "react";

function Formulario() {
  return (
    <div className="container bg-body-tertiary rounded-3 border-secondary-subtle border p-5">
      <h2 className="text-center text-uppercase">
        Formulario de creacion nuevo
      </h2>
      <form className="pb-2">
        <div className="mb-3">
          <label for="exampleInputTitulo" className="form-label">
            Titulo
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputTitulo"
            aria-describedby="titulo"
          />
          <div id="titulo" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Imagen
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Detalles
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <select className="mb-3 form-select" aria-label="Default select example">
          <option selected>Categoria</option>
          <option value="JAVA">JAVA</option>
          <option value="REACT">REACT</option>
          <option value="ANIME">ANIME</option>
        </select>

        {/* <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button> */}
      </form>
    </div>
  );
}

export default Formulario;
