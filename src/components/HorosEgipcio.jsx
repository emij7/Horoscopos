import React from 'react';
import BoxHoroscopo from './BoxHoroscopo';
import calculoEgipcio from './calculoEgipcio';

const HorosEgipcio = (props) => {
    const fecha = parseInt(props.fecha)    
    const tuZodiaco = calculoEgipcio(fecha)
    const title = 'Horóscopo Egipcio'
    const explanation = 'Por fecha de nacimiento:'
    return (
        <BoxHoroscopo titulo={title} signo={tuZodiaco} explicacion={explanation}/>
    );
};

export default HorosEgipcio;