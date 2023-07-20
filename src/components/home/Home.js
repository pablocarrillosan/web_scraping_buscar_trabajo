import React from 'react';
import './Home.css'; 
import FormularioEntrada from '../formularioEntrada/FormularioEntrada';



function Home() {
    return (
      <div className='home'>
        <FormularioEntrada />
        <div className='separador'></div>
      </div>
    );
  }

export default Home;  