import React from "react";
import "./Table.css";

function TablaInfo() {
  return (
    <div className="tabla_contenedor d-flex justify-content-center align-items-center">
      <table className="rounded-3 p-3 table table-dark table-striped container" >
        <thead className="">
          <tr className="text-center">
            <th scope="col">Id</th>
            <th scope="col">Titulo</th>
            <th scope="col" className="w-25">
              Imagen
            </th>
            <th scope="col">Detalles</th>
            <th scope="col">Categoria</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <th scope="row">2</th>
            <td>nokia</td>
            <td className="tabla_tr_img">
              <img
                src="https://i.pinimg.com/originals/21/92/1a/21921acb7222dfc5a347ed1bfeae5da5.jpg"
                class="img-thumbnail"
                alt="imagen"
              ></img>
            </td>
            <td>
              prueba numero 18 de informacion asd asd a sda sd as da sd asdas
              dasd asd asd asd asd asd
            </td>
            <td>ANIME</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TablaInfo;
