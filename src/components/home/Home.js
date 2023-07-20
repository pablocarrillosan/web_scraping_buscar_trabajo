import React from 'react';
import './Home.css'; 
import FormularioEntrada from '../formularioEntrada/FormularioEntrada';
import MostrarAplicacion from '../mostrarAplicacion/MostrarAplicacion';



function Home() {
    return (
      <div className='home'>
        <FormularioEntrada />
        <div className='separador'></div>
        <MostrarAplicacion />
      </div>
    );
  }

export default Home;  