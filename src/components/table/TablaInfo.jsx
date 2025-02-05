import React from "react";
import "./Table.css";

function TablaInfo({data}) {
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
          {
            data==[]
            ?
            <tr className="text-center">
            <th scope="row">0</th>
            <td>espera</td>
            <td className="tabla_tr_img">
              <img
                src="https://png.pngtree.com/png-vector/20191118/ourmid/pngtree-loading-logo-design-circle-loading-illustration-on-white-background-png-image_1996461.jpg"
                class="img-thumbnail"
                alt="imagen"
              ></img>
            </td>
            <td>
              cargando...
            </td>
            <td>cargando...</td>
          </tr>
          :
          <>
           {
            data.map((res,index)=>{
              return<tr key={index} className="text-center">
              <th scope="row">2</th>
              <td>{res.titulo}</td>
              <td className="tabla_tr_img">
                <img
                  src={res.imagen}
                  class="img-thumbnail"
                  alt="imagen"
                ></img>
              </td>
              <td>
                {res.detalles}
              </td>
              <td>{res.categoria}</td>
            </tr>
            })
           }
          </>
          }
        </tbody>
      </table>
    </div>
  );
}

export default TablaInfo;
