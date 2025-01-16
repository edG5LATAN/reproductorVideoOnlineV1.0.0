import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div class="container-fluid">
          <a class="nav-link text-primary disabled" aria-disabled="true">
            EDTecnology.com
          </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link" aria-current="page" href="#">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to={"/nuevo"} className="nav-link">
                Agregar
              </Link>
            </li>
            <li class="nav-item">
              <Link to={"/categoria"} className="nav-link">
                Crear Categoria
              </Link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Opciones
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Borrar
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Aserca d
                  </a>
                </li>
                <li>
                  <hr />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Informacion
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>

  );
}

export default Header;
