import React from 'react';
import { Link } from 'react-router-dom';
export default function Menu() {
  return(
      <>
        <div className="row">
        <div className="col-lg-3">
            <div className="card">
                
                <div className="card-body">
                    <h5 className="card-title">Registrar Partido</h5>
                    <p className="card-text">Ir al formulario de registro.</p>
                    <Link to='Game_create'>
                    <button class="btn btn-primary"> Aqui </button>
                    </Link>
                </div>
            </div>
        </div>
        <div className="col-lg-3">
        <div className="card">
            
            <div className="card-body">
                <h5 className="card-title">Ver Partidos</h5>
                <p className="card-text">Listado de Resultados.</p>
                <Link to="Games">
                <a href="#" class="btn btn-primary">Ver</a>
                </Link>
                
            </div>
        </div>
        </div>
        <div className="col-lg-3">
        <div className="card">
            
            <div className="card-body">
                <h5 className="card-title">Ver Equipos</h5>
                <p className="card-text">Listado de Equipos.</p>
                <Link to="Teams">
                <a href="#" class="btn btn-primary">Ver</a>
                </Link>
                
            </div>
        </div>
    </div>
    </div>
    </>

);
}