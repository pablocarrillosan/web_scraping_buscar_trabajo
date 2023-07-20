import React from 'react';
import './MostrarAplicacion.css';
import LineaAplicaciones from '../lineaAplicaciones/LineaAplicaciones';


function MostrarAplicacion() {
    return (
      <div className='aplicaciones'>
        <header className='grid'>
            <div>Oferta</div>
            <div>Jornada</div>
            <div>Presencialidad</div>
            <div>Fecha de solicitud</div>
            <div className='sin_borde'>Fecha de respuesta</div>
        </header>

        <LineaAplicaciones/>
      </div>
    );
  }

export default MostrarAplicacion;  