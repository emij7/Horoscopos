import React from 'react';
import calculoArabe from './calculoArabe';

const HorosArabe = (props) => {
    const fecha = parseInt(props.fecha)    
    const horoscopoArabe = calculoArabe(fecha)
    return (
        <div>
            <p>Horoscopo Árabe: {horoscopoArabe} </p>
        </div>
    );
};

export default HorosArabe;