import { useEffect, useState } from "react";
import "./ListaLateral.css";
import { useNavigate } from "react-router-dom";

function LateralTodosVideos({ data }) {
  const [info, setinfo] = useState([]);

  useEffect(() => {
    setinfo(data);
  }, [data]);

 const navi= useNavigate()


  return (
    <div className="col-4 p-2">
      <div className="list-group" id="list-tab" role="tablist">
        {info == undefined? (
          <h1>cargando</h1>
        ) : (
          <>
            {info.map((cat, index) => {
              return (
                <a
                  key={index}
                  className="list-group-item list-group-item-action"
                  id={cat.id_categoria}
                  data-bs-toggle="list"
                  href="#list-profile"
                  role="tab"
                  aria-controls="list-profile"
                  onClick={() => navi(`/vervideo/${cat.id_categoria}`)}
                >
                  {cat.nombre}
                </a>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default LateralTodosVideos;
