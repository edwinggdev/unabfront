import React,{useRef} from "react";
import { Component } from "react";
import { useEffect,useState } from "react";
import { useHistory } from "react-router-dom";

export default function Teams() {
    const [items1, setItems] = React.useState([]);

    const history = useHistory();
    
    useEffect(() => {
        const params = {
            // 'Accept': 'application/json',
            // 'Content-Type': 'application/json',
            mode: 'no-cors'
        };
        async function getDatos() {
            // const url = "http://localhost/api/equipos/";
            const url = "http://localhost:9011/equipo/";
            // const response = await fetch(url, params);
            // const body = await response.json();
            // console.log(JSON.stringify(body)); 
        
            // setItems(body);
            fetch(url, params)
            .then(response => { response.json(); })
            //.then(response => {   return response.json(); })
            .then(responseData => { console.log( JSON.parse(responseData) ) })
            .catch(err => {
              console.log("fetch error!!: " + err);
            });
            //setItems(body.map(({ id }) => ({ label: nombre, value: id })));
        }
      
      getDatos();
    }, []);

    const equipoCreate=async()=>{
        console.log("hi")
        history.push("/Team_Create");
    }

    return(
        <>
        <div class="row">
            <input onClick={equipoCreate} className="btn btn-success" type="button" value="Nuevo"></input>
        </div>
        <div class="row">
        <table class="table">
             <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                </tr>
            </thead>
            <tbody>
                    {items1.map((dato) => 
                        <tr>
                            <td>{ dato.id}</td>
                            <td>{ dato.nombre}</td>
                        </tr>
                    )}
            </tbody>
        </table>
        </div>
        
    </>
    );
}