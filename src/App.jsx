import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Agregar from "./components/agregar/Agregar";
import Categoria from "./components/categoria/Categoria";
import VerVideo from "./components/verVideo/VerVideo";
import Longin from "./components/login/Longin";
import { ProtectedRouted } from "./components/protected/ProtectedRouted.jsx";
import Borrar from "./components/borrar/Borrar.jsx";
import AsercaDe from "./components/asercaDe/AsercaDe.jsx";
import { Datos } from "./contexto/Contexto.jsx";
import Video from "./components/video/Video.jsx";
import Slider1 from "./components/slider1/Slider1.jsx";
import BusquedaVideo from "./components/busquedaVideo/BusquedaVideo.jsx";

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Datos>
        <Header />
        <Routes>
          <Route index element={<Longin/>} />
          <Route element={<ProtectedRouted />}>
            <Route path="/home" element={<Home />} />
            <Route path="/nuevo" element={<Agregar />} />
            <Route path="/categoria" element={<Categoria />} />
            <Route path="/vervideo/:id" element={<VerVideo />} />
            <Route path="/borrar" element={<Borrar />} />
            <Route path="/video" element={<Video />} />
            <Route path="/busqueda/:titulo" element={<BusquedaVideo />} />
          </Route>
          <Route path="/acercade" element={<AsercaDe />} />
          <Route path="*" element={<Navigate to={"/"}/>} />
        </Routes>
        </Datos>
        <Slider1 />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
