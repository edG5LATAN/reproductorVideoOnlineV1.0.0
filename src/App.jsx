import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Agregar from "./components/agregar/Agregar";
import Categoria from "./components/categoria/Categoria";
import VerVideo from "./components/verVideo/VerVideo";
import Longin from "./components/login/Longin";
import { useState } from "react";
import { ProtectedRouted } from "./components/protected/ProtectedRouted.jsx";

function App() {
  
  const [user,setuser]=useState({
    usuario:"edwin",
    clave:"1234"
  })

  
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Longin />} />
          <Route element={<ProtectedRouted user={user} />}>
            <Route path="/home" element={<Home />} />
            <Route path="/nuevo" element={<Agregar />} />
            <Route path="/categoria" element={<Categoria />} />
          </Route>
          <Route path="/vervideo" element={<VerVideo />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
