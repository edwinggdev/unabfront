import React,{useRef} from "react";
import { Component } from "react";
import { useEffect,useState } from "react";
import swal from 'sweetalert';
import axios from "axios";

const enviarData = async (url,data)=>{

            
    console.log("--" + data);
    const resp = await fetch(url,{
        method: 'POST',
        body: JSON.stringify(data), //data,
        headers: {  Accept: 'application/form-data',
        'Content-Type': 'application/json',
          }

    })
    .then(() => { console.log("-");
        // Work with JSON data here
        console.log(data);
        //const d = JSON.stringify(json);
        
        //swal({title: "", text: d.msj , icon:"success",button:"Aceptar"});
      })
    .catch(err => {
        // Do something for an error here
        console.log("Error Reading data " + err);

      });

      console.log(resp);
  /*  const json = await resp.json();
    if(json.response === "ok"){
       
        return json; 
    }else 
      return false; */
}

export default function Create() {
    const refEquipo  = useRef();
   // const equipo = "";
    // const url = "http://localhost/api/equipos/add/index.php";
    const url = "http://localhost:9011/equipo/add/";
    var data = new FormData();
    const handleSave=async()=>{
        console.log("oo "+refEquipo.current.value);
        let equipo = "" + refEquipo.current.value; 
        
        data.append('equipo', 'Fred');
        console.log( data);
        axios.post(url,  data )
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
    }    

    return(
        <>
            <form>
                <div>
                    <label>
                        Nombre:
                    </label>
                    <input type="text" placeholder="Nombre de Equipo" ref={refEquipo} />
                </div>
                <div>
                    
                    <input onClick={handleSave} classNmae="btn btn-success" type="button" value="Guardar"></input>
                </div>
            </form>
        </>
    );
}