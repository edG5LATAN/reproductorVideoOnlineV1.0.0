import React from 'react'
import './Header.css'


function Header() {
  return (
    <ul className="bg-primary-subtle nav justify-content-center fixed-top nav-tabs">
      <li className="nav-item">
        <a className="nav-link" aria-current="page" href="#">
          Active
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Link
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Link
        </a>
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