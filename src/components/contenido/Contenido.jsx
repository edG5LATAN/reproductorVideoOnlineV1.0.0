import { useContext, useEffect, useState } from 'react';
import './Contenido.css'
import { useNavigate } from 'react-router-dom';
import { Contexto } from '../../contexto/Contexto';


function contenido({videos}) {

  const [info,setinfo]=useState([])
  const navi=useNavigate();
  const {setvideo}=useContext(Contexto);
   
  useEffect(() => {
    setinfo(videos)
  }, [videos])

  return (
    <div className="col-8 p-2 d-flex gap-2 flex-wrap justify-content-around">
      {
        info==undefined
        ?
        <h1>cargando</h1>
        :
        <>
        {
        info.map((res,index)=>{
          return <div key={index} className="card contendido_tarjeta">
              <h5 className="text-center text-uppercase">{res.titulo}</h5>
              <img
                src={res.imagen}
                className="card-img-top "
                alt="imagen cargando"
                onClick={()=>{navi("/video"),setvideo(res.video)}}
              />
              <div className="card-body">
                <p className="card-text">
                  {res.detalles}
                </p>
              </div>
            </div>
        })
      }
        </>
      }
    </div>
  );
}

export default contenido;
