import React from 'react';
import './LineaAplicaciones.css';


function LineaAplicaciones() {
    return (
        <div className='linea_ap grid blanco'>
            <div>Oferta</div>
            <div>Jornada</div>
            <div>Presencialidad</div>
            <div>Fecha de solicitud</div>
            <div className='sin_borde'>Fecha de respuesta</div>
        </div>
    );
  }

export default LineaAplicaciones;  