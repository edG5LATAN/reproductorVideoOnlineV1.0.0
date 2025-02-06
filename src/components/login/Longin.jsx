import React, { useContext, useEffect, useState } from "react";
import "./Login.css";
import { crearNuevo, loginLoguearse } from "../../service/serviceBackend";
import { Contexto } from "../../contexto/Contexto";
import { useNavigate } from "react-router-dom";

function Longin() {

  const navig = useNavigate();
  const { setlogin, setuser, user, login } = useContext(Contexto);
  const [usuario, setusuario] = useState("");
  const [clave, setclave] = useState("");
  const [loguser,setloguser]=useState("")
  const [logclave,setlogclave]=useState("")
  const [logueado,setlogueado]=useState(false)
  const [msj,setmsj]=useState("")

  useEffect(() => {
    if (login) {
      navig("/home");
    }
  }, [login,logueado]);

  const buscarUsuario = (e) => {
    e.preventDefault();
    if (loguser == "" || logclave == "") {
      limpiar();
      return;
    } else {
      verificarData();
      limpiar();
    }
  };

  const crearUsuario = (e) => {
    e.preventDefault();
    if (usuario == "" || clave == "" || usuario=="admin") {
      limpiar();
      return;
    } else {
      const data = {
        usuario: usuario,
        clave: clave,
      };
      crearNuevo(data,setlogueado,setmsj);
      limpiar();
    }
  };

  const verificarData = () => {
    loginLoguearse(loguser, logclave, setlogin, setuser);
  };

  const limpiar = () => {
    setusuario("");
    setclave("");
    setloguser("")
    setlogclave("")
  };

  return (
    <div className="login_contenedor d-flex justify-content-center align-items-center">
      <form className=" login_login_contenedor">
        <div className="needs-validation p-4 login1 w-50 login d-flex flex-column justify-content-center">
          <h2 className="text-center pb-3">Login</h2>
          <div className="form-floating mb-3">
            <input
              required
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Usuario"
              value={loguser}
              onChange={(e) => setloguser(e.target.value)}
            />
            <label htmlFor="floatingInput">Usuario</label>
            <div className="invalid-feedback">no dejar en blanco</div>
          </div>
          <div className="form-floating pb-3">
            <input
              type="password"
              className="form-control"
              id="floatingPassword1"
              required
              placeholder="Password"
              value={logclave}
              onChange={(e) => setlogclave(e.target.value)}
            />
            <label htmlFor="floatingPassword1">Password</label>
            <div className="invalid-tooltip">ingrese contrasena.</div>
          </div>
          <div className="p-3 d-flex justify-content-around align-items-center">
            <button onClick={buscarUsuario} className="btn btn-success">
              Login
            </button>
          </div>
        </div>
        <div className="p-4 login2 w-50 login d-flex flex-column justify-content-center">
          <h2 className="text-center pb-3">Create User</h2>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Usuario"
              required
              value={usuario}
              onChange={(e) => setusuario(e.target.value)}
            />
            <label htmlFor="floatingInput">Usuario</label>
          </div>
          <div className="form-floating pb-3">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              required
              value={clave}
              onChange={(e) => setclave(e.target.value)}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <p className={logueado?"mensaje msjTrue mostrar":"mensaje msjFalse mostrar"}>{msj}</p>
         
          <div className=" p-3 d-flex justify-content-around align-items-center">
           
            <button onClick={crearUsuario} className="btn btn-danger">
              Create
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Longin;
