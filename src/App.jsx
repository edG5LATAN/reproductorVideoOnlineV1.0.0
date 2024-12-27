import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from  './components/home/Home'
import Header from  './components/header/Header'
import Footer from  './components/footer/Footer'
import Agregar from './components/agregar/Agregar'
import Categoria from './components/categoria/Categoria'


function App() {

  return (
    <>
     <BrowserRouter>
     <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/nuevo' element={<Agregar />} />
        <Route path='/categoria' element={<Categoria />} />
      </Routes>
      <Footer />
     </BrowserRouter> 
    </>
  )
}

export default App
