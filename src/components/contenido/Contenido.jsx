import './Contenido.css'


function contenido( ) {

  const dataContenido = [
    {
      imagen:
        "https://i.pinimg.com/originals/93/e1/0e/93e10ed8f77e823a23a475ac70b474cc.jpg",
      titulo: "dadandadn",
      detalle:
        "Some quick example text to build on the card title and make up the bulk of the content.",
    },
    {
      imagen:
        "https://i.pinimg.com/originals/93/e1/0e/93e10ed8f77e823a23a475ac70b474cc.jpg",
      titulo: "dadandadn",
      detalle:
        "Some quick example text to build on the card title and make up the bulk of the content.",
    },
    {
      imagen:
        "https://i.pinimg.com/originals/93/e1/0e/93e10ed8f77e823a23a475ac70b474cc.jpg",
      titulo: "dadandadn",
      detalle:
        "Some quick example text to build on the card title and make up the bulk of the content.",
    },
    {
      imagen:
        "https://i.pinimg.com/originals/93/e1/0e/93e10ed8f77e823a23a475ac70b474cc.jpg",
      titulo: "dadandadn",
      detalle:
        "Some quick example text to build on the card title and make up the bulk of the content.",
    },
    {
      imagen:
        "https://i.pinimg.com/originals/93/e1/0e/93e10ed8f77e823a23a475ac70b474cc.jpg",
      titulo: "dadandadn",
      detalle:
        "Some quick example text to build on the card title and make up the bulk of the content.",
    },
    {
      imagen:
        "https://i.pinimg.com/originals/93/e1/0e/93e10ed8f77e823a23a475ac70b474cc.jpg",
      titulo: "dadandadn",
      detalle:
        "Some quick example text to build on the card title and make up the bulk of the content.",
    },
    {
      imagen:
        "https://i.pinimg.com/originals/93/e1/0e/93e10ed8f77e823a23a475ac70b474cc.jpg",
      titulo: "dadandadn",
      detalle:
        "Some quick example text to build on the card title and make up the bulk of the content.",
    },
  ];

  return (
    <div className="col-8 p-2 d-flex gap-2 flex-wrap justify-content-around">
      {
        dataContenido.map((res,index)=>{
          return (
            <div className="card">
              <h5 className="text-center text-uppercase">{res.titulo}</h5>
              <img
                src={res.imagen}
                className="card-img-top "
                alt="imagen cargando"
              />
              <div className="card-body">
                <p className="card-text">
                  {res.detalle}
                </p>
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

export default contenido;
