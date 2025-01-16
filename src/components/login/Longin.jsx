import React from "react";
import "./Login.css";

function Longin() {
  return (
    <div className="login_contenedor d-flex justify-content-center align-items-center">
      <div className="login_login_contenedor">
        <form className="needs-validation p-4 login1 w-50 login d-flex flex-column justify-content-center">
          <h2 className="text-center pb-3">Login</h2>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              required
            />
            <label for="floatingInput">Email address</label>
            <div class="invalid-feedback">
              Please provide a valid zip.
            </div>

          </div>
          <div className="form-floating pb-3">
            <input
              type="password"
              className="form-control"
              id="floatingPassword1"
              required
              placeholder="Password"
            />
            <label for="floatingPassword1">Password</label>
            <div class="invalid-tooltip">
              ingrese cintrasena.
            </div>

          </div>
          <div className="p-3 d-flex justify-content-around align-items-center">
            <button type="submit" className="btn btn-success">
              Login
            </button>
          </div>

        </form>
        <form className="p-4 login2 w-50 login d-flex flex-column justify-content-center">
          <h2 className="text-center pb-3">Create User</h2>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating pb-3">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          
          <select
            class="form-select form-select-lg mb-3"
            aria-label="Large select example"
          >
            <option selected>Roles</option>
            <option value="ADMIN">Admin</option>
            <option value="USER">User</option>
            <option value="CLIENT">Client</option>
          </select>

          <div className="p-3 d-flex justify-content-around align-items-center">
            <button type="submit" className="btn btn-danger">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Longin;
