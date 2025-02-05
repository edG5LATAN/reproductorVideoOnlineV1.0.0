import React, { useContext, useState } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { Contexto } from "../../contexto/Contexto";

function Header() {

  const navig= useNavigate()

  const {setlogin}=useContext(Contexto)
  const [titulo,settitulo]=useState("")

  const cerrarCession=()=>{
     setlogin(false)
  }

  const enviarBusquedaVideo=()=>{
    if(titulo==""){
      return
    }else{
     navig(`/busqueda/${titulo}`)
    settitulo("") 
    }
    
  }

  return (
    <nav  className="header_contenedor navbar navbar-expand-lg  fixed-top">
      <div className="container-fluid">
          <a className="nav-link text-white disabled" aria-disabled="true">
            EDTecnology.com
          </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link" aria-current="page" href="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/nuevo"} className="nav-link">
                Agregar
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/categoria"} className="nav-link">
                Crear Categoria
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Opciones
              </a>
              <ul className="dropdown-menu">
                <li>
                <Link to={"/borrar"} className="dropdown-item">
                Borrar
              </Link>
                </li>
                <li>
                <Link to={"/acercade"} className="dropdown-item">
                Acerca de
              </Link>
                </li>
                <li>
                  <hr />
                </li>
                <li className="m-2">
                  <button onClick={cerrarCession} className="btn btn-danger">
                    Log-Out
                  </button>
                </li>
              </ul>
            </li>
          </ul>
          <div className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={titulo}
              onChange={(e)=>settitulo(e.target.value)}
            />
            <button
            onClick={()=>enviarBusquedaVideo()} 
            className="btn btn-outline-success" 
            type="button">
              Search
            </button>
          </div>
        </div>
      </div>
    </nav>

  );
}

export default Header;
