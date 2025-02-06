import axios from "axios"


const dtbase=import.meta.env.VITE_APP_API;

export const getAllVideosPorUsuario = (setVideos,user) => {
  try {
    axios.get(dtbase + "usuario/traerTodosVideos/"+user)
      .then(res => setVideos(res.data))
      .catch(error => console.log(error))
  } catch (error) {
    console.log(error)
  }

}

export const getCategorias = (setdata,user) => {
  try {
    axios.get(dtbase + "usuario/unidad/user/"+user)
      .then(res => setdata(res.data.categorias))
      .catch(error => console.log(error))
  } catch (error) {
    console.log(error)
  }
}

export const loginLoguearse = (loguser, logclave, setlogin, setuser) => {  
  axios.post(dtbase+"usuario/login", {
      usuario: loguser,
      clave: logclave
    })
      .then(response => {
        if(response.data===true){
          setlogin(true)
          setuser(loguser)
        }else{
          return
        }
      })
      .catch(error => {
        // alert('Error en el login', error);
      });
}

export const crearNuevo = (data,setlogueado,setmsj) => {
    axios.post(dtbase + "usuario/crear", data)
    .then(response=>{
      setlogueado(true)
      setmsj("se creo correctamente")
    })
    .catch(error=>{
      setlogueado(false)
      setmsj("usuario ya existe")
    })
  
}

export const videoPorCategoria = (setdata, id) => {
    axios.get(dtbase + "video/videocategoria/"+id)
      .then(res => setdata(res.data))
      .catch(error => console.log(error))
  
}

export const videoPorId=(setvideo,id)=>{
    axios.get(dtbase+"video/unidad/"+id)
    .then(res=>setvideo(res.data))
    .catch(error=>console.log(error))
}

export const categoriPorId=(settitulo,id)=>{
  axios.get(dtbase+"categoria/unidad/"+id)
  .then(res=>settitulo(res.data))
  .catch(error=>console.log(error))
}

export const borrarVideoPorId=(id,setcambio,cambio)=>{
   axios.delete(dtbase+"video/borrar/"+id)
   .then(res=>setcambio(!cambio))
   .catch(error=>console.log(error.status))
}

export const borrarCategoriaPorId=(id,setcambio,cambio)=>{
  axios.delete(dtbase+"categoria/borrar/"+id)
  .then(res=>setcambio(!cambio))
  .catch(error=>console.log(error.message))
}

export const crearCategoriaNueva=(data,setcambio,cambio)=>{
  axios.post(dtbase+"categoria/crear",data)
  .then(res=>setcambio(!cambio))
  .catch(error=>console.log(error.status))
}

export const crearVideoNuevoPorCategoria=(data,setmensaje,setcambio,cambio)=>{
  axios.post(dtbase+"video/crear",data)
  .then(res=>{
    setcambio(!cambio)
    setmensaje(res.status)})
  .catch(error=>{
    setmensaje("")
    console.log(error.status)})
}
