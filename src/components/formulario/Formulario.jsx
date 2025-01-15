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
        <div className="form-floating mb-3">
          <textarea
          style={{height:"100px"}}
            className="form-control"
            placeholder="ingresa detalles de video"
            id="floatingTextarea"
          ></textarea>
          <label for="floatingTextarea">Detalles</label>
        </div>
        <div class="form-floating">
  <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
    <option selected>Open this select menu</option>
    <option value="1">Categoria</option>
    <option value="2">Backend</option>
    <option value="3">Frontend</option>
  </select>
  <label for="floatingSelect">Works with selects</label>
</div>

       
      </form>
    </div>
  );
}

export default Formulario;
