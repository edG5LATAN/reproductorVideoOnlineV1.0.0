import React from "react";

function AsercaDe() {
  return (
    <div className="container d-grid align-items-center align-content-center" style={{ marginTop: "100px",minHeight:"100vh" }}>
      <h1 className="text-uppercase text-center">acerca de proyecto</h1>
      <p className="text-danger-emphasis font-monospace">
        Este proyecto fue desarrollado para poder crear un reproductor de videos
        favoritos donde contara con una autenticacion de usuario para poder
        acceder a los video correspondientes a cada usuario por su categoria y
        por su usuario, sera guardado en una base de datos los unico que podran
        ver el reproductor de videos seran aquellos que tengan un usuario creado
        si no se tiene se podra crear uno.
        <br /> Para su desarrollo se utilizo como Front-End React con ayuda de
        Bootstrap para su visualizacion.
        <br />
        Para su Back-End se utilizo SpringBoot de JAVA con ayuda de
        Spring-Security, Axios y de Cors se creara una
        autencticacion con JWT y Bcrypt para la seguridad para su base de datos
        usamos Mysql lastimosamente hay pocas paginas de despliegue que permitan
        usar una base de datos gratuita por lo que se tendra que usar en
        desarrollo con su informacion de Database.
      </p>
    </div>
  );
}

export default AsercaDe;
