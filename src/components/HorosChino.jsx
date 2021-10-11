import React from 'react';
import calculoChino from './calculoChino';


const HorosChino = (props) => {
    let horoscopoChino = calculoChino(props.fecha)
    return (
        <div>
            <p>Horóscopo Chino: {horoscopoChino}</p>
        </div>
    );
};

export default HorosChino;