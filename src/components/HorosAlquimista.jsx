import React from 'react';
import calculoAlquimista from './calculoAlquimista';
import conversorAlquimista from './conversorAlquimista';

const HorosAlquimista = (props) => {
     
    let numeroAlquimista = calculoAlquimista(props.fecha)
    let horoscopoAlquimista = conversorAlquimista(numeroAlquimista)
    return (
        <div>
            <p>Horoscopo Alquimista: {horoscopoAlquimista}</p>
        </div>
    );
};

export default HorosAlquimista;