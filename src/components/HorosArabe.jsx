import React from 'react';
import BoxHoroscopo from './BoxHoroscopo';
import calculoArabe from './calculoArabe';

const HorosArabe = (props) => {
    const fecha = parseInt(props.fecha)    
    const tuZodiaco = calculoArabe(fecha)
    const title = 'Horóscopo Árabe'
    const explanation = 'Por fecha de nacimiento'
    return (
        <BoxHoroscopo titulo={title} signo={tuZodiaco} explicacion={explanation}/>
    );
};

export default HorosArabe;