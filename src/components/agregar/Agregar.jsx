import React from 'react'
import Formulario from '../formulario/Formulario'
import './Agregar.css'
import TablaInfo from '../table/TablaInfo'


function Agregar() {
  return (
    <div className='agregar_contenedor'>
      <Formulario />
      <TablaInfo />
    </div>
  )
}

export default Agregar
