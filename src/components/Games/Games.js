import React,{useRef} from "react";
import { Component } from "react";
import { useEffect,useState } from "react";

export default function Games() {
    const [items, setItems] = React.useState([]);
    
    useEffect(() => {
        
        async function getPartidos() {
            const response = await fetch("http://localhost/api/partidos/");
            const body = await response.json();
            console.log(body);
            setItems(body);
            //setItems(body.map(({ id }) => ({ label: nombre, value: id })));
        }
      
      getPartidos();
    }, []);

    return(
        <>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Fecha</th>
      <th scope="col">-</th>
      <th scope="col">-</th>
      <th scope="col">-</th>
      <th scope="col">-</th>
      <th scope="col">-</th>
    </tr>
  </thead>
  <tbody>
        {items.map((dato) => 
            <tr>
                <td>{ dato.id}</td>
                <td>{ dato.fecha}</td>
                <td>{ dato.equipo1}</td>
                <td>{ dato.goles1}</td>
                <td>-</td>
                <td>{ dato.goles2}</td>
                <td>{ dato.equipo2}</td>
            </tr>
        )}
    </tbody>
    </table>
    </>
    );
}