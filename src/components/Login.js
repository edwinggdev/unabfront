import React,{useRef, useState} from 'react';
const URL = "http://localhost/mycms/public/api/v1/auth/login";
const config = {     
  headers: {  Accept: 'application/form-data',
  'Content-Type': 'application/json',}
}
   const enviarData = async (url,data)=>{
    const resp = await fetch(url,{
      method: 'POST',
      body: JSON.stringify(data),
      headers: {  Accept: 'application/form-data',
  'Content-Type': 'application/json',}
      
    });
    //console.log(resp);
    const json = await resp.json();
    console.log(json);
    if(json.token_type === "bearer"){
      console.log("hubo token");
      localStorage.setItem('token',json.access_token)
      return json; 
    }else 
      return false;
   }

   export default function Login(props) {
    const [error, setError] = useState(null);
    const [espera,setEspera] = useState(false);
    const refUsuario = useRef(null);
    const refContrasena = useRef(null);
    const handleLogin=async()=>{
      setEspera(true);
      //console.log(refUsuario.current.value);
      const data={
        "email" : refUsuario.current.value,
        "password" : refContrasena.current.value
      }
      console.log(data);
      const respJson = await enviarData(URL,data);
      console.log("rta del evento",respJson);
      props.acceder(respJson);
      setError("Datos incorrectos");
      setEspera(false);
    }
    return(
      <div className="login">
          <div className="row">
            <div className=" col-sm-6 offset-3 mt-5">
            <div className="card pt-5">
              <div className="card-header">
                Iniciar
              </div>
              <div className="card-body">
                <input 
                className="form-control"
                 type="email" 
                 placeholder="Correo"
                 ref={refUsuario}
                 />
                <input 
                className="form-control" 
                type="password" 
                placeholder="Contaseña" 
                ref={refContrasena}
                />
                { error && 
                <div className="alert alert-danger">
                  {error}
                </div>
                }
                <button 
                onClick={handleLogin}
                disabled = {espera}
                className="btn btn-info"
                >Acceder</button>

              </div>
              <div className="card-footer">
                Olvido su contrasena?
              </div>
            </div>
            </div>
          </div>
          
      </div>
    )
  }
  