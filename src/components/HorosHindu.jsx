import React from 'react';
import calculoHindu from './calculoHindu';

const HorosHindu = (props) => {
    const fecha = parseInt(props.fecha)    
    const horoscopoIndu = calculoHindu(fecha)
    return (
        <div>
            <p>Horóscopo Hindú: {horoscopoIndu}</p>
        </div>
    );
};

export default HorosHindu;