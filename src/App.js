import React,{useState} from 'react';
//import './App.css';
import Login from './components/Login';
//import Menu from './components/Menu';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  const [conectado,setConectado] = useState(false);
  const acceder=(estado)=>{
    setConectado(estado)
  }
  return (
    //conectado ? <Dashboard/> : <Login acceder={acceder} />
    <Dashboard/>
  );
}

export default App;
