import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';


function Header() {


  return (
    <ul className="pt-1 bg-primary-subtle nav justify-content-center fixed-top nav-tabs">
      <li className="nav-item">
        <Link to={"/"} className="nav-link" aria-current="page" href="#">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to={"/nuevo"} className="nav-link" >
          Agregar
        </Link>
      </li>
      <li className="nav-item">
        <Link to={"/categoria"} className="nav-link">
          Crear Categoria
        </Link>
      </li>
      <li className="nav-item">
        <small small className="fst-italic nav-link disabled pagina" aria-disabled="true">
          EDTecnology.com
        </small>
      </li>
    </ul>
  );
}

export default Header