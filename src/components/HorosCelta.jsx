import React from 'react';
import calculoCelta from './calculoCelta';

const HorosCelta = (props) => {
    const fecha = parseInt(props.fecha)    
    const horoscopoCelta = calculoCelta(fecha)
    return (
        <div>
            <p>Horoscopo Celta: {horoscopoCelta}</p>
        </div>
    );
};

export default HorosCelta;