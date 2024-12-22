import ListaLateral from '../lateralTodosVideos/LateralTodosVideos'
import './Home.css'
import Contenido from './../contenido/Contenido'
import Slider1 from '../slider1/Slider1';


function Home() {
  return (
    <>
      <div className="home_contenedor bg-body-secondary pt-3 pb-3 d-flex justify-content-center col-12">
        <ListaLateral />
        <Contenido />
      </div>
      <div className='container d-flex justify-content-center'>
                <Slider1 />

      </div>
    </>
  );
}

export default Home