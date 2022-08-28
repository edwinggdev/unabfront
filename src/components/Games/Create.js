import React,{useRef} from "react";
import { Component } from "react";
import { useEffect,useState } from "react";
import DayPicker from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import swal from 'sweetalert';

//const MySwal = withReactContent(Swal);

/*function  llenar(){ console.log("hi!!");
    //let response =  fetch("https://jsonplaceholder.typicode.com/todos");
    let equipos = [];
    fetch("http://localhost/lvl-liga/public/api/equipos")
            .then(response => {
                return response.json();
            }).then(data => {
            equipos = data.results.map((planet) => {
                return planet
            });
            console.log(equipos);
            this.setState({
                planets: equipos,
            });
            //console.log(response);
        });
   
    }
*/
    function OverlayComponent({ children, ...props }) {
        return (
          <div {...props}>
            <p>My custom things</p>
           
            { children }
            <p>Some content below the calendar</p>
          </div>
        );
    } 
    
export default function Create() {
    const [items, setItems] = React.useState([]);
    const [goles,setGoles] = React.useState([]);
    let options = [6,7,8,9,0];
    
    useEffect(() => {
        async function getEquipos() {
            //const response = await fetch("http://localhost/api/equipos/");
            const response = await fetch("http://localhost:9011/equipo");
            const body = await response.json();
            console.log(body);
            setItems(body.map(({ nombre,id }) => ({ label: nombre, value: id })));
        }
        async function getGoles(){
            options= [];
            for(let i=0; i<=10;i++){
                options[i]=i;
            }
            //options.fill(0,10);
            
            setGoles(options);
            console.log("!!!"+options);
        }
      getEquipos();
      getGoles();
      //swal({title: "tit", text: "body", icon:"success",button:"Aceptar"});
      }, []);
      const refEquipo1  = useRef(null);
      const refEquipo2 =  useRef(null);
      const refGoles1 =  useRef(null);
      const refGoles2 =  useRef(null);
      const refFecha = useRef(null);
      const refUsuario = useRef("edwing");

      const handleSubmit=async()=>{
        const data={
            "local" : refEquipo1.current.value,
            "visitante" : refEquipo2.current.value,
            "goles_local" : refGoles1.current.value,
            "goles_visitante" : refGoles2.current.value,
            "fecha" : refFecha.current.value,
            "usuario" : refUsuario.current.value
        }
        console.log(data);

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
            if(json.response === "ok"){
                swal({title: "", text: json.msj, icon:"success",button:"Aceptar"});
               console.log("hubo OK");
              //localStorage.setItem('token',json.access_token)
              return json; 
            }else 
              return false; 
        }
        const URL = "http://localhost/api/partidos/save/";
        enviarData(URL,data);
    }
    
       return(
        <>
        <form>
            <div>
                <input type="hidden" name="action" value="login" 
                       ref={refUsuario} />
            </div>
            <div>
                <label>Fecha</label>
                
                <DayPickerInput overlayComponent={OverlayComponent} inputProps={{ ref: refFecha }} />
            </div>
            <div>
                <label>Equipo 1</label>
                <select
                ref={refEquipo1}>
                    {items.map(item => (
                        <option
                        key={item.value}
                        value={item.value}
                        >
                        {item.label}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label>Goles</label>
                <select
                ref={refGoles1}>
                {goles.map(option => <option key={option} value={option}>{option}</option>)}
                </select>
            </div>
            <div>
                <label htmlFor="">Equipo 2</label>
                <select
                ref={refEquipo2}>
                    {items.map(item => (
                        <option
                        key={item.value}
                        value={item.value}
                        >
                        {item.label}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label>Goles</label>
                <select
                ref={refGoles2}>
                {goles.map(option => <option key={option} value={option}>{option}</option>)}

                </select>
            </div>
            <div>
                <input onClick={handleSubmit} classNmae="btn btn-success" type="button" value="Guardar"></input>
            </div>
        </form>
        </>
    );
}