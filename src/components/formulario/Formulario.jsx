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
          <input type="text" required className="form-control" id="exampleInputImagen" />
        </div>
        <div className="mb-3">
          <label for="exampleInputVideo" className="form-label">
            Video
          </label>
          <input type="text" required className="form-control" id="exampleInputVideo" />
        </div>
        <div className="form-floating mb-3">
          <textarea
            style={{ height: "100px" }}
            className="form-control"
            placeholder="ingresa detalles de video"
            id="floatingTextarea"
          ></textarea>
          <label for="floatingTextarea">Detalles</label>
        </div>
        <div class="form-floating mb-3">
          <select
            class="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
          >
            <option selected>Open this select menu</option>
            <option value="1">Categoria</option>
            <option value="2">Backend</option>
            <option value="3">Frontend</option>
          </select>
          <label for="floatingSelect">Works with selects</label>
        </div>
        <div className="text-center">
          <button className="btn btn-success" tipe="submite">
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Formulario;
