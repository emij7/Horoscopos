import React from 'react';
import calculoEgipcio from './calculoEgipcio';

const HorosEgipcio = (props) => {
    const fecha = parseInt(props.fecha)    
    const horoscopoEgipcio = calculoEgipcio(fecha)
    return (
        <div>
            <p>Horóscopo egipcio: hijos de {horoscopoEgipcio}</p>
        </div>
    );
};

export default HorosEgipcio;