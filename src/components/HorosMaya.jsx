import React from 'react';
import calculoMaya from './calculoMaya';

const HorosMaya = (props) => {
    const fecha = parseInt(props.fecha)    
    const horoscopoMaya = calculoMaya(fecha)
    return (
        <div>
            <p>Horoscopo Maya: {horoscopoMaya}</p>
        </div>
    );
};

export default HorosMaya;